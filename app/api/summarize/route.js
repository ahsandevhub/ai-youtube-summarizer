import { generateSummary } from "@/app/lib/summarizer";
import { NextResponse } from "next/server";
import { YoutubeTranscript } from "youtube-transcript";

export const maxDuration = 300; // 5 minutes for Vercel Pro plan
export const dynamic = "force-dynamic";

// Helper function to validate YouTube URL
function isValidYouTubeUrl(url) {
  const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
  return pattern.test(url);
}

// Helper function to format seconds into HH:MM:SS
function formatTimestamp(seconds) {
  const date = new Date(0);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8);
}

async function fetchYouTubeCaptions(url) {
  try {
    const transcript = await YoutubeTranscript.fetchTranscript(url);

    if (!transcript || transcript.length === 0) {
      throw new Error("No captions available for this video.");
    }

    return {
      fullText: transcript.map((item) => item.text).join(" "),
      transcript,
    };
  } catch (error) {
    console.error("Error fetching YouTube captions:", error);
    throw new Error(`Failed to fetch captions: ${error.message}`);
  }
}

export async function POST(request) {
  try {
    const { url, options = {} } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: "YouTube URL is required" },
        { status: 400 }
      );
    }

    if (!isValidYouTubeUrl(url)) {
      return NextResponse.json(
        { error: "Invalid YouTube URL" },
        { status: 400 }
      );
    }

    // Fetch captions and transcript
    const { fullText, transcript } = await fetchYouTubeCaptions(url);

    // Generate summary with options
    const summary = await generateSummary(fullText, options);

    console.log("====================================");
    console.log("Response:", { transcript, summary });
    console.log("====================================");

    return NextResponse.json({
      summary,
      transcript,
    });
  } catch (error) {
    console.error("Summarization error:", error);
    return NextResponse.json(
      {
        error: error.message || "Failed to generate summary",
        details:
          process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
