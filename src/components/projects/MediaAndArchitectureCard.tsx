"use client";

import { useState } from "react";

type Props = {
  videoUrl?: string;
  pitchDeckUrl?: string;
  executiveSummaryUrl?: string;
  architectureTable?: { headers: string[]; rows: string[][] };
};

const linkClass =
  "text-foxglove underline decoration-foxglove/40 underline-offset-4 hover:decoration-foxglove";

export function MediaAndArchitectureCard({ videoUrl, pitchDeckUrl, executiveSummaryUrl, architectureTable }: Props) {
  const hasMedia = videoUrl || pitchDeckUrl || executiveSummaryUrl;
  const hasTable = !!architectureTable && architectureTable.headers.length > 0 && architectureTable.rows.length > 0;
  const [showTable, setShowTable] = useState(hasTable && !hasMedia);

  if (showTable && hasTable) {
    return (
      <section>
        <h2 className="font-display text-[1.8rem] font-medium italic leading-tight text-parchment">
          System architecture
        </h2>
        <div className="-mx-1 mt-5 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-[0.92rem]">
            <thead>
              <tr>
                {architectureTable!.headers.map((h, i) => (
                  <th key={i} className="whitespace-nowrap border-b border-foxglove/40 pb-2 pr-4 font-semibold text-parchment">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {architectureTable!.rows.map((row, i) => (
                <tr key={i} className="border-b border-vine">
                  {row.map((cell, j) => (
                    <td key={j} className="max-w-[200px] py-3 pr-4 align-top text-parchment/90 sm:max-w-[280px]">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {hasMedia && (
          <button type="button" onClick={() => setShowTable(false)} className={`mt-5 ${linkClass}`}>
            Back to demo
          </button>
        )}
      </section>
    );
  }

  return (
    <section>
      <h2 className="font-display text-[1.8rem] font-medium italic leading-tight text-parchment">Media & resources</h2>
      {videoUrl && (
        <figure className="mt-5">
          <video
            src={videoUrl}
            controls
            playsInline
            preload="metadata"
            className="max-h-[70vh] w-full rounded-sm border border-vine bg-understory object-contain"
          >
            Your browser does not support the video tag.
          </video>
          <figcaption className="mt-2 text-center text-[0.9rem] italic text-lichen">
            Design prototype walkthrough
          </figcaption>
        </figure>
      )}
      <div className="mt-5 flex flex-wrap gap-x-7 gap-y-2">
        {executiveSummaryUrl && (
          <a href={executiveSummaryUrl} target="_blank" rel="noreferrer" className={linkClass}>
            Executive summary (PDF)
          </a>
        )}
        {pitchDeckUrl && (
          <a href={pitchDeckUrl} target="_blank" rel="noreferrer" className={linkClass}>
            Pitch deck (PDF)
          </a>
        )}
        {hasTable && (
          <button type="button" onClick={() => setShowTable(true)} className={linkClass}>
            System architecture
          </button>
        )}
      </div>
    </section>
  );
}
