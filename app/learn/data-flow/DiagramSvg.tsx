"use client";

// SVG矢印コンポーネント
function Arrow({
  x1, y1, x2, y2, active, color, dashed = false,
}: {
  x1: number; y1: number; x2: number; y2: number;
  active: boolean; color: string; dashed?: boolean;
}) {
  return (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={active ? color : "#374151"}
      strokeWidth={active ? 3 : 1.5}
      strokeDasharray={dashed ? "6 4" : undefined}
      markerEnd={`url(#arrow-${active ? "active" : "inactive"})`}
      style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
    />
  );
}

// SVGノードコンポーネント
function Node({ id, x, y, emoji, active }: {
  id: string; x: number; y: number; emoji: string; active: boolean;
}) {
  return (
    <g>
      <rect
        x={x - 55} y={y - 30} width={110} height={60} rx={12}
        fill={active ? "#1e3a5f" : "#1f2937"}
        stroke={active ? "#3b82f6" : "#374151"}
        strokeWidth={active ? 2 : 1}
        style={{ transition: "fill 0.3s, stroke 0.3s" }}
      />
      <text x={x} y={y - 5} textAnchor="middle" fontSize={22}>{emoji}</text>
      <text
        x={x} y={y + 18} textAnchor="middle" fontSize={10}
        fill={active ? "#93c5fd" : "#9ca3af"}
        style={{ transition: "fill 0.3s" }}
      >
        {id}
      </text>
    </g>
  );
}

const NODES = [
  { id: "ブラウザ", x: 70,  y: 210, emoji: "🖥️" },
  { id: "API",     x: 320, y: 210, emoji: "⚙️"  },
  { id: "OpenAI",  x: 560, y: 90,  emoji: "🤖" },
  { id: "DB",      x: 560, y: 330, emoji: "🗄️" },
];

// データフロー図本体
export default function DiagramSvg({
  activeStep,
  activeNodes,
}: {
  activeStep: number | null;
  activeNodes: string[];
}) {
  return (
    <svg viewBox="0 0 640 430" className="w-full max-w-2xl mx-auto">
      <defs>
        <marker id="arrow-active"   markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#3b82f6" />
        </marker>
        <marker id="arrow-inactive" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#374151" />
        </marker>
      </defs>

      {/* ブラウザ → API */}
      <Arrow x1={130} y1={205} x2={245} y2={205} active={activeStep === 1} color="#3b82f6" />
      {/* API → OpenAI */}
      <Arrow x1={370} y1={192} x2={500} y2={108} active={activeStep === 2} color="#a855f7" />
      {/* OpenAI → API */}
      <Arrow x1={500} y1={120} x2={370} y2={202} active={activeStep === 3} color="#a855f7" dashed />
      {/* API → DB */}
      <Arrow x1={370} y1={222} x2={500} y2={314} active={activeStep === 4} color="#22c55e" />
      {/* API → ブラウザ */}
      <Arrow x1={245} y1={218} x2={130} y2={218} active={activeStep === 5} color="#3b82f6" dashed />

      {NODES.map((node) => (
        <Node key={node.id} {...node} active={activeNodes.includes(node.id)} />
      ))}
    </svg>
  );
}
