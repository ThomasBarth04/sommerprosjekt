import { useState } from "react";
import { Check } from "lucide-react";

// Prominent publish banner used at the top of the Module / View detail panels —
// mirrors the "Template is (not) published" banner in the Log templates screen.
export function PublishBanner({
  kind,
  published,
  onToggle,
}: {
  kind: "Module" | "View";
  published: boolean;
  onToggle: () => void;
}) {
  const [web, setWeb] = useState(true);
  const [mobile, setMobile] = useState(true);

  return (
    <div
      className={`px-5 py-4 border-b border-[#dbe8e9] ${
        published ? "bg-[rgba(157,228,153,0.15)]" : "bg-[#fdf4e6]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`text-[16px] font-semibold ${
            published ? "text-[#23891e]" : "text-[#a34003]"
          }`}
        >
          {kind} is {published ? "published" : "not published"}
        </span>
        <button
          onClick={onToggle}
          className={`relative w-11 h-6 rounded-full shrink-0 transition-colors ${
            published ? "bg-[#23891e]" : "bg-[#ff9800]"
          }`}
        >
          <div
            className={`absolute top-0.5 size-5 bg-white rounded-full shadow transition-transform ${
              published ? "translate-x-[22px]" : "translate-x-0.5"
            }`}
          />
        </button>
      </div>

      <p className="text-[14px] text-[#505050] mt-1.5">
        {published
          ? `This ${kind.toLowerCase()} is published and is available to use.`
          : `The ${kind.toLowerCase()} is not published and can not be used to create ${
              kind === "Module" ? "charts" : "log tools"
            } by operators.`}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        <AvailabilityPill label="Available in web app" on={web} onClick={() => setWeb((v) => !v)} />
        <AvailabilityPill label="Available in mobile app" on={mobile} onClick={() => setMobile((v) => !v)} />
      </div>
    </div>
  );
}

function AvailabilityPill({
  label,
  on,
  onClick,
}: {
  label: string;
  on: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] border transition-colors ${
        on
          ? "bg-[#eaf0ee] border-[#cfe0d8] text-[#202627]"
          : "bg-white border-[#dbe8e9] text-[#a9bcbf]"
      }`}
    >
      {on && <Check size={14} className="text-[#23891e]" />}
      {label}
    </button>
  );
}
