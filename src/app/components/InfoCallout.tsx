import { Info } from "lucide-react";

// Blue informational callout shown in the right-hand area when no entry is
// selected (mirrors the "Contact lists" empty-state pattern in Rayvn).
export function InfoCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 min-w-0 p-6 overflow-y-auto">
      <div className="flex items-start gap-4 bg-[#e8f1f5] border border-[#cfe0e8] rounded-[8px] px-5 py-4">
        <div className="shrink-0 size-11 rounded-full bg-[#13808c] flex items-center justify-center">
          <Info size={22} className="text-white" />
        </div>
        <p className="text-[15px] leading-6 text-[#202627]">{children}</p>
      </div>
    </div>
  );
}
