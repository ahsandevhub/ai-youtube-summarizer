// /app/lib/summarizer/index.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Replace with your OpenAI key
});

export async function generateSummary(text) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or "gpt-4-turbo" for better results
      messages: [
        {
          role: "system",
          content:
            "You are a helpful text youtube video summarizer. Provide concise summaries.",
        },
        {
          role: "user",
          content: `Summarize the following youtube video captions text: ${text}`,
        },
      ],
      temperature: 0.3, // Lower = more deterministic output
    });

    if (
      !response ||
      !response.choices ||
      response.choices.length === 0 ||
      !response.choices[0].message.content
    ) {
      throw new Error("Failed to generate summary from OpenAI API");
    }

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error generating summary with OpenAI:", error);
    throw new Error(`OpenAI summary generation failed: ${error.message}`);
  }
}
