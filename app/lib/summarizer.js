const OpenAI = require("openai");

const client = new OpenAI({
  baseURL: "https://api.studio.nebius.com/v1/",
  apiKey: process.env.NEBIUS_API_KEY,
});

const summaryLengths = {
  short: "Provide a very concise summary in 1-2 sentences.",
  medium: "Provide a summary in one short paragraph (3-5 sentences).",
  long: "Provide a detailed summary with key points (6-10 sentences).",
};

const summaryFormats = {
  paragraph: "Format as a coherent paragraph.",
  bullet: "Format as bullet points.",
  keypoints: "Extract only the most important key points.",
};

export async function generateSummary(text, options = {}) {
  try {
    const { length = "medium", format = "paragraph" } = options;

    const response = await client.chat.completions.create({
      model: "deepseek-ai/DeepSeek-V3",
      max_tokens: length === "long" ? 1024 : 512,
      temperature: 0.3,
      top_p: 0.95,
      messages: [
        {
          role: "system",
          content: `You are a YouTube video summarizer. ${summaryLengths[length]} ${summaryFormats[format]}`,
        },
        {
          role: "user",
          content: `Summarize this video content:\n\n${text.substring(
            0,
            12000
          )}`, // Limit input size
        },
      ],
    });

    if (!response?.choices?.[0]?.message?.content) {
      throw new Error("Invalid response from AI API");
    }

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("Summarization error:", error);
    throw new Error(`Summary generation failed: ${error.message}`);
  }
}
