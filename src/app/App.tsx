import { useState } from "react";
import svgPaths from "../imports/1708WDefault/svg-6vze7hckkw";
import { ModulesPanel } from "./components/ModulesPanel";
import { ViewsPanel } from "./components/ViewsPanel";
import { IncidentView } from "./components/IncidentView";
import { StoreProvider } from "./store";

{/* MARKER-MAKE-KIT-INVOKED */}

// ─── Types ───────────────────────────────────────────────────────────────────

type ActiveTab =
  | "users" | "responders" | "contacts"
  | "teams" | "contactlists"
  | "collaboration"
  | "logtemplates" | "reporttemplates" | "meetingtemplates" | "messagetemplates"
  | "resources" | "sites"
  | "imports" | "tags"
  | "modules" | "views";

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function Sidebar({ onOpenIncident }: { onOpenIncident: () => void }) {
  return (
    <div className="bg-[#123236] h-full w-[188px] shrink-0 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 px-3 py-3 border-b border-white/10">
        <div className="bg-white rounded-full size-10 flex items-center justify-center shrink-0">
          <svg width="14" height="18" viewBox="0 0 13.5711 17.1904" fill="none" style={{ transform: 'scaleY(-1)' }}>
            <path clipRule="evenodd" d={svgPaths.p29e31b00} fill="#1A1A1A" fillRule="evenodd" />
          </svg>
        </div>
        <span className="text-[#f0f5f6] text-[13px] tracking-wider uppercase font-semibold">ThomasAPI</span>
      </div>

      {/* Incident button */}
      <div className="flex-1 overflow-y-auto px-2 py-3">
        <button
          onClick={onOpenIncident}
          className="w-full text-left bg-[#e2eced] rounded-full px-3 py-2 text-[#123236] text-[15px] cursor-pointer hover:bg-white transition-colors truncate"
        >
          Flood
        </button>
      </div>

      {/* Bottom actions */}
      <div className="border-t border-white/10 py-2 px-2 flex flex-col gap-0.5">
        {[
          { label: "Notifications", path: svgPaths.p2f8e2900, vw: "17.5", vh: "20" },
          { label: "Help", path: svgPaths.p15813100, vw: "20", vh: "20" },
          { label: "Settings", path: svgPaths.p3fa55600, vw: "20.2166", vh: "21.25" },
        ].map(({ label, path, vw, vh }) => (
          <button key={label} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/10 transition-colors">
            <svg width="18" height="18" viewBox={`0 0 ${vw} ${vh}`} fill="none" className="shrink-0" style={{ transform: 'scaleY(-1)' }}>
              <path d={path} fill="#F0F5F6" />
            </svg>
            <span className="text-[#f0f5f6] text-[13px]">{label}</span>
          </button>
        ))}
      </div>

      {/* Profile */}
      <div className="border-t border-white/10 px-3 py-3 flex items-center gap-2.5">
        <div className="bg-[#f0f5f6] rounded-full size-10 flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 20.2166 21.25" fill="none" style={{ transform: 'scaleY(-1)' }}>
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

// ─── Top nav ─────────────────────────────────────────────────────────────────

interface NavItem {
  tab: ActiveTab;
  label: string;
  iconPath: string;
  vw: string;
  vh: string;
}

const NAV_ROW1: NavItem[] = [
  { tab: "users",            label: "Users",             iconPath: svgPaths.p2cf4fd00, vw: "16.25", vh: "19.6875" },
  { tab: "responders",       label: "Responders",        iconPath: svgPaths.p1f212300, vw: "16.25", vh: "21.25" },
  { tab: "contacts",         label: "Contacts",          iconPath: svgPaths.p32dc6800, vw: "15",    vh: "20" },
  { tab: "teams",            label: "Teams",             iconPath: svgPaths.p36d5ef80, vw: "20",    vh: "20" },
  { tab: "contactlists",     label: "Contact lists",     iconPath: svgPaths.p3e36fe00, vw: "18.75", vh: "20" },
  { tab: "collaboration",    label: "Collaboration",     iconPath: svgPaths.p25143c80, vw: "25",    vh: "20" },
  { tab: "logtemplates",     label: "Log templates",     iconPath: svgPaths.pd3e4e80,  vw: "15",    vh: "20" },
  { tab: "reporttemplates",  label: "Report templates",  iconPath: svgPaths.p281b8600, vw: "21.25", vh: "21.25" },
  { tab: "meetingtemplates", label: "Meeting templates", iconPath: svgPaths.p3ff32500, vw: "15",    vh: "20" },
  { tab: "messagetemplates", label: "Message templates", iconPath: svgPaths.p224a4d00, vw: "20",    vh: "20" },
  { tab: "resources",        label: "Resources",         iconPath: svgPaths.p11d09580, vw: "20",    vh: "18.75" },
  { tab: "sites",            label: "Sites",             iconPath: svgPaths.p3a1a7a00, vw: "20",    vh: "17.5" },
];

const NAV_ROW2: NavItem[] = [
  { tab: "imports", label: "Imports", iconPath: svgPaths.p58e8280,  vw: "22.5",  vh: "17.5" },
  { tab: "tags",    label: "Tags",    iconPath: svgPaths.p1e257040, vw: "21.0156", vh: "16.5527" },
  { tab: "modules", label: "Modules", iconPath: svgPaths.p58e8280,  vw: "22.5",  vh: "17.5" },
  { tab: "views",   label: "Views",   iconPath: svgPaths.p1e257040, vw: "21.0156", vh: "16.5527" },
];

function NavTab({
  item,
  active,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-0.5 px-2 py-1.5 rounded-[4px] min-w-[60px] transition-all whitespace-nowrap ${
        active
          ? "border border-[#123236] shadow-[0px_2px_6px_rgba(4,22,25,0.12),0px_1px_2px_rgba(4,22,25,0.08)]"
          : "border border-transparent hover:bg-black/5"
      }`}
    >
      <svg
        width="20"
        height="20"
        viewBox={`0 0 ${item.vw} ${item.vh}`}
        fill="none"
        className="shrink-0"
        style={{ transform: 'scaleY(-1)' }}
      >
        <path d={item.iconPath} fill={active ? "#123236" : "#505050"} />
      </svg>
      <span
        className={`text-[13px] leading-5 text-center ${
          active ? "text-[#123236] font-semibold" : "text-[#505050]"
        }`}
      >
        {item.label}
      </span>
    </button>
  );
}

function TopNav({
  activeTab,
  setActiveTab,
}: {
  activeTab: ActiveTab;
  setActiveTab: (t: ActiveTab) => void;
}) {
  return (
    <div className="bg-white border-b border-[#dbe8e9] shrink-0">
      {/* Account bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#dbe8e9]">
        <button className="flex items-center gap-1.5 text-[16px] text-[#202627] hover:text-[#123236]">
          ThomasAPI
          <span className="border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#202627] w-0 h-0" />
        </button>
        <div className="relative">
          <input
            className="bg-[rgba(255,255,255,0.8)] border border-[#c9c9c9] rounded-[12px] px-3 py-1 text-[14px] text-[#7c787d] outline-none w-[230px] focus:border-[#13808c]"
            placeholder="Account search"
          />
        </div>
      </div>

      {/* Row 1 */}
      <div className="flex items-stretch gap-0.5 px-3 pt-1.5 pb-0.5 overflow-x-auto">
        {NAV_ROW1.map((item) => (
          <NavTab
            key={item.tab}
            item={item}
            active={activeTab === item.tab}
            onClick={() => setActiveTab(item.tab)}
          />
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex items-stretch gap-0.5 px-3 pb-1.5 pt-0.5">
        {NAV_ROW2.map((item) => (
          <NavTab
            key={item.tab}
            item={item}
            active={activeTab === item.tab}
            onClick={() => setActiveTab(item.tab)}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Log templates ────────────────────────────────────────────────────────────

interface LogTemplate {
  id: string;
  name: string;
  description: string;
  published: boolean;
  stats: [number, number, number];
}

const LOG_TEMPLATES: LogTemplate[] = [
  { id: "1", name: "Building Fire",                    description: "A building is on fire",                   published: false, stats: [0, 0, 0] },
  { id: "2", name: "defender:",                         description: "default",                                 published: true,  stats: [0, 1, 0] },
  { id: "3", name: "defender:severity=High",            description: "defender has triggered this",             published: true,  stats: [1, 1, 0] },
  { id: "4", name: "defender:severity=Medium",          description: "defender:severity=Medium",                published: true,  stats: [0, 0, 0] },
  { id: "5", name: "defender:tags=[partAOfCompany]",    description: "defender:tags=[partAOfCompany]",          published: true,  stats: [0, 0, 0] },
  { id: "6", name: "Flood",                             description: "Flooding has been reported in the affected area. This log is activated to coordinate evacuation, protect personnel and assets, and liaise with emergency services.", published: true, stats: [1, 1, 0] },
  { id: "7", name: "StorageBreakin",                    description: "Some has broken in to our storage",       published: true,  stats: [1, 0, 0] },
];

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

function StatIcons({ stats }: { stats: [number, number, number] }) {
  return (
    <div className="flex gap-[6px] text-[#7c787d] text-[13px]">
      <span className="flex items-center gap-0.5">
        <svg width="14" height="14" viewBox="0 0 13.5 13.5" fill="none" style={{ transform: 'scaleY(-1)' }}>
          <path d={svgPaths.p12a3a400} fill="#7C787D" />
        </svg>
        {stats[0]}
      </span>
      <span className="flex items-center gap-0.5">
        <svg width="12" height="12" viewBox="0 0 11.8125 11.8125" fill="none" style={{ transform: 'scaleY(-1)' }}>
          <path d={svgPaths.p2ec0b000} fill="#7C787D" />
        </svg>
        {stats[1]}
      </span>
      <span className="flex items-center gap-0.5">
        <svg width="12" height="14" viewBox="0 0 11.8125 13.5" fill="none" style={{ transform: 'scaleY(-1)' }}>
          <path d={svgPaths.pba95b30} fill="#7C787D" />
        </svg>
        {stats[2]}
      </span>
    </div>
  );
}

function PinIcon() {
  return (
    <div className="relative size-10 shrink-0 flex items-center justify-center">
      <svg className="absolute inset-0 size-full" viewBox="0 0 40 40" fill="none" style={{ transform: 'scaleY(-1)' }}>
        <path d={svgPaths.p72aaf00} fill="#A9BCBF" />
      </svg>
      <svg className="relative z-10" width="11" height="15" viewBox="0 0 15 20.1074" fill="none" style={{ transform: 'scaleY(-1)' }}>
        <path d={svgPaths.p320fd00} fill="white" />
      </svg>
    </div>
  );
}

// ─── Detail panel ─────────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#dbe8e9]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-5 py-3.5 hover:bg-[#f4f8f9] transition-colors"
      >
        <span className="text-[14px] text-[#202627]">{title}</span>
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          className={`transition-transform ${open ? "rotate-90" : ""}`}
        >
          <path d="M1.5 1L6.5 6L1.5 11" stroke="#202627" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && children && (
        <div className="px-5 pb-4">{children}</div>
      )}
    </div>
  );
}

function DetailPanel({
  template,
  onClose,
}: {
  template: LogTemplate;
  onClose: () => void;
}) {
  const [published, setPublished] = useState(template.published);
  const [name, setName] = useState(template.name);
  const [notification, setNotification] = useState("");

  return (
    <div className="w-[360px] shrink-0 border-l border-[#dbe8e9] bg-white flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#dbe8e9] shrink-0">
        <button className="text-[#cd0152] text-[13px] hover:opacity-80">Delete</button>
        <div className="flex items-center gap-2">
          <button onClick={onClose} className="text-[#202627] text-[13px] px-3 py-1 rounded hover:bg-[#f4f8f9] border border-[#dbe8e9]">
            Close
          </button>
          <button className="text-white text-[13px] px-3 py-1 rounded bg-[#123236] hover:bg-[#0d2527]">
            Save
          </button>
        </div>
      </div>

      {/* Published toggle */}
      <div className={`px-5 py-4 border-b border-[#dbe8e9] ${published ? "bg-white" : "bg-[#fff8f0]"}`}>
        <div className="flex items-center justify-between mb-1.5">
          <span className={`text-[15px] font-semibold ${published ? "text-[#202627]" : "text-[#a34003]"}`}>
            {published ? "Template is published" : "Template is not published"}
          </span>
          {/* Toggle */}
          <button
            onClick={() => setPublished(!published)}
            className={`relative w-10 h-6 rounded-full transition-colors ${published ? "bg-[#23891e]" : "bg-[#ff9800]"}`}
          >
            <div
              className={`absolute top-0.5 size-5 bg-white rounded-full shadow transition-transform ${
                published ? "translate-x-[18px]" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>
        {!published && (
          <p className="text-[13px] text-[#505050] mb-2">
            The template is not published and can not be used to create logs by operators.
          </p>
        )}
        <div className="flex gap-2">
          <span className="flex items-center gap-1 text-[12px] text-[#23891e] bg-[rgba(157,228,153,0.15)] border border-[rgba(157,228,153,0.3)] px-2.5 py-1 rounded-[4px]">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="#23891e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Available in web app
          </span>
          <span className="flex items-center gap-1 text-[12px] text-[#23891e] bg-[rgba(157,228,153,0.15)] border border-[rgba(157,228,153,0.3)] px-2.5 py-1 rounded-[4px]">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="#23891e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Available in mobile app
          </span>
        </div>
      </div>

      {/* Sections */}
      <div className="flex-1 overflow-y-auto">
        <Section title="Basic information">
          <div className="flex flex-col gap-3 pt-1">
            <div>
              <label className="block text-[12px] text-[#505050] mb-1">Template name</label>
              <input
                className="w-full border border-[#c9c9c9] rounded-[4px] px-3 py-2 text-[14px] text-[#202627] outline-none focus:border-[#13808c]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-[12px] text-[#505050] mb-1">Notification message (template)</label>
              <textarea
                className="w-full border border-[#c9c9c9] rounded-[4px] px-3 py-2 text-[14px] text-[#202627] outline-none focus:border-[#13808c] resize-none h-24"
                value={notification}
                onChange={(e) => setNotification(e.target.value)}
                placeholder=""
              />
              <p className="text-[12px] text-[#7c787d] mt-1">
                This text will be used to describe the situation in invitation messages sent to participants and teams.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Group and availability">
          <div className="flex flex-col gap-3 pt-1">
            <div>
              <p className="text-[12px] text-[#505050] mb-0.5">Group</p>
              <div className="flex items-center justify-between">
                <span className="text-[14px] text-[#202627]">ThomasAPI</span>
                <button className="text-[13px] text-[#13808c] hover:underline">Change group →</button>
              </div>
            </div>
            <div>
              <p className="text-[12px] text-[#505050] mb-1">Template availability</p>
              <div className="border border-[#c9c9c9] rounded-[4px] px-3 py-2 flex items-center justify-between text-[14px] text-[#202627] bg-white">
                <span>This group only (Local)</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="#505050" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[13px] text-[#505050] mt-1">
                This template can <strong>only</strong> be used by <strong>ThomasAPI</strong>
              </p>
            </div>
          </div>
        </Section>

        <Section title="Teams">
          <div className="pt-1">
            <p className="text-[13px] text-[#7c787d] mb-2">No teams added to template</p>
            <button className="text-[13px] text-[#13808c] hover:underline flex items-center gap-1">
              <span className="text-lg leading-none">+</span> Add teams to template
            </button>
          </div>
        </Section>

        <Section title="Tasks" />
        <Section title="Meetings for rooms" />
        <Section title="Files" />
      </div>
    </div>
  );
}

// ─── Log templates content ────────────────────────────────────────────────────

function LogTemplatesContent() {
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState<LogTemplate | null>(null);
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const filtered = LOG_TEMPLATES.filter(
    (t) =>
      t.name.toLowerCase().includes(filter.toLowerCase()) ||
      t.description.toLowerCase().includes(filter.toLowerCase())
  );

  function toggleCheck(id: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
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
            <button className="flex items-center gap-1.5 bg-white border border-[#dbe8e9] rounded-full px-3 py-1.5 text-[13px] text-[#202627] hover:bg-[#f4f8f9] transition-colors whitespace-nowrap shadow-sm">
              + New log template
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
          {filtered.map((t) => (
            <div key={t.id} className="flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-3 size-3.5 accent-[#123236] shrink-0"
                checked={checked.has(t.id)}
                onChange={() => toggleCheck(t.id)}
              />
              <button
                onClick={() => setSelected(selected?.id === t.id ? null : t)}
                className={`flex-1 flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-left transition-colors ${
                  selected?.id === t.id
                    ? "bg-[#ebf2f3] border border-[#a9bcbf]"
                    : "bg-[#f4f8f9] hover:bg-[#ebf2f3] border border-transparent"
                }`}
              >
                <PinIcon />
                <div className="flex-1 min-w-0">
                  <p className="text-[#202627] text-[15px] leading-6 truncate">{t.name}</p>
                  <p className="text-[#7c787d] text-[13px] leading-5 truncate">{t.description}</p>
                </div>
                <div className="flex flex-col items-end gap-1.5 shrink-0 ml-2">
                  <StatusBadge published={t.published} />
                  <StatIcons stats={t.stats} />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      {selected && (
        <DetailPanel template={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

// ─── Placeholder ──────────────────────────────────────────────────────────────

function PlaceholderContent({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2 text-center px-8 bg-white">
      <p className="text-[18px] text-[#202627]">{label}</p>
      <p className="text-[13px] text-[#7c787d]">This section is not yet implemented in this prototype.</p>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <StoreProvider>
      <AppShell />
    </StoreProvider>
  );
}

function AppShell() {
  const [mode, setMode] = useState<"admin" | "incident">("admin");
  const [activeTab, setActiveTab] = useState<ActiveTab>("logtemplates");

  if (mode === "incident") {
    return <IncidentView onExit={() => setMode("admin")} />;
  }

  function renderContent() {
    switch (activeTab) {
      case "logtemplates": return <LogTemplatesContent />;
      case "modules":      return <ModulesPanel />;
      case "views":        return <ViewsPanel />;
      default:             return <PlaceholderContent label={activeTab} />;
    }
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar onOpenIncident={() => setMode("incident")} />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <TopNav activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 overflow-hidden bg-white">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
