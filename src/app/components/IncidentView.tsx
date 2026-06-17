import { useState } from "react";
import {
  LayoutGrid, ListChecks, Users, Map as MapIcon, Activity, Paperclip,
  CalendarDays, ClipboardList, GitBranch, Building2, Heart, LayoutDashboard,
  Plus, Download, Wrench, X, Send, Video, Search, Pencil, Menu, ExternalLink,
  Filter, CheckSquare, MoreVertical, ChevronDown,
} from "lucide-react";
import svgPaths from "../../imports/1708WDefault/svg-6vze7hckkw";
import { useStore } from "../store";
import { ViewDashboard } from "./charts";

// ─── Log-tool catalogue ────────────────────────────────────────────────────────

interface ToolDef {
  id: string;
  menuLabel: string;   // short label in the side menu
  modalName: string;   // full name in the show/hide modal
  description: string;
  icon: React.ReactNode;
  always?: boolean;       // "Always on" — cannot be disabled
  unavailable?: boolean;  // shown as unavailable, cannot be enabled
  badge?: number;         // small count in the side menu (e.g. Status (1))
}

const TOOLS: ToolDef[] = [
  { id: "tasks",        menuLabel: "Tasks",     modalName: "Tasks",         icon: <ListChecks size={15} />,  always: true,
    description: "Add, delegate, track and close tasks to manage the critical event. New tasks will immediately be visible to all participants." },
  { id: "teams",        menuLabel: "Teams",     modalName: "Teams",         icon: <Users size={15} />,       always: true,
    description: "Real-time tracking of all teams and participants lets you see who is actively assisting, unavailable, or yet to respond. Add and dismiss teams and individuals as the situation develops." },
  { id: "map",          menuLabel: "Map",       modalName: "Map",           icon: <MapIcon size={15} />,
    description: "Get a visual overview of the critical event, including the current position of all participants. Using the Sub-incidents tool, you can also pinpoint specific parts of the larger incident on the map." },
  { id: "subincidents", menuLabel: "Sub-incidents", modalName: "Sub-incidents", icon: <GitBranch size={15} />,
    description: "Use Sub-incidents to manage specific parts of a larger incident by themselves. You can also view sub-incident log feeds and tasks separately." },
  { id: "stakeholders", menuLabel: "Stakeholders", modalName: "Stakeholders", icon: <Building2 size={15} />,
    description: "Collaborate with external stakeholders in the ongoing critical event. Remember to prepare for future critical events by connecting with external stakeholders in RAYVN." },
  { id: "status",       menuLabel: "Status",    modalName: "Current Status", icon: <Activity size={15} />, badge: 1,
    description: "Log and track crucial data points during the critical event. You can also request and share data with external stakeholders after adding them with the Stakeholders tool." },
  { id: "nextofkin",    menuLabel: "Next of Kin", modalName: "Next of Kin", icon: <Heart size={15} />, unavailable: true,
    description: "This tool provides a quick overview of your Next of Kin team's current workload." },
  { id: "files",        menuLabel: "Files",     modalName: "Files and links", icon: <Paperclip size={15} />,
    description: "Share files and links with everyone involved in the critical event. Everything stays attached to the log for later reporting." },
  { id: "meetings",     menuLabel: "Meetings",  modalName: "Meetings",      icon: <CalendarDays size={15} />,
    description: "Schedule and run meetings tied to the critical event, keeping minutes and attendance in the log." },
  { id: "reports",      menuLabel: "Reports",   modalName: "Reports",       icon: <ClipboardList size={15} />,
    description: "Generate reports from the activity in this log once the critical event is under control." },
];

// Tools enabled in the side menu by default (matches the reference screenshot).
const DEFAULT_ENABLED = ["tasks", "teams", "map", "status", "files", "meetings", "reports"];

// ─── Reusable toggle ───────────────────────────────────────────────────────────

function Toggle({ on, onClick }: { on: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${on ? "bg-[#23891e]" : "bg-[#c9c9c9]"}`}
    >
      <div className={`absolute top-0.5 size-5 bg-white rounded-full shadow transition-transform ${on ? "translate-x-[22px]" : "translate-x-0.5"}`} />
    </button>
  );
}

// ─── Show / hide log tools modal ─────────────────────────────────────────────────

function ToolsModal({
  enabledTools,
  toggleTool,
  onClose,
}: {
  enabledTools: Set<string>;
  toggleTool: (id: string) => void;
  onClose: () => void;
}) {
  const { views, enabledViewIds, toggleViewEnabled } = useStore();

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 py-10 overflow-y-auto">
      <div className="bg-white rounded-[12px] shadow-xl w-[800px] max-w-[92vw] flex flex-col overflow-hidden max-h-[85vh]">
        {/* Header */}
        <div className="relative flex items-center justify-center px-5 py-4 border-b border-[#dbe8e9] shrink-0">
          <span className="text-[18px] text-[#202627]">Show/hide log tools</span>
          <button onClick={onClose} className="absolute right-4 text-[#7c787d] hover:text-[#202627]">
            <X size={18} />
          </button>
        </div>

        <div className="overflow-y-auto">
          <p className="px-6 pt-4 pb-2 text-[14px] text-[#7c787d] leading-6">
            Log tools help your organization manage various types of critical events. Enable and disable them to fit your team's current needs.
          </p>

          {/* Built-in tools */}
          <div className="px-2">
            {TOOLS.map((tool) => {
              const on = enabledTools.has(tool.id);
              return (
                <div key={tool.id} className={`flex items-start gap-3 px-4 py-4 rounded-[8px] ${on && !tool.always && !tool.unavailable ? "bg-[#f4f8f9]" : ""}`}>
                  <Menu size={16} className="text-[#a9bcbf] mt-1 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] text-[#202627] font-semibold mb-0.5">{tool.modalName}</p>
                    <p className="text-[14px] text-[#7c787d] italic leading-6">{tool.description}</p>
                  </div>
                  <div className="shrink-0 pt-0.5">
                    {tool.always ? (
                      <span className="bg-[#23891e] text-white text-[12px] font-semibold px-2.5 py-1 rounded-[4px]">Always on</span>
                    ) : tool.unavailable ? (
                      <span className="flex items-center gap-2">
                        <span className="bg-[rgba(205,1,82,0.1)] text-[#cd0152] text-[12px] font-semibold px-2 py-0.5 rounded-[4px]">Unavailable</span>
                        <span className="text-[14px] text-[#a9bcbf]">Unavailable</span>
                      </span>
                    ) : (
                      <Toggle on={on} onClick={() => toggleTool(tool.id)} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Views section */}
          <div className="px-6 pt-4 pb-2 border-t border-[#dbe8e9] mt-2">
            <p className="text-[13px] text-[#123236] font-semibold uppercase tracking-wide">Views</p>
            <p className="text-[13px] text-[#7c787d] mt-0.5">
              Dashboards you've built in the Views tab. Enable one to pin it as a tool in this incident.
            </p>
          </div>
          <div className="px-2 pb-4">
            {views.length === 0 && (
              <p className="px-4 py-3 text-[13px] text-[#a9bcbf] italic">
                No views yet — create one in the Views tab and it will appear here.
              </p>
            )}
            {views.map((view) => {
              const on = enabledViewIds.includes(view.id);
              const count = view.modules.filter(Boolean).length;
              return (
                <div key={view.id} className={`flex items-start gap-3 px-4 py-4 rounded-[8px] ${on ? "bg-[#f4f8f9]" : ""}`}>
                  <Menu size={16} className="text-[#a9bcbf] mt-1 shrink-0" />
                  <div className="bg-[#ebf2f3] rounded-[6px] size-8 flex items-center justify-center shrink-0 text-[#123236] mt-0.5">
                    <LayoutDashboard size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] text-[#202627] font-semibold mb-0.5">{view.name}</p>
                    <p className="text-[14px] text-[#7c787d] italic leading-6">
                      Dashboard · {count} module{count !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <div className="shrink-0 pt-0.5">
                    <Toggle on={on} onClick={() => toggleViewEnabled(view.id)} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-[#dbe8e9] flex justify-end shrink-0">
          <button onClick={onClose} className="bg-[#123236] text-white text-[13px] px-5 py-2 rounded-full hover:bg-[#0d2527] transition-colors">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Dark incident sidebar ────────────────────────────────────────────────────

function IncidentSidebar({ onExit }: { onExit: () => void }) {
  return (
    <div className="bg-[#123236] h-full w-[176px] shrink-0 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-3 py-3.5">
        <div className="bg-white rounded-full size-9 flex items-center justify-center shrink-0">
          <svg width="13" height="16" viewBox="0 0 13.5711 17.1904" fill="none" style={{ transform: "scaleY(-1)" }}>
            <path clipRule="evenodd" d={svgPaths.p29e31b00} fill="#1A1A1A" fillRule="evenodd" />
          </svg>
        </div>
        <span className="text-[#f0f5f6] text-[12px] tracking-wider uppercase font-semibold">ThomasAPI</span>
        <ChevronDown size={14} className="text-[#f0f5f6]/70 ml-auto" />
      </div>

      {/* Active incident */}
      <div className="px-2 pt-1">
        <div className="bg-[#1a3d42] border border-white/40 rounded-full px-4 py-2 text-[#f0f5f6] text-[15px] truncate">
          Flood
        </div>
      </div>

      <div className="flex-1" />

      {/* Bottom actions */}
      <div className="py-2 px-2 flex flex-col gap-0.5">
        {[
          { label: "Notifications", path: svgPaths.p2f8e2900, vw: "17.5", vh: "20", onClick: undefined as undefined | (() => void) },
          { label: "Help", path: svgPaths.p15813100, vw: "20", vh: "20", onClick: undefined },
          { label: "Settings", path: svgPaths.p3fa55600, vw: "20.2166", vh: "21.25", onClick: onExit },
        ].map(({ label, path, vw, vh, onClick }) => (
          <button key={label} onClick={onClick} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/10 transition-colors">
            <svg width="17" height="17" viewBox={`0 0 ${vw} ${vh}`} fill="none" className="shrink-0" style={{ transform: "scaleY(-1)" }}>
              <path d={path} fill="#F0F5F6" />
            </svg>
            <span className="text-[#f0f5f6] text-[13px]">{label}</span>
          </button>
        ))}
      </div>

      {/* Profile */}
      <div className="border-t border-white/10 px-3 py-3 flex items-center gap-2.5">
        <div className="bg-[#f0f5f6] rounded-full size-9 flex items-center justify-center shrink-0">
          <svg width="16" height="16" viewBox="0 0 20.2166 21.25" fill="none" style={{ transform: "scaleY(-1)" }}>
            <path d={svgPaths.p3fa55600} fill="#123236" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-[#f0f5f6] text-[13px] leading-[16px] truncate">Thomas Barth</p>
          <p className="text-[#f0f5f6]/80 text-[13px] leading-[16px] truncate">ThomasAPI</p>
        </div>
      </div>
    </div>
  );
}

// ─── Overview content (default tool) ────────────────────────────────────────────

function OverviewContent() {
  return (
    <div className="px-8 py-6 max-w-[760px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[20px] text-[#202627]">Overview</h2>
        <button className="flex items-center gap-1.5 text-[13px] text-[#505050] hover:text-[#123236]">
          <ListChecks size={14} /> Sort
        </button>
      </div>

      <p className="text-[14px] text-[#202627] mb-2">Description of situation</p>
      <div className="bg-[#f4f8f9] rounded-[10px] p-5 flex items-center gap-3 mb-6">
        <div className="text-[#a9bcbf]"><ClipboardList size={28} /></div>
        <span className="text-[15px] text-[#7c787d]">No description</span>
        <button className="ml-auto flex items-center gap-1 text-[13px] text-[#202627] border border-[#dbe8e9] rounded-full px-3 py-1 hover:bg-white">
          <Plus size={13} /> Add description
        </button>
      </div>

      <p className="text-[14px] text-[#202627] mb-2">Ongoing &amp; overdue</p>
      <div className="flex items-center gap-3 mb-6 text-[#7c787d]">
        <Activity size={26} className="text-[#a9bcbf]" />
        <div>
          <p className="text-[15px] text-[#202627]">Nothing ongoing or overdue</p>
          <p className="text-[13px] text-[#7c787d]">Tasks, requests and other items of immediate note will appear here</p>
        </div>
      </div>

      <p className="text-[14px] text-[#202627] mb-2">Tasks</p>
      <div className="bg-[#f4f8f9] rounded-[10px] p-4 flex items-center gap-3 mb-3 border-l-4 border-[#a9bcbf]">
        <input type="checkbox" className="size-4 accent-[#123236]" />
        <span className="text-[15px] text-[#202627] flex-1">Evacuate close houses</span>
        <span className="text-[#7c787d]">→</span>
      </div>
    </div>
  );
}

function ToolPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2 text-center px-8">
      <p className="text-[18px] text-[#202627]">{label}</p>
      <p className="text-[13px] text-[#7c787d]">This tool is not built out in the prototype yet.</p>
    </div>
  );
}

// ─── Log feed (right column) ─────────────────────────────────────────────────────

function LogFeed() {
  return (
    <div className="w-[360px] shrink-0 border-l border-[#dbe8e9] bg-[#f9fbfb] flex flex-col h-full overflow-hidden">
      <div className="flex items-center gap-4 px-4 py-2.5 border-b border-[#dbe8e9] shrink-0">
        <button className="flex items-center gap-1.5 text-[13px] text-[#505050] hover:text-[#123236]"><Filter size={14} /> Filters</button>
        <button className="flex items-center gap-1.5 text-[13px] text-[#505050] hover:text-[#123236]"><CheckSquare size={14} /> Select</button>
        <button className="ml-auto text-[#505050] hover:text-[#123236]"><ExternalLink size={15} /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2.5">
        <button className="flex items-center gap-2 border border-[#dbe8e9] rounded-[8px] px-3 py-2.5 text-[14px] text-[#202627] bg-white hover:bg-[#f4f8f9]">
          <Plus size={15} /> New entry
        </button>
        <div className="bg-white border border-[#dbe8e9] rounded-[8px] p-3">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[12px] text-[#7c787d]">Sat Jun 13, 06:59 · by Thomas Barth</p>
            <MoreVertical size={14} className="text-[#a9bcbf]" />
          </div>
          <p className="text-[14px] text-[#202627] leading-6">The fire brigade has arrived at the scene.</p>
        </div>
        <div className="bg-white border border-[#dbe8e9] rounded-[8px] p-3">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[12px] text-[#7c787d]">Sat Jun 13, 06:54 · by Thomas Barth</p>
            <MoreVertical size={14} className="text-[#a9bcbf]" />
          </div>
          <p className="text-[14px] text-[#202627] leading-6">
            Loggen 'Flood' med beskrivelse 'Flooding has been reported in the affected area. This log is activated to coordinate evacuation, protect personnel and assets, and liaise with emergency services.' er opprettet av 'Thomas Barth'
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Incident view (root) ────────────────────────────────────────────────────────

export function IncidentView({ onExit }: { onExit: () => void }) {
  const { views, enabledViewIds } = useStore();
  const [enabledTools, setEnabledTools] = useState<Set<string>>(new Set(DEFAULT_ENABLED));
  const [selectedTool, setSelectedTool] = useState<string>("overview");
  const [showTools, setShowTools] = useState(false);

  function toggleTool(id: string) {
    setEnabledTools((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  const enabledViews = views.filter((v) => enabledViewIds.includes(v.id));
  const menuTools = TOOLS.filter((t) => enabledTools.has(t.id));
  const selectedView = selectedTool.startsWith("view:")
    ? views.find((v) => `view:${v.id}` === selectedTool) ?? null
    : null;

  function renderMain() {
    if (selectedView) {
      return (
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-3 border-b border-[#dbe8e9]">
            <div className="flex items-center gap-2">
              <LayoutDashboard size={18} className="text-[#123236]" />
              <h2 className="text-[18px] text-[#202627]">{selectedView.name}</h2>
            </div>
            <button className="flex items-center gap-1.5 text-[13px] text-[#505050] hover:text-[#123236]">
              <ExternalLink size={14} /> Open full screen
            </button>
          </div>
          <div className="flex-1 overflow-auto p-6 bg-[#f9fbfb]">
            <ViewDashboard view={selectedView} />
          </div>
        </div>
      );
    }
    if (selectedTool === "overview") return <OverviewContent />;
    const tool = TOOLS.find((t) => t.id === selectedTool);
    return <ToolPlaceholder label={tool?.menuLabel ?? selectedTool} />;
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {showTools && (
        <ToolsModal enabledTools={enabledTools} toggleTool={toggleTool} onClose={() => setShowTools(false)} />
      )}

      <IncidentSidebar onExit={onExit} />

      {/* Tool menu column */}
      <div className="w-[230px] shrink-0 border-r border-[#dbe8e9] bg-white flex flex-col">
        <div className="flex justify-center py-3 border-b border-[#dbe8e9]">
          <button className="size-9 rounded-full border border-[#dbe8e9] flex items-center justify-center text-[#505050] hover:bg-[#f4f8f9]">
            <Plus size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-3 px-2.5 flex flex-col gap-0.5">
          <MenuItem icon={<LayoutGrid size={16} />} label="Overview" active={selectedTool === "overview"} onClick={() => setSelectedTool("overview")} />
          {menuTools.map((t) => (
            <MenuItem
              key={t.id}
              icon={t.icon}
              label={t.menuLabel}
              badge={t.badge}
              active={selectedTool === t.id}
              onClick={() => setSelectedTool(t.id)}
            />
          ))}

          {enabledViews.length > 0 && (
            <>
              <div className="px-2 pt-3 pb-1 text-[10px] text-[#a9bcbf] uppercase tracking-wide">Views</div>
              {enabledViews.map((v) => (
                <MenuItem
                  key={v.id}
                  icon={<LayoutDashboard size={16} />}
                  label={v.name}
                  active={selectedTool === `view:${v.id}`}
                  onClick={() => setSelectedTool(`view:${v.id}`)}
                />
              ))}
            </>
          )}
        </div>

        {/* Bottom actions */}
        <div className="border-t border-[#dbe8e9] py-2 px-2.5 flex flex-col gap-0.5">
          <button className="flex items-center gap-2.5 px-2.5 py-2 rounded-[8px] text-[14px] text-[#505050] hover:bg-[#f4f8f9]">
            <Download size={16} /> Download
          </button>
          <button onClick={() => setShowTools(true)} className="flex items-center gap-2.5 px-2.5 py-2 rounded-[8px] text-[14px] text-[#505050] hover:bg-[#f4f8f9]">
            <Wrench size={16} /> Tools
          </button>
          <button className="flex items-center gap-2.5 px-2.5 py-2 rounded-[8px] text-[14px] text-[#cd0152] hover:bg-[rgba(205,1,82,0.06)]">
            <X size={16} /> End incident
          </button>
        </div>
      </div>

      {/* Center + log feed */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-[#dbe8e9] shrink-0">
          <div className="flex items-center gap-2">
            <h1 className="text-[22px] text-[#202627]">Flood</h1>
            <button className="text-[#505050] hover:text-[#123236]"><Pencil size={16} /></button>
          </div>
          <div className="flex items-center gap-5">
            <button className="flex items-center gap-1.5 text-[14px] text-[#202627] hover:text-[#123236]"><Send size={15} /> Message</button>
            <button className="flex items-center gap-1.5 text-[14px] text-[#202627] hover:text-[#123236]"><Video size={15} /> Video</button>
            <button className="flex items-center gap-1.5 text-[14px] text-[#202627] hover:text-[#123236]"><Search size={15} /> Search</button>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto bg-white">{renderMain()}</div>
          <LogFeed />
        </div>
      </div>
    </div>
  );
}

function MenuItem({
  icon,
  label,
  active,
  badge,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  badge?: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2.5 px-2.5 py-2 rounded-[8px] text-[14px] text-left transition-colors ${
        active ? "bg-[#ebf2f3] text-[#123236] font-medium" : "text-[#505050] hover:bg-[#f4f8f9]"
      }`}
    >
      <span className={active ? "text-[#123236]" : "text-[#7c787d]"}>{icon}</span>
      <span className="flex-1 truncate">{label}</span>
      {badge ? <span className="text-[12px] text-[#7c787d]">({badge})</span> : null}
    </button>
  );
}
