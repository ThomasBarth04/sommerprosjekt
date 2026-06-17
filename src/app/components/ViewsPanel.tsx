import { useState } from "react";
import { Plus, X, LayoutGrid } from "lucide-react";
import {
  GRIDS, GridLayout, DroppedModule, Module, SavedView, useStore,
} from "../store";
import { MiniChart } from "./charts";
import { InfoCallout } from "./InfoCallout";
import { ModulePicker } from "./ModulePicker";
import { PublishBanner } from "./PublishBanner";

// ─── Grid selector / builder modal ────────────────────────────────────────────

function NewViewModal({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave: (view: SavedView) => void;
}) {
  const { publishedModules } = useStore();
  const [step, setStep] = useState<"name" | "grid" | "build">("name");
  const [viewName, setViewName] = useState("");
  const [selectedGrid, setSelectedGrid] = useState<GridLayout | null>(null);
  const [cells, setCells] = useState<(DroppedModule | null)[]>([]);
  const [dragging, setDragging] = useState<string | null>(null);
  const [dragOverCell, setDragOverCell] = useState<number | null>(null);
  const [pickerCell, setPickerCell] = useState<number | null>(null);

  function pickGrid(g: GridLayout) {
    const config = GRIDS.find((c) => c.id === g)!;
    setSelectedGrid(g);
    setCells(Array(config.cells).fill(null));
    setStep("build");
  }

  function placeModule(idx: number, mod: Module) {
    setCells((prev) => { const n = [...prev]; n[idx] = { moduleId: mod.id, name: mod.name, chartType: mod.chartType }; return n; });
  }

  function dropOnCell(idx: number) {
    if (!dragging) return;
    const mod = publishedModules.find((m) => m.id === dragging);
    if (!mod) return;
    placeModule(idx, mod);
    setDragging(null);
    setDragOverCell(null);
  }

  const config = selectedGrid ? GRIDS.find((g) => g.id === selectedGrid)! : null;

  function handleSave() {
    onSave({
      id: Date.now().toString(),
      name: viewName.trim() || "Untitled view",
      grid: selectedGrid!,
      modules: cells,
      published: false,
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-[12px] shadow-xl flex flex-col overflow-hidden"
        style={{ width: step === "build" ? 720 : 480, maxHeight: "85vh" }}>

        {/* Modal header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#dbe8e9]">
          <span className="text-[15px] text-[#202627]">
            {step === "name" ? "New view — set a name" : step === "grid" ? "New view — choose a layout" : `Building: ${viewName || "Untitled view"}`}
          </span>
          <div className="flex items-center gap-2">
            {step !== "name" && (
              <button
                onClick={() => step === "grid" ? setStep("name") : setStep("grid")}
                className="text-[13px] text-[#505050] px-3 py-1 rounded border border-[#dbe8e9] hover:bg-[#f4f8f9]"
              >
                Back
              </button>
            )}
            <button onClick={onClose} className="text-[13px] text-[#505050] px-3 py-1 rounded border border-[#dbe8e9] hover:bg-[#f4f8f9]">
              Cancel
            </button>
            {step === "build" && (
              <button onClick={handleSave} className="text-white text-[13px] px-4 py-1 rounded bg-[#123236] hover:bg-[#0d2527]">
                Save
              </button>
            )}
          </div>
        </div>

        {/* Step: name */}
        {step === "name" && (
          <div className="p-6 flex flex-col gap-4">
            <div>
              <label className="block text-[12px] text-[#505050] mb-1.5">View name</label>
              <input
                autoFocus
                className="w-full border border-[#c9c9c9] rounded-[6px] px-3 py-2 text-[14px] text-[#202627] outline-none focus:border-[#13808c]"
                placeholder="e.g. Daily briefing dashboard"
                value={viewName}
                onChange={(e) => setViewName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && viewName.trim() && setStep("grid")}
              />
            </div>
            <button
              disabled={!viewName.trim()}
              onClick={() => setStep("grid")}
              className="self-end bg-[#123236] disabled:opacity-40 text-white text-[13px] px-5 py-2 rounded-full hover:bg-[#0d2527] transition-colors"
            >
              Next: choose layout →
            </button>
          </div>
        )}

        {/* Step: grid */}
        {step === "grid" && (
          <div className="p-5 grid grid-cols-2 gap-3 overflow-y-auto">
            {GRIDS.map((g) => (
              <button
                key={g.id}
                onClick={() => pickGrid(g.id)}
                className="bg-[#f4f8f9] border border-[#dbe8e9] rounded-[8px] p-4 hover:border-[#123236] hover:bg-[#ebf2f3] transition-all text-left group"
              >
                <p className="text-[14px] text-[#202627] mb-3 group-hover:text-[#123236]">{g.label}</p>
                <div className="grid gap-1.5"
                  style={{ gridTemplateColumns: `repeat(${g.cols}, 1fr)`, gridTemplateRows: `repeat(${g.rows}, 24px)` }}>
                  {Array.from({ length: g.cells }).map((_, i) => (
                    <div key={i} className="bg-[#dbe8e9] group-hover:bg-[#a9bcbf] rounded-[4px] transition-colors" />
                  ))}
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Step: build */}
        {step === "build" && config && (
          <div className="flex flex-1 overflow-hidden" style={{ minHeight: 400 }}>
            {/* Palette */}
            <div className="w-[148px] border-r border-[#dbe8e9] flex flex-col shrink-0">
              <div className="px-3 py-2 border-b border-[#dbe8e9]">
                <p className="text-[11px] text-[#7c787d] uppercase tracking-wide">Modules</p>
              </div>
              <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-1.5">
                {publishedModules.map((mod) => (
                  <div
                    key={mod.id}
                    draggable
                    onDragStart={() => setDragging(mod.id)}
                    onDragEnd={() => { setDragging(null); setDragOverCell(null); }}
                    className={`flex items-center gap-2 bg-[#f4f8f9] border border-[#dbe8e9] rounded-[6px] px-2.5 py-2 cursor-grab text-[12px] text-[#202627] select-none transition-opacity ${dragging === mod.id ? "opacity-40" : "hover:bg-[#ebf2f3]"}`}
                  >
                    <span className="truncate">{mod.name}</span>
                  </div>
                ))}
              </div>
              <p className="px-3 py-2 text-[10px] text-[#a9bcbf] border-t border-[#dbe8e9]">Drag onto grid →</p>
            </div>

            {/* Canvas */}
            <div className="flex-1 overflow-auto p-3 bg-[#f9fbfb]">
              <div className="grid gap-2 h-full"
                style={{
                  gridTemplateColumns: `repeat(${config.cols}, minmax(0,1fr))`,
                  gridTemplateRows: `repeat(${config.rows}, minmax(120px,1fr))`,
                }}>
                {cells.map((cell, i) => (
                  <div
                    key={i}
                    onDragOver={(e) => { e.preventDefault(); setDragOverCell(i); }}
                    onDragLeave={() => setDragOverCell(null)}
                    onDrop={() => dropOnCell(i)}
                    className={`rounded-[8px] border-2 flex flex-col overflow-hidden transition-colors ${
                      dragOverCell === i ? "border-[#123236] bg-[#ebf2f3]"
                      : cell ? "border-[#dbe8e9] bg-white"
                      : "border-dashed border-[#dbe8e9] bg-white"
                    }`}
                  >
                    {cell ? (
                      <>
                        <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-[#dbe8e9]">
                          <span className="text-[11px] text-[#202627] truncate">{cell.name}</span>
                          <button onClick={() => setCells((p) => { const n=[...p]; n[i]=null; return n; })} className="text-[#7c787d] hover:text-[#cd0152] ml-1">
                            <X size={11} />
                          </button>
                        </div>
                        <div className="flex-1 p-1.5"><MiniChart type={cell.chartType} /></div>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setPickerCell(i)}
                        className="flex-1 flex flex-col items-center justify-center gap-1 text-[#7c787d] hover:text-[#123236] hover:bg-[#f4f8f9] transition-colors"
                      >
                        <Plus size={16} />
                        <span className="text-[11px]">Add</span>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {pickerCell !== null && (
        <ModulePicker
          onClose={() => setPickerCell(null)}
          onPick={(mod) => { placeModule(pickerCell, mod); setPickerCell(null); }}
        />
      )}
    </div>
  );
}

// ─── Detail panel (right side) ────────────────────────────────────────────────

function ViewDetail({
  view,
  onClose,
  onSave,
  onDelete,
}: {
  view: SavedView;
  onClose: () => void;
  onSave: (updated: SavedView) => void;
  onDelete: () => void;
}) {
  const { publishedModules } = useStore();
  const [name, setName] = useState(view.name);
  const [cells, setCells] = useState<(DroppedModule | null)[]>(view.modules);
  const [published, setPublished] = useState(view.published);
  const [dragging, setDragging] = useState<string | null>(null);
  const [dragOverCell, setDragOverCell] = useState<number | null>(null);
  const [pickerCell, setPickerCell] = useState<number | null>(null);

  const config = GRIDS.find((g) => g.id === view.grid)!;

  function placeModule(idx: number, mod: Module) {
    setCells((prev) => { const n = [...prev]; n[idx] = { moduleId: mod.id, name: mod.name, chartType: mod.chartType }; return n; });
  }

  function dropOnCell(idx: number) {
    if (!dragging) return;
    const mod = publishedModules.find((m) => m.id === dragging);
    if (!mod) return;
    placeModule(idx, mod);
    setDragging(null);
    setDragOverCell(null);
  }

  return (
    <div className="flex-1 min-w-0 border-l border-[#dbe8e9] bg-white flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#dbe8e9] shrink-0">
        <button onClick={onDelete} className="text-[#cd0152] text-[13px] hover:opacity-80">Delete</button>
        <div className="flex items-center gap-2">
          <button onClick={onClose} className="text-[#202627] text-[13px] px-3 py-1 rounded border border-[#dbe8e9] hover:bg-[#f4f8f9]">
            Close
          </button>
          <button
            onClick={() => onSave({ ...view, name, modules: cells, published })}
            className="text-white text-[13px] px-3 py-1 rounded bg-[#123236] hover:bg-[#0d2527]"
          >
            Save
          </button>
        </div>
      </div>

      {/* Published banner */}
      <PublishBanner kind="View" published={published} onToggle={() => setPublished(!published)} />

      {/* Name */}
      <div className="px-4 py-3 border-b border-[#dbe8e9]">
        <label className="block text-[12px] text-[#7c787d] mb-1">View name</label>
        <input
          className="w-full border border-[#c9c9c9] rounded-[6px] px-3 py-1.5 text-[14px] text-[#202627] outline-none focus:border-[#13808c]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="text-[11px] text-[#7c787d] mt-1.5">Layout: {config.label}</p>
      </div>

      {/* Module palette */}
      <div className="px-4 py-2 border-b border-[#dbe8e9]">
        <p className="text-[11px] text-[#7c787d] uppercase tracking-wide mb-1.5">Drag modules onto the grid</p>
        <div className="flex flex-wrap gap-1.5">
          {publishedModules.map((mod) => (
            <div
              key={mod.id}
              draggable
              onDragStart={() => setDragging(mod.id)}
              onDragEnd={() => { setDragging(null); setDragOverCell(null); }}
              className={`flex items-center gap-1.5 bg-[#f4f8f9] border border-[#dbe8e9] rounded-full px-2.5 py-1 text-[11px] text-[#202627] cursor-grab select-none transition-opacity ${dragging === mod.id ? "opacity-40" : "hover:bg-[#ebf2f3]"}`}
            >
              {mod.name}
            </div>
          ))}
        </div>
      </div>

      {/* Grid preview */}
      <div className="flex-1 overflow-auto p-3 bg-[#f9fbfb]">
        <div
          className="grid gap-2 h-full"
          style={{
            gridTemplateColumns: `repeat(${config.cols}, minmax(0,1fr))`,
            gridTemplateRows: `repeat(${config.rows}, minmax(110px,1fr))`,
          }}
        >
          {cells.map((cell, i) => (
            <div
              key={i}
              onDragOver={(e) => { e.preventDefault(); setDragOverCell(i); }}
              onDragLeave={() => setDragOverCell(null)}
              onDrop={() => dropOnCell(i)}
              className={`rounded-[8px] border-2 flex flex-col overflow-hidden transition-colors ${
                dragOverCell === i ? "border-[#123236] bg-[#ebf2f3]"
                : cell ? "border-[#dbe8e9] bg-white"
                : "border-dashed border-[#dbe8e9] bg-white"
              }`}
            >
              {cell ? (
                <>
                  <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-[#dbe8e9]">
                    <span className="text-[11px] text-[#202627] truncate">{cell.name}</span>
                    <button onClick={() => setCells((p) => { const n=[...p]; n[i]=null; return n; })} className="text-[#7c787d] hover:text-[#cd0152] ml-1">
                      <X size={11} />
                    </button>
                  </div>
                  <div className="flex-1 p-1.5"><MiniChart type={cell.chartType} /></div>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setPickerCell(i)}
                  className="flex-1 flex flex-col items-center justify-center gap-1 text-[#7c787d] hover:text-[#123236] hover:bg-[#f4f8f9] transition-colors"
                >
                  <Plus size={14} />
                  <span className="text-[11px]">Add</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {pickerCell !== null && (
        <ModulePicker
          onClose={() => setPickerCell(null)}
          onPick={(mod) => { placeModule(pickerCell, mod); setPickerCell(null); }}
        />
      )}
    </div>
  );
}

// ─── Views panel (list) ───────────────────────────────────────────────────────

export function ViewsPanel() {
  const { views, addView, updateView, deleteView } = useStore();
  const [selected, setSelected] = useState<SavedView | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [filter, setFilter] = useState("");

  function handleCreate(view: SavedView) {
    addView(view);
    setShowNew(false);
  }

  function handleSave(updated: SavedView) {
    updateView(updated);
    setSelected(updated);
  }

  function handleDelete() {
    if (!selected) return;
    deleteView(selected.id);
    setSelected(null);
  }

  const filtered = views.filter((v) => v.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      {showNew && <NewViewModal onClose={() => setShowNew(false)} onSave={handleCreate} />}

      <div className="flex h-full overflow-hidden">
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
                onClick={() => setShowNew(true)}
                className="flex items-center gap-1.5 bg-white border border-[#dbe8e9] rounded-full px-3 py-1.5 text-[13px] text-[#202627] hover:bg-[#f4f8f9] transition-colors whitespace-nowrap shadow-sm"
              >
                + New view
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
            {filtered.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full gap-3 text-center py-16">
                <LayoutGrid size={40} className="text-[#a9bcbf]" />
                <p className="text-[16px] text-[#202627]">No views yet</p>
                <p className="text-[13px] text-[#7c787d] max-w-xs">
                  Create a view by clicking "+ New view", giving it a name, choosing a grid layout and dragging modules onto it.
                </p>
                <button
                  onClick={() => setShowNew(true)}
                  className="mt-1 bg-[#123236] text-white rounded-full px-5 py-2 text-[13px] hover:bg-[#0d2527] transition-colors"
                >
                  Create first view
                </button>
              </div>
            )}

            {filtered.map((view) => {
              const config = GRIDS.find((g) => g.id === view.grid)!;
              const filled = view.modules.filter(Boolean).length;
              const isSelected = selected?.id === view.id;

              return (
                <div key={view.id} className="flex items-start gap-2">
                  <input type="checkbox" className="mt-3 size-3.5 accent-[#123236] shrink-0" />
                  <button
                    onClick={() => setSelected(isSelected ? null : view)}
                    className={`flex-1 min-w-0 flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-left transition-colors ${
                      isSelected
                        ? "bg-[#ebf2f3] border border-[#a9bcbf]"
                        : "bg-[#f4f8f9] hover:bg-[#ebf2f3] border border-transparent"
                    }`}
                  >
                    {/* Grid thumbnail */}
                    <div className="relative size-10 shrink-0 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-[#a9bcbf] opacity-60" />
                      <div
                        className="relative z-10 grid gap-[2px]"
                        style={{
                          gridTemplateColumns: `repeat(${Math.min(config.cols, 2)}, 1fr)`,
                          width: 20, height: 20,
                        }}
                      >
                        {Array.from({ length: Math.min(config.cells, 4) }).map((_, i) => (
                          <div
                            key={i}
                            className={`rounded-[1px] ${view.modules[i] ? "bg-[#123236]" : "bg-white/60"}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Name + meta */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[#202627] text-[15px] leading-6 truncate">{view.name}</p>
                      <p className="text-[#7c787d] text-[13px] leading-5">
                        Layout {config.label} · {filled} of {config.cells} module{config.cells !== 1 ? "s" : ""} placed
                      </p>
                    </div>

                    {/* Badge */}
                    <div className="flex flex-col items-end gap-1.5 shrink-0 ml-2">
                      {filled === config.cells ? (
                        <span className="bg-[rgba(157,228,153,0.2)] border border-[rgba(157,228,153,0.4)] text-[#23891e] text-[12px] font-bold px-2 py-[3px] rounded-[3px]">
                          Full
                        </span>
                      ) : (
                        <span className="bg-[rgba(255,161,73,0.15)] border border-[rgba(255,161,73,0.3)] text-[#a34003] text-[12px] font-bold px-2 py-[3px] rounded-[3px]">
                          Draft
                        </span>
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail panel — or blue info callout when nothing is selected */}
        {selected ? (
          <ViewDetail
            key={selected.id}
            view={selected}
            onClose={() => setSelected(null)}
            onSave={handleSave}
            onDelete={handleDelete}
          />
        ) : (
          <InfoCallout>
            Use views to arrange published modules into a grid dashboard. Create a
            view, pick a layout and drag modules onto it, then enable it to surface
            it as a log tool inside an active incident.
          </InfoCallout>
        )}
      </div>
    </>
  );
}
