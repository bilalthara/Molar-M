import type { CompoundProfile } from "@/lib/chemistry/types";

/** Lightweight educational SVG chosen by formula / category — explains, does not decorate. */
export function CompoundConceptDiagram({ profile }: { profile: CompoundProfile }) {
  const f = profile.formula;

  if (f === "H2O") return <WaterBondingDiagram />;
  if (f === "CO2") return <LinearTriatomicDiagram label="CO₂" center="C" left="O" right="O" note="Linear molecule · 180°" />;
  if (f === "CH4") return <TetrahedralHintDiagram />;
  if (profile.category === "salt" || profile.chemical.chemicalFamily.toLowerCase().includes("ionic")) {
    return <IonicLatticeHintDiagram name={profile.name} />;
  }
  if (profile.category === "acid") return <AcidProtonHintDiagram name={profile.name} />;
  return <GenericMoleculeHintDiagram formula={profile.formula} name={profile.name} />;
}

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <figure className="rounded-2xl border border-border bg-surface p-4 sm:p-5">
      <figcaption className="mb-3 text-sm font-semibold text-foreground">{title}</figcaption>
      {children}
    </figure>
  );
}

function WaterBondingDiagram() {
  return (
    <Frame title="Hydrogen bonding in water (H₂O)">
      <svg
        viewBox="0 0 360 160"
        className="h-auto w-full max-w-lg"
        role="img"
        aria-label="Diagram of hydrogen bonding between water H2O molecules"
      >
        <circle cx="70" cy="80" r="22" fill="#0f766e" />
        <text x="70" y="85" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">
          O
        </text>
        <circle cx="40" cy="55" r="12" fill="#1d4ed8" />
        <text x="40" y="59" textAnchor="middle" fill="#fff" fontSize="10">
          H
        </text>
        <circle cx="40" cy="105" r="12" fill="#1d4ed8" />
        <text x="40" y="109" textAnchor="middle" fill="#fff" fontSize="10">
          H
        </text>
        <line x1="95" y1="80" x2="200" y2="80" stroke="#b45309" strokeWidth="2" strokeDasharray="4 4" />
        <text x="145" y="70" textAnchor="middle" fill="currentColor" fontSize="10">
          H-bond
        </text>
        <circle cx="250" cy="80" r="22" fill="#0f766e" />
        <text x="250" y="85" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">
          O
        </text>
        <circle cx="290" cy="55" r="12" fill="#1d4ed8" />
        <text x="290" y="59" textAnchor="middle" fill="#fff" fontSize="10">
          H
        </text>
        <circle cx="290" cy="105" r="12" fill="#1d4ed8" />
        <text x="290" y="109" textAnchor="middle" fill="#fff" fontSize="10">
          H
        </text>
      </svg>
      <p className="mt-2 text-sm text-muted">
        Dashed line = hydrogen bond between molecules. This network explains water&apos;s high boiling point and the
        density anomaly of ice.
      </p>
    </Frame>
  );
}

function LinearTriatomicDiagram({
  label,
  center,
  left,
  right,
  note,
}: {
  label: string;
  center: string;
  left: string;
  right: string;
  note: string;
}) {
  return (
    <Frame title={`${label} molecular geometry`}>
      <svg viewBox="0 0 320 120" className="h-auto w-full max-w-md" role="img" aria-label={`${label} linear geometry`}>
        <circle cx="60" cy="60" r="20" fill="#1d4ed8" />
        <text x="60" y="65" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">
          {left}
        </text>
        <line x1="82" y1="60" x2="138" y2="60" stroke="currentColor" strokeWidth="3" />
        <circle cx="160" cy="60" r="22" fill="#0f766e" />
        <text x="160" y="65" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">
          {center}
        </text>
        <line x1="182" y1="60" x2="238" y2="60" stroke="currentColor" strokeWidth="3" />
        <circle cx="260" cy="60" r="20" fill="#1d4ed8" />
        <text x="260" y="65" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">
          {right}
        </text>
      </svg>
      <p className="mt-2 text-sm text-muted">{note}</p>
    </Frame>
  );
}

function TetrahedralHintDiagram() {
  return (
    <Frame title="Methane geometry (tetrahedral hint)">
      <svg viewBox="0 0 280 160" className="h-auto w-full max-w-sm" role="img" aria-label="Methane tetrahedral arrangement">
        <circle cx="140" cy="70" r="24" fill="#0f766e" />
        <text x="140" y="75" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">
          C
        </text>
        {[
          [70, 40],
          [210, 40],
          [90, 130],
          [190, 130],
        ].map(([x, y], i) => (
          <g key={i}>
            <line x1="140" y1="70" x2={x} y2={y} stroke="currentColor" strokeWidth="2" />
            <circle cx={x} cy={y} r="14" fill="#1d4ed8" />
            <text x={x} y={y + 4} textAnchor="middle" fill="#fff" fontSize="11">
              H
            </text>
          </g>
        ))}
      </svg>
      <p className="mt-2 text-sm text-muted">Four C–H bonds point toward the corners of a tetrahedron (~109.5°).</p>
    </Frame>
  );
}

function IonicLatticeHintDiagram({ name }: { name: string }) {
  return (
    <Frame title={`Ionic packing concept — ${name}`}>
      <svg viewBox="0 0 240 140" className="h-auto w-full max-w-xs" role="img" aria-label="Alternating cations and anions">
        {Array.from({ length: 12 }).map((_, i) => {
          const col = i % 4;
          const row = Math.floor(i / 4);
          const x = 40 + col * 50;
          const y = 30 + row * 40;
          const cation = (col + row) % 2 === 0;
          return (
            <circle key={i} cx={x} cy={y} r="14" fill={cation ? "#0f766e" : "#1d4ed8"} opacity={0.9} />
          );
        })}
      </svg>
      <p className="mt-2 text-sm text-muted">
        Teal and blue circles alternate like positive and negative ions in a crystal lattice. Formula mass is the mass
        of one formula unit, not a single molecule.
      </p>
    </Frame>
  );
}

function AcidProtonHintDiagram({ name }: { name: string }) {
  return (
    <Frame title={`Acid behavior — ${name}`}>
      <svg viewBox="0 0 320 100" className="h-auto w-full max-w-md" role="img" aria-label="Acid donates a proton to water">
        <rect x="20" y="30" width="90" height="40" rx="8" fill="#0f766e" />
        <text x="65" y="55" textAnchor="middle" fill="#fff" fontSize="12">
          Acid–H
        </text>
        <path d="M120 50 H150" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="currentColor" />
          </marker>
        </defs>
        <rect x="160" y="30" width="60" height="40" rx="8" fill="#1d4ed8" />
        <text x="190" y="55" textAnchor="middle" fill="#fff" fontSize="12">
          H₂O
        </text>
        <text x="240" y="55" fontSize="16" fill="currentColor">
          →
        </text>
        <rect x="260" y="30" width="50" height="40" rx="8" fill="#b45309" />
        <text x="285" y="55" textAnchor="middle" fill="#fff" fontSize="11">
          H₃O⁺
        </text>
      </svg>
      <p className="mt-2 text-sm text-muted">
        In water, many acids transfer H⁺ (a proton) to form hydronium. Molar mass still comes from the undissociated
        formula used to prepare the solution.
      </p>
    </Frame>
  );
}

function GenericMoleculeHintDiagram({ formula, name }: { formula: string; name: string }) {
  return (
    <Frame title={`Formula unit — ${name}`}>
      <svg viewBox="0 0 280 100" className="h-auto w-full max-w-sm" role="img" aria-label={`Formula ${formula}`}>
        <rect x="30" y="25" width="220" height="50" rx="12" fill="var(--surface-2)" stroke="var(--border)" />
        <text x="140" y="55" textAnchor="middle" fill="currentColor" fontSize="18" fontFamily="monospace" fontWeight="700">
          {formula}
        </text>
      </svg>
      <p className="mt-2 text-sm text-muted">
        Count every atom in this formula, multiply by atomic mass, then add. That total is the molar mass used in lab
        weighing.
      </p>
    </Frame>
  );
}
