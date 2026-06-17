import { createContext, useContext, useState, ReactNode } from "react";

// ─── Domain types ──────────────────────────────────────────────────────────────

export type ChartType = "bar" | "line" | "pie" | "area";

export interface Module {
  id: string;
  name: string;
  description: string;
  published: boolean;
  chartType: ChartType;
  createdAt: string;
  dataSource: string;
}

export type GridLayout = "2x2" | "3x2" | "2x1" | "1x2";

export interface GridConfig {
  id: GridLayout;
  label: string;
  cols: number;
  rows: number;
  cells: number;
}

export const GRIDS: GridConfig[] = [
  { id: "2x2", label: "2 × 2", cols: 2, rows: 2, cells: 4 },
  { id: "3x2", label: "3 × 2", cols: 3, rows: 2, cells: 6 },
  { id: "2x1", label: "2 × 1", cols: 2, rows: 1, cells: 2 },
  { id: "1x2", label: "1 × 2", cols: 1, rows: 2, cells: 2 },
];

export interface DroppedModule {
  moduleId: string;
  name: string;
  chartType: ChartType;
}

export interface SavedView {
  id: string;
  name: string;
  grid: GridLayout;
  modules: (DroppedModule | null)[];
  published: boolean;
}

// ─── Seed data ──────────────────────────────────────────────────────────────────

const SEED_MODULES: Module[] = [
  { id: "1", name: "Incident Trend Analysis",  description: "Visualises the number of incidents over time, grouped by severity. Built to support daily briefings.", published: true,  chartType: "line", createdAt: "2026-05-12", dataSource: "Incident logs" },
  { id: "2", name: "Responder Availability",   description: "Shows real-time availability of responders by team and shift. Useful for resource planning.",          published: true,  chartType: "bar",  createdAt: "2026-05-20", dataSource: "Responder schedules" },
  { id: "3", name: "Resource Utilisation",     description: "Tracks resource usage across active incidents. Highlights bottlenecks and over-allocated assets.",       published: false, chartType: "area", createdAt: "2026-06-01", dataSource: "Resource registry" },
  { id: "4", name: "Incident Type Breakdown",  description: "Pie chart showing distribution of incident types over a selected period.",                              published: true,  chartType: "pie",  createdAt: "2026-06-10", dataSource: "Incident logs" },
  { id: "5", name: "Team Response Time",       description: "Average response time per team. Still being refined with stakeholder feedback.",                         published: false, chartType: "bar",  createdAt: "2026-06-15", dataSource: "Incident logs" },
];

// A couple of pre-built views so the incident → tools → views flow is demoable
// out of the box. Anything you build in the Views tab is added alongside these.
const SEED_VIEWS: SavedView[] = [
  {
    id: "v1",
    name: "Daily briefing dashboard",
    grid: "2x2",
    published: true,
    modules: [
      { moduleId: "1", name: "Incident Trend Analysis", chartType: "line" },
      { moduleId: "2", name: "Responder Availability",  chartType: "bar" },
      { moduleId: "4", name: "Incident Type Breakdown", chartType: "pie" },
      null,
    ],
  },
  {
    id: "v2",
    name: "Resource overview",
    grid: "2x1",
    published: false,
    modules: [
      { moduleId: "2", name: "Responder Availability",  chartType: "bar" },
      { moduleId: "1", name: "Incident Trend Analysis", chartType: "line" },
    ],
  },
];

// ─── Store ───────────────────────────────────────────────────────────────────────

interface StoreValue {
  modules: Module[];
  publishedModules: Module[];
  views: SavedView[];
  addModule: (m: Module) => void;
  updateModule: (m: Module) => void;
  addView: (v: SavedView) => void;
  updateView: (v: SavedView) => void;
  deleteView: (id: string) => void;
  // Which views are enabled as log tools inside the active incident.
  enabledViewIds: string[];
  toggleViewEnabled: (id: string) => void;
}

const StoreContext = createContext<StoreValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [modules, setModules] = useState<Module[]>(SEED_MODULES);
  const [views, setViews] = useState<SavedView[]>(SEED_VIEWS);
  const [enabledViewIds, setEnabledViewIds] = useState<string[]>([]);

  const value: StoreValue = {
    modules,
    publishedModules: modules.filter((m) => m.published),
    views,
    addModule: (m) => setModules((p) => [...p, m]),
    updateModule: (m) => setModules((p) => p.map((x) => (x.id === m.id ? m : x))),
    addView: (v) => setViews((p) => [...p, v]),
    updateView: (v) => setViews((p) => p.map((x) => (x.id === v.id ? v : x))),
    deleteView: (id) => {
      setViews((p) => p.filter((x) => x.id !== id));
      setEnabledViewIds((p) => p.filter((x) => x !== id));
    },
    enabledViewIds,
    toggleViewEnabled: (id) =>
      setEnabledViewIds((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id])),
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreValue {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within a StoreProvider");
  return ctx;
}
