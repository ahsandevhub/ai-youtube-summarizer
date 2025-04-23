"use client";

import AdvancedFeatures from "@/app/components/AdvancedFeatures";
import EducationalTools from "@/app/components/EducationalTools";
import SummaryOptions from "@/app/components/SummaryOptions";
import TranscriptSection from "@/app/components/TranscriptSection";
import axios from "axios";
import {
  Clock,
  Copy,
  Download,
  FileText,
  Lightbulb,
  Loader2,
  Sparkles,
  X,
  Youtube,
} from "lucide-react";
import { useState } from "react";

const Homepage = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [error, setError] = useState("");
  const [videoId, setVideoId] = useState(null);
  const [transcript, setTranscript] = useState(null);
  const [summaryOptions, setSummaryOptions] = useState({
    length: "medium",
    format: "paragraph",
  });

  // Extract video ID from URL
  const extractVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const extractedVideoId = extractVideoId(youtubeUrl);
    if (!youtubeUrl || !extractedVideoId) {
      setError("Please enter a valid YouTube URL");
      return;
    }

    setIsLoading(true);
    setError("");
    setSummary("");
    setVideoId(extractedVideoId);
    setTranscript(null);

    try {
      const summaryResponse = await axios.post("/api/summarize", {
        url: youtubeUrl,
        options: summaryOptions,
      });

      setSummary(summaryResponse.data.summary);
      setTranscript(summaryResponse.data.transcript);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to generate summary. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setYoutubeUrl("");
    setSummary("");
    setError("");
    setVideoId(null);
    setTranscript(null);
    setSummaryOptions({
      length: "medium",
      format: "paragraph",
    });
  };

  // Glassmorphism Card Component
  const GlassCard = ({ children, className = "" }) => (
    <div
      className={`bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-white/20 ${className}`}
    >
      {children}
    </div>
  );

  // Skeleton loader components with glassmorphism
  const SummarySkeleton = () => (
    <div className="space-y-4 animate-pulse">
      <div className="h-6 bg-white/20 rounded w-1/3"></div>
      <div className="space-y-2">
        <div className="h-4 bg-white/20 rounded"></div>
        <div className="h-4 bg-white/20 rounded w-5/6"></div>
        <div className="h-4 bg-white/20 rounded w-3/4"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-white/20 rounded"></div>
        <div className="h-4 bg-white/20 rounded w-4/5"></div>
      </div>
    </div>
  );

  const VideoPlaceholder = () => (
    <GlassCard className="aspect-video flex items-center justify-center">
      <div className="text-center p-6">
        <Youtube className="mx-auto h-12 w-12 text-white/50" />
        <h3 className="mt-2 text-lg font-medium text-white">
          No video selected
        </h3>
        <p className="mt-1 text-sm text-white/70">
          Enter a YouTube URL to load the video
        </p>
      </div>
    </GlassCard>
  );

  const TranscriptPlaceholder = () => (
    <GlassCard>
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Transcript</h2>
        </div>
        <div className="text-center py-12">
          <FileText className="mx-auto h-12 w-12 text-white/50" />
          <h3 className="mt-2 text-lg font-medium text-white">
            No transcript available
          </h3>
          <p className="mt-1 text-sm text-white/70">
            The video transcript will appear here after processing
          </p>
        </div>
      </div>
    </GlassCard>
  );

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <GlassCard className="py-6 px-8">
            <h1 className="text-4xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
              YouTube Video Summarizer
            </h1>
            <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
              Transform long videos into concise, AI-powered summaries in
              seconds
            </p>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <GlassCard>
              <div className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="youtube-url"
                        className="block text-sm font-medium text-white/90"
                      >
                        YouTube Video URL
                      </label>
                      <span className="text-xs text-white/60">
                        Paste any YouTube link
                      </span>
                    </div>
                    <div className="mt-1 flex rounded-lg shadow-sm relative">
                      <input
                        type="text"
                        id="youtube-url"
                        className="block w-full rounded-lg border-0 py-3 px-4 text-white bg-white/10 backdrop-blur-sm placeholder:text-white/50 ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-indigo-400 focus:outline-none sm:text-sm sm:leading-6"
                        placeholder="https://www.youtube.com/watch?v=..."
                        value={youtubeUrl}
                        onChange={(e) => setYoutubeUrl(e.target.value)}
                      />
                      {youtubeUrl && (
                        <button
                          type="button"
                          onClick={() => setYoutubeUrl("")}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/70"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  </div>

                  <SummaryOptions
                    options={summaryOptions}
                    setOptions={setSummaryOptions}
                  />

                  {error && (
                    <div className="rounded-md bg-red-400/20 backdrop-blur-sm p-4 border border-red-400/30">
                      <div className="flex">
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-white">
                            {error}
                          </h3>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`flex flex-1 justify-center rounded-lg bg-gradient-to-r from-indigo-300/50 to-purple-300/50 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:from-indigo-600/50 hover:to-purple-700/50 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all ${
                        isLoading ? "opacity-80 cursor-not-allowed" : ""
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Sparkles className="-ml-1 mr-3 h-5 w-5 text-white" />
                          Generate Summary
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleClear}
                      disabled={
                        isLoading || (!youtubeUrl && !summary && !videoId)
                      }
                      className={`flex items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-offset-2 transition-all ${
                        isLoading || (!youtubeUrl && !summary && !videoId)
                          ? "bg-white/5 text-white/30 cursor-not-allowed"
                          : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                      }`}
                    >
                      <X className="h-5 w-5" />
                      <span className="sr-only md:not-sr-only md:ml-2">
                        Clear
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </GlassCard>

            {isLoading && (
              <div className="mt-6 text-center">
                <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white border border-white/20">
                  <Clock className="-ml-1 mr-1.5 h-5 w-5 text-white/70" />
                  Processing takes about 30-60 seconds depending on video length
                </div>
              </div>
            )}

            {isLoading ? (
              <div className="space-y-6">
                <GlassCard>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold text-white">
                        Video Summary
                      </h2>
                      <div className="flex space-x-2">
                        <button
                          className="text-sm font-medium text-white/50 cursor-not-allowed"
                          disabled
                        >
                          Copy
                        </button>
                        <button
                          className="text-sm font-medium text-white/50 cursor-not-allowed"
                          disabled
                        >
                          Export
                        </button>
                      </div>
                    </div>
                    <SummarySkeleton />
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold text-white">
                        Advanced Features
                      </h2>
                    </div>
                    <SummarySkeleton />
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold text-white">
                        Educational Tools
                      </h2>
                    </div>
                    <SummarySkeleton />
                  </div>
                </GlassCard>
              </div>
            ) : summary ? (
              <div className="space-y-6">
                <GlassCard>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold text-white">
                        Video Summary
                      </h2>
                      <div className="flex space-x-2">
                        <button
                          className="flex items-center text-sm font-medium text-white hover:text-indigo-300 transition-colors"
                          onClick={() => {
                            navigator.clipboard.writeText(summary);
                          }}
                        >
                          <Copy className="mr-1 h-4 w-4" />
                          Copy
                        </button>
                        <button className="flex items-center text-sm font-medium text-white hover:text-indigo-300 transition-colors">
                          <Download className="mr-1 h-4 w-4" />
                          Export
                        </button>
                      </div>
                    </div>
                    <div className="prose max-w-none text-white/90">
                      <p className="whitespace-pre-line">{summary}</p>
                    </div>
                  </div>
                </GlassCard>

                <AdvancedFeatures summary={summary} />
                <EducationalTools summary={summary} />
              </div>
            ) : (
              <GlassCard>
                <div className="p-6 sm:p-8">
                  <div className="text-center py-12">
                    <Lightbulb className="mx-auto h-12 w-12 text-white/50" />
                    <h3 className="mt-2 text-lg font-medium text-white">
                      Ready to summarize
                    </h3>
                    <p className="mt-1 text-sm text-white/70">
                      Enter a YouTube URL and click "Generate Summary" to get
                      started
                    </p>
                  </div>
                </div>
              </GlassCard>
            )}
          </div>

          <div className="lg:col-span-2 space-y-6">
            {videoId ? (
              <GlassCard>
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    className="w-full h-full bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-white/20"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube video player"
                  ></iframe>
                </div>
              </GlassCard>
            ) : (
              <VideoPlaceholder />
            )}

            {transcript ? (
              <TranscriptSection transcript={transcript} videoId={videoId} />
            ) : isLoading ? (
              <GlassCard>
                <div className="px-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-white">
                      Transcript
                    </h2>
                  </div>
                  <div className="space-y-4 animate-pulse">
                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                    <div className="h-4 bg-white/20 rounded"></div>
                    <div className="h-4 bg-white/20 rounded w-5/6"></div>
                    <div className="h-4 bg-white/20 rounded w-1/2"></div>
                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                    <div className="h-4 bg-white/20 rounded"></div>
                    <div className="h-4 bg-white/20 rounded w-5/6"></div>
                    <div className="h-4 bg-white/20 rounded w-1/2"></div>
                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                    <div className="h-4 bg-white/20 rounded"></div>
                    <div className="h-4 bg-white/20 rounded w-5/6"></div>
                    <div className="h-4 bg-white/20 rounded w-1/2"></div>
                  </div>
                </div>
              </GlassCard>
            ) : (
              <TranscriptPlaceholder />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
