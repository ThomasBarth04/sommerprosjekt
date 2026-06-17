import { useState } from "react";
import { X, Bot, Send, BarChart2, LineChart, PieChart, Activity } from "lucide-react";
import {
  BarChart, Bar, LineChart as RLineChart, Line, PieChart as RPieChart, Pie, Cell,
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

const COLORS = ["#123236", "#13808c", "#a9bcbf", "#23891e", "#a34003"];

const DEMO_DATA = [
  { name: "Mon", incidents: 12, resolved: 8, available: 24 },
  { name: "Tue", incidents: 19, resolved: 15, available: 22 },
  { name: "Wed", incidents: 7, resolved: 7, available: 26 },
  { name: "Thu", incidents: 25, resolved: 18, available: 20 },
  { name: "Fri", incidents: 14, resolved: 12, available: 23 },
  { name: "Sat", incidents: 6, resolved: 6, available: 28 },
  { name: "Sun", incidents: 3, resolved: 3, available: 30 },
];

const PIE_DATA = [
  { name: "Fire", value: 30 },
  { name: "Flood", value: 25 },
  { name: "Medical", value: 20 },
  { name: "Security", value: 15 },
  { name: "Other", value: 10 },
];

type ChartType = "bar" | "line" | "area" | "pie";

const CHAT_HISTORY = [
  { role: "user", text: "I need a visualisation showing incident trends over the past week." },
  { role: "ai", text: "Got it! Should I include both new incidents and resolved ones, or just total counts?" },
  { role: "user", text: "Both would be great. Also colour-code them so it's easy to read." },
  { role: "ai", text: "Perfect. I'll use a dual-series chart — incidents in dark teal and resolved in green. Should I group by day or hour?" },
  { role: "user", text: "By day is fine." },
  { role: "ai", text: "Great. I've drafted the visualisation below. You can toggle between chart types to see which works best for your use case." },
];

function ChartPreview({ type }: { type: ChartType }) {
  if (type === "bar") {
    return (
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={DEMO_DATA} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#dbe8e9" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#7c787d" }} />
          <YAxis tick={{ fontSize: 12, fill: "#7c787d" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="incidents" fill="#123236" radius={[4, 4, 0, 0]} name="Incidents" />
          <Bar dataKey="resolved" fill="#23891e" radius={[4, 4, 0, 0]} name="Resolved" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  if (type === "line") {
    return (
      <ResponsiveContainer width="100%" height={220}>
        <RLineChart data={DEMO_DATA} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#dbe8e9" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#7c787d" }} />
          <YAxis tick={{ fontSize: 12, fill: "#7c787d" }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="incidents" stroke="#123236" strokeWidth={2} dot={{ r: 3 }} name="Incidents" />
          <Line type="monotone" dataKey="resolved" stroke="#23891e" strokeWidth={2} dot={{ r: 3 }} name="Resolved" />
        </RLineChart>
      </ResponsiveContainer>
    );
  }
  if (type === "area") {
    return (
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={DEMO_DATA} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#dbe8e9" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#7c787d" }} />
          <YAxis tick={{ fontSize: 12, fill: "#7c787d" }} />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="incidents" stroke="#123236" fill="#123236" fillOpacity={0.15} name="Incidents" />
          <Area type="monotone" dataKey="resolved" stroke="#23891e" fill="#23891e" fillOpacity={0.15} name="Resolved" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
  return (
    <ResponsiveContainer width="100%" height={220}>
      <RPieChart>
        <Pie data={PIE_DATA} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
          {PIE_DATA.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </RPieChart>
    </ResponsiveContainer>
  );
}

const CHART_OPTS: { type: ChartType; label: string; icon: React.ReactNode }[] = [
  { type: "bar", label: "Bar", icon: <BarChart2 size={14} /> },
  { type: "line", label: "Line", icon: <LineChart size={14} /> },
  { type: "area", label: "Area", icon: <Activity size={14} /> },
  { type: "pie", label: "Pie", icon: <PieChart size={14} /> },
];

interface Props {
  onBack: () => void;
}

export function ModuleBuilderPage({ onBack }: Props) {
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(CHAT_HISTORY);

  function handleSend() {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: input.trim() },
      { role: "ai", text: "Thanks! I'll update the module based on your feedback. The preview will reflect your changes." },
    ]);
    setInput("");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-6">
      <div
        className="flex flex-col bg-[#f9fbfb] rounded-[12px] shadow-xl overflow-hidden w-full"
        style={{ maxWidth: 1200, height: "90vh" }}
      >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[#dbe8e9] bg-[#f9fbfb] shrink-0">
        <div className="flex items-center gap-1.5 text-[#202627] text-[14px]">
          <Bot size={16} className="text-[#123236]" />
          AI Module Builder
        </div>
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-[#505050] text-[13px] px-3 py-1 rounded border border-[#dbe8e9] hover:bg-[#ebf2f3] transition-colors"
        >
          <X size={14} />
          Close
        </button>
      </div>

      {/* Two-pane layout */}
      <div className="flex flex-1 overflow-hidden gap-0">
        {/* Left: conversation */}
        <div className="flex flex-col w-[45%] border-r border-[#dbe8e9] h-full">
          <div className="px-4 py-2 border-b border-[#dbe8e9]">
            <p className="text-[12px] text-[#7c787d] uppercase tracking-wide">Design conversation</p>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "ai" && (
                  <div className="bg-[#123236] rounded-full size-6 flex items-center justify-center shrink-0 mr-2 mt-0.5">
                    <Bot size={12} className="text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-[12px] px-3 py-2 text-[13px] leading-5 ${
                    msg.role === "user"
                      ? "bg-[#123236] text-white"
                      : "bg-white border border-[#dbe8e9] text-[#202627]"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          {/* Input */}
          <div className="p-3 border-t border-[#dbe8e9] flex gap-2">
            <input
              className="flex-1 bg-white border border-[#c9c9c9] rounded-[12px] px-3 py-2 text-[13px] text-[#202627] outline-none placeholder:text-[#7c787d] focus:border-[#13808c]"
              placeholder="Refine the module…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-[#123236] hover:bg-[#0d2527] text-white rounded-[12px] px-3 py-2 transition-colors"
            >
              <Send size={14} />
            </button>
          </div>
        </div>

        {/* Right: preview */}
        <div className="flex flex-col flex-1 h-full overflow-hidden">
          <div className="px-4 py-2 border-b border-[#dbe8e9] flex items-center justify-between">
            <p className="text-[12px] text-[#7c787d] uppercase tracking-wide">Preview</p>
            <div className="flex gap-1">
              {CHART_OPTS.map((opt) => (
                <button
                  key={opt.type}
                  onClick={() => setChartType(opt.type)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[12px] border transition-colors ${
                    chartType === opt.type
                      ? "bg-[#123236] text-white border-[#123236]"
                      : "bg-white text-[#505050] border-[#dbe8e9] hover:bg-[#ebf2f3]"
                  }`}
                >
                  {opt.icon}
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="bg-white border border-[#dbe8e9] rounded-[12px] p-4">
              <p className="text-[14px] text-[#202627] mb-1">Incident Trend Analysis</p>
              <p className="text-[12px] text-[#7c787d] mb-4">Weekly incident count vs resolved — grouped by day</p>
              <ChartPreview type={chartType} />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <button className="flex-1 bg-[#ebf2f3] border border-[#dbe8e9] text-[#202627] text-[13px] rounded-full py-2 hover:bg-[#dbe8e9] transition-colors">
                Save draft
              </button>
              <button className="flex-1 bg-[#123236] text-white text-[13px] rounded-full py-2 hover:bg-[#0d2527] transition-colors">
                Publish module
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
