import { useState } from "react";
import { BarChart2, LineChart, PieChart, Activity, Bot } from "lucide-react";
import { ModuleBuilderPage } from "./ModuleBuilderPage";
import { InfoCallout } from "./InfoCallout";
import { PublishBanner } from "./PublishBanner";
import { Module, useStore } from "../store";

// Module type and seed data now live in ../store

const CHART_ICON: Record<string, React.ReactNode> = {
  bar:  <BarChart2  size={16} />,
  line: <LineChart  size={16} />,
  pie:  <PieChart   size={16} />,
  area: <Activity   size={16} />,
};

function ModuleIcon({ type }: { type: string }) {
  return (
    <div className="relative size-10 shrink-0 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-[#a9bcbf] opacity-60" />
      <span className="relative z-10 text-[#123236]">{CHART_ICON[type]}</span>
    </div>
  );
}

function StatusBadge({ published }: { published: boolean }) {
  if (published) {
    return (
      <span className="bg-[rgba(157,228,153,0.2)] border border-[rgba(157,228,153,0.4)] text-[#23891e] text-[12px] font-bold px-2 py-[3px] rounded-[3px] shrink-0">
        Published
      </span>
    );
  }
  return (
    <span className="bg-[rgba(255,161,73,0.15)] border border-[rgba(255,161,73,0.3)] text-[#a34003] text-[12px] font-bold px-2 py-[3px] rounded-[3px] shrink-0">
      Unpublished
    </span>
  );
}

// Detail panel for a module
function ModuleDetail({
  mod,
  onClose,
  onOpenBuilder,
}: {
  mod: Module;
  onClose: () => void;
  onOpenBuilder: () => void;
}) {
  const [published, setPublished] = useState(mod.published);

  return (
    <div className="flex-1 min-w-0 border-l border-[#dbe8e9] bg-white flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#dbe8e9] shrink-0">
        <button className="text-[#cd0152] text-[13px] hover:opacity-80">Delete</button>
        <div className="flex items-center gap-2">
          <button onClick={onClose} className="text-[#202627] text-[13px] px-3 py-1 rounded border border-[#dbe8e9] hover:bg-[#f4f8f9]">
            Close
          </button>
          <button className="text-white text-[13px] px-3 py-1 rounded bg-[#123236] hover:bg-[#0d2527]">
            Save
          </button>
        </div>
      </div>

      {/* Published banner */}
      <PublishBanner kind="Module" published={published} onToggle={() => setPublished(!published)} />

      {/* Description */}
      <div className="px-5 py-4 border-b border-[#dbe8e9] flex flex-col gap-2">
        <p className="text-[14px] text-[#202627]">{mod.name}</p>
        <p className="text-[13px] text-[#505050] leading-5">{mod.description}</p>
        <div className="flex flex-col gap-1 mt-1">
          <p className="text-[12px] text-[#7c787d]">Data source: <span className="text-[#202627]">{mod.dataSource}</span></p>
          <p className="text-[12px] text-[#7c787d]">Chart type: <span className="text-[#202627] capitalize">{mod.chartType}</span></p>
          <p className="text-[12px] text-[#7c787d]">Created: <span className="text-[#202627]">{mod.createdAt}</span></p>
        </div>
      </div>

      {/* AI Builder link */}
      <div className="px-5 py-4">
        <button
          onClick={onOpenBuilder}
          className="w-full flex items-center justify-center gap-2 bg-[#ebf2f3] border border-[#dbe8e9] rounded-[8px] py-2.5 text-[14px] text-[#202627] hover:bg-[#dbe8e9] transition-colors"
        >
          <Bot size={16} className="text-[#123236]" />
          Open in AI Builder
        </button>
      </div>
    </div>
  );
}

export function ModulesPanel() {
  const { modules } = useStore();
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState<Module | null>(null);
  const [showBuilder, setShowBuilder] = useState(false);

  const filtered = modules.filter(
    (m) =>
      m.name.toLowerCase().includes(filter.toLowerCase()) ||
      m.description.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="flex h-full overflow-hidden">
      {showBuilder && <ModuleBuilderPage onBack={() => setShowBuilder(false)} />}

      {/* List */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Toolbar */}
        <div className="bg-white px-4 pt-2.5 pb-2 flex flex-col gap-2 border-b border-[#dbe8e9] shrink-0">
          <div className="flex items-center gap-2">
            <div className="flex flex-1 items-center rounded-[6px] overflow-hidden border border-[#c9c9c9] bg-white">
              <div className="px-2.5 py-2 text-[#505050]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="6" cy="6" r="4.5" stroke="#505050" strokeWidth="1.5" />
                  <path d="M10 10L13 13" stroke="#505050" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <input
                className="flex-1 py-1.5 text-[13px] text-[#202627] outline-none placeholder:text-[#7c787d]"
                placeholder="Filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowBuilder(true)}
              className="flex items-center gap-1.5 bg-white border border-[#dbe8e9] rounded-full px-3 py-1.5 text-[13px] text-[#202627] hover:bg-[#f4f8f9] transition-colors whitespace-nowrap shadow-sm"
            >
              <Bot size={13} />
              AI Builder
            </button>
          </div>
          <div className="flex items-center gap-0.5 h-7">
            <input type="checkbox" className="mr-2 size-3.5 accent-[#123236]" />
            <button className="text-[13px] text-[#13808c] hover:underline opacity-60">Move to group (0)</button>
            <span className="text-[#dbe8e9] mx-1">·</span>
            <button className="text-[13px] text-[#cd0152] hover:underline opacity-60">Delete (0)</button>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto bg-white px-3 py-2 flex flex-col gap-1.5">
          {filtered.map((mod) => (
            <div key={mod.id} className="flex items-start gap-2">
              <input type="checkbox" className="mt-3 size-3.5 accent-[#123236] shrink-0" />
              <button
                onClick={() => setSelected(selected?.id === mod.id ? null : mod)}
                className={`flex-1 min-w-0 flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-left transition-colors ${
                  selected?.id === mod.id
                    ? "bg-[#ebf2f3] border border-[#a9bcbf]"
                    : "bg-[#f4f8f9] hover:bg-[#ebf2f3] border border-transparent"
                }`}
              >
                <ModuleIcon type={mod.chartType} />
                <div className="flex-1 min-w-0">
                  <p className="text-[#202627] text-[15px] leading-6 truncate">{mod.name}</p>
                  <p className="text-[#7c787d] text-[13px] leading-5 truncate">{mod.description}</p>
                </div>
                <div className="flex flex-col items-end gap-1.5 shrink-0 ml-2">
                  <StatusBadge published={mod.published} />
                </div>
              </button>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="flex items-center justify-center py-16 text-[#7c787d] text-[13px]">
              No modules match your filter.
            </div>
          )}
        </div>
      </div>

      {/* Detail panel — or blue info callout when nothing is selected */}
      {selected ? (
        <ModuleDetail
          mod={selected}
          onClose={() => setSelected(null)}
          onOpenBuilder={() => setShowBuilder(true)}
        />
      ) : (
        <InfoCallout>
          Use modules to define reusable charts from your incident data. Create a
          module, choose its chart type and data source, then publish it to make
          it available for adding to views.
        </InfoCallout>
      )}
    </div>
  );
}
