"use client";

import {
  buildGoogleCalendarUrl,
  buildOutlookCalendarUrl,
  downloadIcsFile,
} from "@/lib/calendar";
import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { AppleIcon, GoogleIcon, MicrosoftIcon } from "./calendar-icons";

type Props = {
  title: string;
  startDate: Date;
  endDate: Date;
  description: string;
  location?: string | null;
};

export default function AddToCalendarButton({
  title,
  startDate,
  endDate,
  description,
  location,
}: Props) {
  const [open, setOpen] = useState(false);
  const event = { title, startDate, endDate, description, location };

  function addToGoogle() {
    window.open(buildGoogleCalendarUrl(event), "_blank");
    setOpen(false);
  }

  function addToOutlook() {
    window.open(buildOutlookCalendarUrl(event), "_blank");
    setOpen(false);
  }

  function addToApple() {
    downloadIcsFile(event);
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        style={{ backgroundColor: "#8B0000", transition: "background-color 0.2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6B0000")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#8B0000")}
        className="cursor-pointer text-white px-6 py-3 rounded-sm transition-colors flex items-center gap-2"
      >
        <Calendar className="size-5" />
        Adicionar
        <ChevronDown
          className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <button
          type="button"
          aria-label="Close calendar options"
          className="fixed inset-0 z-10 cursor-default"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-100 z-20 overflow-hidden transition-all duration-200 origin-top-right ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={addToGoogle}
          className="w-full text-left px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors flex items-center gap-3"
        >
          <GoogleIcon />
          Google Calendar
        </button>
        <button
          type="button"
          onClick={addToOutlook}
          className="w-full text-left px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors flex items-center gap-3"
        >
          <MicrosoftIcon />
          Outlook
        </button>
        <button
          type="button"
          onClick={addToApple}
          className="w-full text-left px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors flex items-center gap-3"
        >
          <AppleIcon />
          Apple Calendar
        </button>
      </div>
    </div>
  );
}
