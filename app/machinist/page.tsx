import Link from "next/link";
import type { Skill, RotationPhase, GaugeDefinition } from "@/data/types";
import RotationTimeline from "@/components/RotationTimeline";
import skillsData from "@/data/machinist/skills.json";
import openerData from "@/data/machinist/opener.json";
import burstData from "@/data/machinist/burst.json";
import fillerData from "@/data/machinist/filler.json";

const skills = skillsData as Record<string, Skill>;
const phases: RotationPhase[] = [
  openerData as RotationPhase,
  burstData as RotationPhase,
  fillerData as RotationPhase,
];

const NAV_ITEMS = [
  { id: "opener", label: "Opener" },
  { id: "burst", label: "Burst" },
  { id: "filler", label: "Filler" },
];

const MCH_GAUGES: GaugeDefinition[] = [
  { key: "heat", label: "Heat", color: "heat", max: 100 },
  { key: "battery", label: "Battery", color: "battery", max: 100 },
];

export default function MachinistPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="mb-4 inline-block text-sm text-ffxiv-muted hover:text-ffxiv-highlight"
        >
          &larr; Back to jobs
        </Link>
        <h1 className="text-4xl font-bold text-white">Machinist</h1>
        <p className="mt-2 text-ffxiv-muted">
          Standard 2-minute rotation &middot; Hypercharge + Wildfire burst
          window
        </p>
      </div>

      {/* Phase navigation */}
      <nav className="sticky top-0 z-40 -mx-4 mb-6 border-b border-ffxiv-accent bg-ffxiv-bg/95 px-4 py-3 backdrop-blur">
        <div className="flex gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-lg px-4 py-2 text-sm font-medium text-ffxiv-muted transition-colors hover:bg-ffxiv-accent hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Legend */}
      <div className="mb-8 flex flex-wrap gap-4 rounded-lg border border-ffxiv-accent bg-ffxiv-surface p-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-ffxiv-gcd" />
          <span className="text-ffxiv-muted">GCD (Global Cooldown)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-ffxiv-ogcd" />
          <span className="text-ffxiv-muted">oGCD (Off Global Cooldown)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-ffxiv-heat" />
          <span className="text-ffxiv-muted">Heat Gauge</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-ffxiv-battery" />
          <span className="text-ffxiv-muted">Battery Gauge</span>
        </div>
      </div>

      {/* Decision logic summary */}
      <details className="mb-8 rounded-lg border border-ffxiv-accent bg-ffxiv-surface">
        <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-white hover:text-ffxiv-highlight">
          Key Decision Logic
        </summary>
        <div className="border-t border-ffxiv-accent px-4 py-3">
          <table className="w-full text-xs">
            <thead>
              <tr className="text-left text-ffxiv-muted">
                <th className="pb-2 pr-4">Rule</th>
                <th className="pb-2">Reasoning</th>
              </tr>
            </thead>
            <tbody className="text-ffxiv-text">
              <tr className="border-t border-ffxiv-accent/30">
                <td className="py-2 pr-4 font-medium text-ffxiv-highlight">
                  Tools on cooldown &mdash; never delay
                </td>
                <td className="py-2">
                  Drill, Air Anchor, Chain Saw, and Excavator are your
                  highest-potency GCDs. Delaying them loses uses over a fight.
                </td>
              </tr>
              <tr className="border-t border-ffxiv-accent/30">
                <td className="py-2 pr-4 font-medium text-ffxiv-highlight">
                  Never Hypercharge when tools &lt; 8s
                </td>
                <td className="py-2">
                  Hypercharge locks you into 1.5s GCDs for ~8s. If a tool comes
                  off cooldown during Hypercharge, you lose a use.
                </td>
              </tr>
              <tr className="border-t border-ffxiv-accent/30">
                <td className="py-2 pr-4 font-medium text-ffxiv-highlight">
                  Wildfire + Hypercharge every 120s
                </td>
                <td className="py-2">
                  Barrel Stabilizer provides the Heat for Hypercharge and aligns
                  with Wildfire&apos;s 120s cooldown. Always pair them together.
                </td>
              </tr>
              <tr className="border-t border-ffxiv-accent/30">
                <td className="py-2 pr-4 font-medium text-ffxiv-highlight">
                  Reassemble on highest-potency tool
                </td>
                <td className="py-2">
                  Reassemble guarantees crit+dhit on the next weaponskill. Use
                  on Drill or Chain Saw during raid buff windows for maximum
                  value.
                </td>
              </tr>
              <tr className="border-t border-ffxiv-accent/30">
                <td className="py-2 pr-4 font-medium text-ffxiv-highlight">
                  Deploy Queen during raid buffs
                </td>
                <td className="py-2">
                  Automaton Queen snapshots buffs at deployment. Deploy at high
                  Battery (80+) during 2-minute raid buff windows.
                </td>
              </tr>
              <tr className="border-t border-ffxiv-accent/30">
                <td className="py-2 pr-4 font-medium text-ffxiv-highlight">
                  Single weave during Hypercharge
                </td>
                <td className="py-2">
                  Hypercharge GCD is 1.5s &mdash; only one oGCD fits between
                  Blazing Shots. Double weaving clips the GCD and loses damage.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>

      {/* Rotation timeline */}
      <RotationTimeline phases={phases} skills={skills} gauges={MCH_GAUGES} />

      {/* Footer */}
      <footer className="mt-12 border-t border-ffxiv-accent pt-6 text-center text-xs text-ffxiv-muted">
        <p>
          Data sourced from The Balance FFXIV community guides and codebase
          analysis.
        </p>
        <p className="mt-1">
          FINAL FANTASY XIV &copy; SQUARE ENIX CO., LTD. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
