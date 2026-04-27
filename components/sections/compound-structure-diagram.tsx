import type { ReactNode } from "react";

type BreakdownRow = { element: string; count: number };

function normFormula(f: string) {
  return f.replace(/\s+/g, "");
}

function isHomonuclearDiatomic(rows: BreakdownRow[]) {
  if (rows.length !== 1) return false;
  const [r] = rows;
  if (!r || r.count !== 2) return false;
  return ["O", "N", "H", "F", "Cl", "Br", "I"].includes(r.element);
}

function isHeteroDiatomic(rows: BreakdownRow[]) {
  if (rows.length !== 2) return false;
  return rows.every((r) => r.count === 1);
}

function layoutSeed(formula: string) {
  let h = 0;
  for (let i = 0; i < formula.length; i += 1) {
    h = (h * 33 + formula.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

const stroke = { main: "#0F766E", soft: "#1FA37A", muted: "#94a3b8" };
const fill = { node: "#ecfdf5" };

function Atom({ cx, cy, label, r = 14 }: { cx: number; cy: number; label: string; r?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} fill={fill.node} r={r} stroke={stroke.soft} strokeWidth="1.6" />
      <text
        dominantBaseline="middle"
        fill={stroke.main}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="11"
        fontWeight="700"
        textAnchor="middle"
        x={cx}
        y={cy + 1}
      >
        {label}
      </text>
    </g>
  );
}

type DiagramStyle = "chemical" | "lewis" | "3d";

function BondLine({
  x1,
  y1,
  x2,
  y2,
  dashed,
  thick,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  dashed?: boolean;
  thick?: boolean;
}) {
  return (
    <line
      stroke={stroke.main}
      strokeDasharray={dashed ? "3 3" : undefined}
      strokeWidth={thick ? 2.4 : 1.35}
      x1={x1}
      x2={x2}
      y1={y1}
      y2={y2}
    />
  );
}

function DiatomicHetero({ a, b, style }: { a: string; b: string; style: DiagramStyle }) {
  return (
    <svg aria-hidden className="h-full w-full" viewBox="0 0 160 72">
      <BondLine dashed={style === "lewis"} thick={style === "3d"} x1={36} x2={124} y1={36} y2={36} />
      <Atom cx={36} cy={36} label={a} />
      <Atom cx={124} cy={36} label={b} />
    </svg>
  );
}

function WaterDiagram({ style }: { style: DiagramStyle }) {
  const lewis = style === "lewis";
  return (
    <svg aria-hidden className="h-full w-full" viewBox="0 0 180 96">
      <BondLine dashed={lewis} x1={90} x2={44} y1={58} y2={28} />
      <BondLine dashed={lewis} x1={90} x2={136} y1={58} y2={28} />
      <Atom cx={90} cy={62} label="O" r={16} />
      <Atom cx={40} cy={26} label="H" r={12} />
      <Atom cx={140} cy={26} label="H" r={12} />
      {lewis ? (
        <>
          <circle cx={90} cy={72} fill="none" r={5} stroke={stroke.muted} strokeWidth="1" />
          <circle cx={32} cy={20} fill="none" r={4} stroke={stroke.muted} strokeWidth="1" />
          <circle cx={148} cy={20} fill="none" r={4} stroke={stroke.muted} strokeWidth="1" />
        </>
      ) : null}
    </svg>
  );
}

function Co2Diagram({ style }: { style: DiagramStyle }) {
  return (
    <svg aria-hidden className="h-full w-full" viewBox="0 0 200 80">
      <BondLine thick={style === "3d"} x1={40} x2={100} y1={40} y2={40} />
      <BondLine thick={style === "3d"} x1={100} x2={160} y1={40} y2={40} />
      <Atom cx={40} cy={40} label="O" />
      <Atom cx={100} cy={40} label="C" />
      <Atom cx={160} cy={40} label="O" />
      {style === "lewis" ? (
        <>
          <text fill={stroke.muted} fontSize="9" textAnchor="middle" x={40} y={18}>
            ··
          </text>
          <text fill={stroke.muted} fontSize="9" textAnchor="middle" x={160} y={18}>
            ··
          </text>
        </>
      ) : null}
    </svg>
  );
}

function AmmoniaDiagram({ style }: { style: DiagramStyle }) {
  return (
    <svg aria-hidden className="h-full w-full" viewBox="0 0 180 100">
      <BondLine dashed={style === "lewis"} x1={90} x2={46} y1={52} y2={28} />
      <BondLine dashed={style === "lewis"} x1={90} x2={134} y1={52} y2={28} />
      <BondLine dashed={style === "lewis"} x1={90} x2={90} y1={52} y2={88} />
      <Atom cx={90} cy={56} label="N" r={15} />
      <Atom cx={44} cy={26} label="H" r={11} />
      <Atom cx={136} cy={26} label="H" r={11} />
      <Atom cx={90} cy={90} label="H" r={11} />
    </svg>
  );
}

function MethaneDiagram({ style }: { style: DiagramStyle }) {
  const skew = style === "3d" ? 8 : 0;
  return (
    <svg aria-hidden className="h-full w-full" viewBox="0 0 200 110">
      <BondLine x1={100} x2={52 + skew} y1={58} y2={30} />
      <BondLine x1={100} x2={148 - skew} y1={58} y2={30} />
      <BondLine x1={100} x2={62} y1={58} y2={92} />
      <BondLine x1={100} x2={138} y1={58} y2={92} />
      <Atom cx={100} cy={60} label="C" r={15} />
      <Atom cx={48 + skew} cy={28} label="H" r={11} />
      <Atom cx={152 - skew} cy={28} label="H" r={11} />
      <Atom cx={58} cy={94} label="H" r={11} />
      <Atom cx={142} cy={94} label="H" r={11} />
    </svg>
  );
}

function IonPairDiagram({ style }: { style: DiagramStyle }) {
  return (
    <svg aria-hidden className="h-full w-full" viewBox="0 0 200 88">
      <text fill={stroke.muted} fontSize="10" textAnchor="middle" x={100} y={16}>
        ionic lattice (schematic)
      </text>
      <BondLine dashed x1={56} x2={144} y1={52} y2={52} />
      <Atom cx={56} cy={52} label="Na" r={14} />
      <Atom cx={144} cy={52} label="Cl" r={14} />
      {style === "3d" ? <BondLine thick x1={100} x2={100} y1={40} y2={64} /> : null}
    </svg>
  );
}

function FallbackCluster({ formula, breakdown, style }: { formula: string; breakdown: BreakdownRow[]; style: DiagramStyle }) {
  const seed = layoutSeed(formula);
  const n = Math.min(breakdown.length, 6);
  const cx = 100;
  const cy = 52;
  const radius = 38;
  const nodes = breakdown.slice(0, n).map((row, i) => {
    const angle = ((i + (seed % 7) / 10) / Math.max(n, 1)) * Math.PI * 2;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle) * 0.72;
    const label = row.count > 1 ? `${row.element}${row.count}` : row.element;
    return <Atom key={`${row.element}-${i}-${label}`} cx={x} cy={y} label={label} r={12} />;
  });
  return (
    <svg aria-hidden className="h-full w-full" viewBox="0 0 200 100">
      <BondLine dashed={style === "lewis"} x1={cx - 22} x2={cx + 22} y1={cy} y2={cy} />
      {nodes}
    </svg>
  );
}

function diagramForFormula(formula: string, breakdown: BreakdownRow[], style: DiagramStyle): ReactNode {
  const f = normFormula(formula).toUpperCase();
  const rows = breakdown;

  if (f === "H2O") return <WaterDiagram style={style} />;
  if (f === "CO2") return <Co2Diagram style={style} />;
  if (f === "NH3") return <AmmoniaDiagram style={style} />;
  if (f === "CH4") return <MethaneDiagram style={style} />;
  if (isHomonuclearDiatomic(rows)) {
    const el = rows[0]?.element ?? "A";
    return (
      <svg aria-hidden className="h-full w-full" viewBox="0 0 160 72">
        <BondLine dashed={style === "lewis"} thick={style === "3d"} x1={38} x2={122} y1={36} y2={36} />
        <Atom cx={38} cy={36} label={el} />
        <Atom cx={122} cy={36} label={el} />
      </svg>
    );
  }
  if (isHeteroDiatomic(rows)) {
    const [a, b] = [...rows].sort((x, y) => x.element.localeCompare(y.element));
    return <DiatomicHetero a={a.element} b={b.element} style={style} />;
  }
  if (rows.some((r) => r.element === "Na") && rows.some((r) => r.element === "Cl")) {
    return <IonPairDiagram style={style} />;
  }
  return <FallbackCluster breakdown={rows} formula={formula} style={style} />;
}

export function CompoundStructurePreview({
  formula,
  breakdown,
  className,
}: {
  formula: string;
  breakdown: BreakdownRow[];
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex h-24 w-full items-center justify-center rounded-lg border border-slate-200/90 bg-white p-2">
        {diagramForFormula(formula, breakdown, "chemical")}
      </div>
    </div>
  );
}

type StructureDiagramProps = {
  formula: string;
  breakdown: BreakdownRow[];
  style: DiagramStyle;
  className?: string;
};

export function StructureBlockDiagram({ formula, breakdown, style, className }: StructureDiagramProps) {
  return <div className={className}>{diagramForFormula(formula, breakdown, style)}</div>;
}
