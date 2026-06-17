import {
  BarChart, Bar, LineChart as RLineChart, Line,
  PieChart as RPieChart, Pie, Cell,
  AreaChart, Area, ResponsiveContainer,
} from "recharts";
import { GRIDS, SavedView, ChartType } from "../store";

export const COLORS = ["#123236", "#13808c", "#a9bcbf", "#23891e", "#a34003"];

const DEMO_DATA = [
  { name: "Mon", incidents: 12, resolved: 8 },
  { name: "Tue", incidents: 19, resolved: 15 },
  { name: "Wed", incidents: 7,  resolved: 7 },
  { name: "Thu", incidents: 25, resolved: 18 },
  { name: "Fri", incidents: 14, resolved: 12 },
];

const PIE_DATA = [
  { name: "Fire", value: 30 },
  { name: "Flood", value: 25 },
  { name: "Medical", value: 20 },
  { name: "Other", value: 25 },
];

export function MiniChart({ type }: { type: ChartType }) {
  if (type === "bar") return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={DEMO_DATA} margin={{ top: 4, right: 4, left: -30, bottom: 0 }}>
        <Bar dataKey="incidents" fill="#123236" radius={[2, 2, 0, 0]} />
        <Bar dataKey="resolved"  fill="#23891e" radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
  if (type === "line") return (
    <ResponsiveContainer width="100%" height="100%">
      <RLineChart data={DEMO_DATA} margin={{ top: 4, right: 4, left: -30, bottom: 0 }}>
        <Line type="monotone" dataKey="incidents" stroke="#123236" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="resolved"  stroke="#23891e" strokeWidth={2} dot={false} />
      </RLineChart>
    </ResponsiveContainer>
  );
  if (type === "area") return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={DEMO_DATA} margin={{ top: 4, right: 4, left: -30, bottom: 0 }}>
        <Area type="monotone" dataKey="incidents" stroke="#123236" fill="#123236" fillOpacity={0.15} />
      </AreaChart>
    </ResponsiveContainer>
  );
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RPieChart>
        <Pie data={PIE_DATA} cx="50%" cy="50%" outerRadius="70%" dataKey="value">
          {PIE_DATA.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
        </Pie>
      </RPieChart>
    </ResponsiveContainer>
  );
}

// Read-only dashboard: renders a saved view's grid of module charts.
export function ViewDashboard({ view }: { view: SavedView }) {
  const config = GRIDS.find((g) => g.id === view.grid)!;
  return (
    <div
      className="grid gap-3 h-full"
      style={{
        gridTemplateColumns: `repeat(${config.cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${config.rows}, minmax(180px, 1fr))`,
      }}
    >
      {view.modules.map((cell, i) =>
        cell ? (
          <div key={i} className="rounded-[10px] border border-[#dbe8e9] bg-white flex flex-col overflow-hidden shadow-sm">
            <div className="px-3 py-2 border-b border-[#dbe8e9] text-[13px] text-[#202627] truncate">
              {cell.name}
            </div>
            <div className="flex-1 p-3 min-h-0">
              <MiniChart type={cell.chartType} />
            </div>
          </div>
        ) : (
          <div key={i} className="rounded-[10px] border border-dashed border-[#dbe8e9] bg-[#f9fbfb] flex items-center justify-center text-[12px] text-[#a9bcbf]">
            Empty slot
          </div>
        )
      )}
    </div>
  );
}
