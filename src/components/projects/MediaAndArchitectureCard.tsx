"use client";

import { useState } from "react";
import { FileText, Presentation, LayoutGrid, Video } from "lucide-react";

type Props = {
  videoUrl?: string;
  pitchDeckUrl?: string;
  executiveSummaryUrl?: string;
  architectureTable?: { headers: string[]; rows: string[][] };
};

const cardStyle = {
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 50%, rgba(255,120,200,0.04) 100%)",
};

export function MediaAndArchitectureCard({
  videoUrl,
  pitchDeckUrl,
  executiveSummaryUrl,
  architectureTable,
}: Props) {
  const hasMedia = videoUrl || pitchDeckUrl || executiveSummaryUrl;
  const hasTable = architectureTable && architectureTable.headers.length > 0 && architectureTable.rows.length > 0;
  const [showTable, setShowTable] = useState(hasTable && !hasMedia);

  return (
    <div
      className="rounded-2xl border border-white/15 p-6 sm:p-7"
      style={cardStyle}
    >
      {showTable && hasTable ? (
        <>
          <h2 className="text-lg font-semibold text-white tracking-tight mb-4">System architecture</h2>
          <div className="overflow-x-auto -mx-1">
            <table className="w-full min-w-[640px] text-sm text-left border-collapse">
              <thead>
                <tr>
                  {architectureTable!.headers.map((h, i) => (
                    <th
                      key={i}
                      className="pb-2 pr-3 pt-0 font-semibold text-white/95 whitespace-nowrap border-b border-white/15"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {architectureTable!.rows.map((row, i) => (
                  <tr key={i} className="border-b border-white/10">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="py-2.5 pr-3 text-white/90 align-top max-w-[200px] sm:max-w-[280px]"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {hasMedia && (
            <button
              type="button"
              onClick={() => setShowTable(false)}
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-white/95 transition hover:bg-white/[0.1]"
            >
              <Video size={16} />
              Back to demo
            </button>
          )}
        </>
      ) : (
        <>
          <h2 className="text-lg font-semibold text-white tracking-tight">Media & resources</h2>
          <div className="mt-4 flex flex-col gap-4">
            {videoUrl && (
              <div className="flex flex-col items-center">
                <p className="text-[15px] font-medium text-white/95 mb-2 w-full">Design prototype walkthrough</p>
                <video
                  src={videoUrl}
                  controls
                  playsInline
                  preload="auto"
                  className="max-w-full w-full max-h-[70vh] rounded-xl border border-white/10 bg-black/40 object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {executiveSummaryUrl && (
                <a
                  href={executiveSummaryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-white/95 transition hover:bg-white/[0.1]"
                >
                  <FileText size={16} />
                  Executive summary (PDF)
                </a>
              )}
              {pitchDeckUrl && (
                <a
                  href={pitchDeckUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-white/95 transition hover:bg-white/[0.1]"
                >
                  <Presentation size={16} />
                  Pitch deck (PDF)
                </a>
              )}
              {hasTable && (
                <button
                  type="button"
                  onClick={() => setShowTable(true)}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-white/95 transition hover:bg-white/[0.1]"
                >
                  <LayoutGrid size={16} />
                  System architecture
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
