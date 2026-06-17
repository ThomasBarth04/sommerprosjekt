import { useState } from "react";
import { X } from "lucide-react";
import { Module, useStore } from "../store";
import { MiniChart } from "./charts";

// Popup that lists every published module (name + chart preview) so a module
// can be picked into a view cell — the "Add" alternative to drag-and-drop.
export function ModulePicker({
  onPick,
  onClose,
}: {
  onPick: (mod: Module) => void;
  onClose: () => void;
}) {
  const { publishedModules } = useStore();
  const [filter, setFilter] = useState("");

  const filtered = publishedModules.filter(
    (m) =>
      m.name.toLowerCase().includes(filter.toLowerCase()) ||
      m.description.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30">
      <div
        className="bg-white rounded-[12px] shadow-xl flex flex-col overflow-hidden"
        style={{ width: 560, maxHeight: "80vh" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#dbe8e9] shrink-0">
          <span className="text-[15px] text-[#202627]">Add a module</span>
          <button
            onClick={onClose}
            className="text-[#7c787d] hover:text-[#202627]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Filter */}
        <div className="px-4 pt-3 pb-2 border-b border-[#dbe8e9] shrink-0">
          <div className="flex items-center rounded-[6px] overflow-hidden border border-[#c9c9c9] bg-white">
            <div className="px-2.5 py-2 text-[#505050]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="6" cy="6" r="4.5" stroke="#505050" strokeWidth="1.5" />
                <path d="M10 10L13 13" stroke="#505050" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <input
              autoFocus
              className="flex-1 py-1.5 text-[13px] text-[#202627] outline-none placeholder:text-[#7c787d]"
              placeholder="Filter modules"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-1.5">
          {filtered.map((mod) => (
            <button
              key={mod.id}
              onClick={() => onPick(mod)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-left bg-[#f4f8f9] hover:bg-[#ebf2f3] border border-transparent hover:border-[#a9bcbf] transition-colors"
            >
              {/* Preview */}
              <div className="w-[88px] h-[52px] shrink-0 rounded-[6px] border border-[#dbe8e9] bg-white overflow-hidden p-1">
                <MiniChart type={mod.chartType} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#202627] text-[15px] leading-6 truncate">{mod.name}</p>
                <p className="text-[#7c787d] text-[13px] leading-5 truncate">{mod.description}</p>
              </div>
            </button>
          ))}
          {filtered.length === 0 && (
            <div className="flex items-center justify-center py-12 text-[#7c787d] text-[13px]">
              {publishedModules.length === 0
                ? "No published modules to add yet."
                : "No modules match your filter."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
