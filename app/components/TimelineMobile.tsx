"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import type { TimelineEvent } from "./TimelineDesktop";

type TimelineMobileProps = {
  events: TimelineEvent[];
  className?: string;
};

export default function TimelineMobile({ events, className }: TimelineMobileProps) {
  if (!events || events.length === 0) return null;

  return (
    <div className={cn("md:hidden w-full flex justify-center", className)}>
      <div className="relative mx-auto max-w-md px-4 py-8">
        <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-[#E6CFC3]" />
        <ol className="relative ml-8 space-y-8">
          {events.map((event, index) => (
            <li key={`${event.time}-${index}`} className="relative">
              <div className="absolute -left-8 top-1.5 h-4 w-4 rounded-full border-2 border-white bg-[#BF4A47] shadow" />
              <div>
                <div className="text-sm font-semibold text-[#BF4A47]">{event.time}</div>
                <div className="mt-0.5 text-base font-medium">{event.title}</div>
                {event.description ? (
                  <p className="mt-1 text-sm text-neutral-700">{event.description}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}


