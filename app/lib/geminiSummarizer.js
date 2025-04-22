// /app/lib/summarizer/index.js
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateSummary(text) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Summarize the following text: ${text}`,
    });

    if (
      !response ||
      !response.candidates ||
      response.candidates.length === 0 ||
      !response.candidates[0].content.parts ||
      response.candidates[0].content.parts.length === 0
    ) {
      throw new Error("Failed to generate summary from Gemini API");
    }

    return response.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Error generating summary with Gemini:", error);
    throw new Error(`Gemini summary generation failed: ${error.message}`);
  }
}
