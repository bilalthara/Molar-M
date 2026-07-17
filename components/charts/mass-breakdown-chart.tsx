import type { FormulaBreakdown } from "@/lib/molar-mass";

const COLORS = ["#0f766e", "#1d4ed8", "#b45309", "#7c3aed", "#be123c", "#0e7490", "#4d7c0f"];

type MassBreakdownChartProps = {
  breakdown: FormulaBreakdown[];
  total: number;
  title?: string;
  ariaLabel?: string;
};

export function MassBreakdownChart({
  breakdown,
  total,
  title = "Mass contribution by element",
  ariaLabel,
}: MassBreakdownChartProps) {
  const width = 320;
  const height = 180;
  const radius = 58;
  const cx = 90;
  const cy = 90;

  let angle = -Math.PI / 2;
  const slices = breakdown.map((row, index) => {
    const portion = total > 0 ? row.contribution / total : 0;
    const sweep = portion * Math.PI * 2;
    const start = angle;
    angle += sweep;
    const x1 = cx + radius * Math.cos(start);
    const y1 = cy + radius * Math.sin(start);
    const x2 = cx + radius * Math.cos(angle);
    const y2 = cy + radius * Math.sin(angle);
    const large = sweep > Math.PI ? 1 : 0;
    const path =
      portion >= 0.999
        ? `M ${cx} ${cy - radius} A ${radius} ${radius} 0 1 1 ${cx - 0.01} ${cy - radius} Z`
        : `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2} Z`;
    return {
      ...row,
      portion,
      path,
      color: COLORS[index % COLORS.length],
    };
  });

  return (
    <figure className="max-w-full overflow-hidden rounded-2xl border border-border bg-surface p-3 sm:p-5">
      <figcaption className="mb-3 text-sm font-semibold text-foreground">{title}</figcaption>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full max-w-md"
        role="img"
        aria-label={ariaLabel ?? title}
      >
        {slices.map((slice) => (
          <path key={slice.element} d={slice.path} fill={slice.color} opacity={0.92}>
            <title>
              {slice.element}: {(slice.portion * 100).toFixed(1)}%
            </title>
          </path>
        ))}
        <circle cx={cx} cy={cy} r={34} className="fill-[var(--surface)]" />
        <text x={cx} y={cy - 4} textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="600">
          Mass
        </text>
        <text x={cx} y={cy + 12} textAnchor="middle" fill="currentColor" fontSize="10" opacity="0.7">
          %
        </text>
        {slices.map((slice, index) => (
          <g key={`legend-${slice.element}`} transform={`translate(180 ${28 + index * 22})`}>
            <rect width="10" height="10" rx="2" fill={slice.color} />
            <text x="18" y="9" fill="currentColor" fontSize="11">
              {slice.element} {(slice.portion * 100).toFixed(1)}%
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}
