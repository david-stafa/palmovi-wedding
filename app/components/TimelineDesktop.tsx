"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/*
  TimelineDesktop
  - Horizontal timeline for md+ screens (hidden on mobile)
  - Uses brand colors: line (#E6CFC3), markers/text accent (#BF4A47)
  - Pass an array of events to render evenly spaced along a horizontal rule
*/

// Shape of a single timeline event
export type TimelineEvent = {
  time: string;
  title: string;
  description?: string;
};

// Props accepted by the desktop timeline component
type TimelineDesktopProps = {
  events: TimelineEvent[];
  className?: string;
};

export default function TimelineDesktop({ events, className }: TimelineDesktopProps) {
  // Render nothing if there are no events
  if (!events || events.length === 0) return null;

  return (
    <div className={cn("hidden xl:block w-full", className)}>
      {/* Outer container; only visible on md+ */}
      <div className="relative mx-auto max-w-5xl px-6 py-10">
        {/* Horizontal baseline across all events */}
        <div className="absolute left-0 right-0 top-[46px] h-[2px] bg-[#E6CFC3]" />
        {/* Evenly distribute event columns */}
        <div className="flex items-start justify-between gap-6">
          {events.map((event, index) => (
            <div key={`${event.time}-${index}`} className="flex-1 min-w-0">
              <div className="relative flex flex-col items-center">
                {/* Marker dot aligned to the baseline */}
                <div className="z-10 h-4 w-4 rounded-full border-2 border-white bg-[#BF4A47] shadow" />
                {/* Event content */}
                <div className="mt-6 text-center">
                  {/* Time label */}
                  <div className="text-sm font-semibold text-[#BF4A47]">{event.time}</div>
                  {/* Event title */}
                  <p className="mt-1">{event.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


