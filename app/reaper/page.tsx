import Link from "next/link";
import type { Skill, RotationPhase } from "@/data/types";
import RotationTimeline from "@/components/RotationTimeline";
import skillsData from "@/data/reaper/skills.json";
import openerData from "@/data/reaper/opener.json";
import burstData from "@/data/reaper/burst.json";
import fillerData from "@/data/reaper/filler.json";

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

export default function ReaperPage() {
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
        <h1 className="text-4xl font-bold text-white">Reaper</h1>
        <p className="mt-2 text-ffxiv-muted">
          Standard 2-minute rotation &middot; Double Enshroud burst window
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
          <span className="inline-block h-3 w-3 rounded-full bg-ffxiv-soul" />
          <span className="text-ffxiv-muted">Soul Gauge</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-ffxiv-shroud" />
          <span className="text-ffxiv-muted">Shroud Gauge</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block rounded bg-ffxiv-gold/20 px-1.5 py-0.5 text-[10px] font-medium text-ffxiv-gold">
            positional
          </span>
          <span className="text-ffxiv-muted">Flank / Rear bonus</span>
        </div>
      </div>

      {/* Decision logic summary */}
      <details className="mb-8 rounded-lg border border-ffxiv-accent bg-ffxiv-surface">
        <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-white hover:text-ffxiv-highlight">
          Key Decision Logic (from code analysis)
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
                  Burst inside Arcane Circle
                </td>
                <td className="py-2">
                  All high-potency actions must land within the 20s raid buff
                  window.
                </td>
              </tr>
              <tr className="border-t border-ffxiv-accent/30">
                <td className="py-2 pr-4 font-medium text-ffxiv-highlight">
                  Refresh Death&apos;s Design before burst
                </td>
                <td className="py-2">
                  Check if debuff will expire within 30s. Never let the 10%
                  damage buff fall off during burst.
                </td>
              </tr>
              <tr className="border-t border-ffxiv-accent/30">
                <td className="py-2 pr-4 font-medium text-ffxiv-highlight">
                  Burn Soul Slice in first 10s
                </td>
                <td className="py-2">
                  Aggressive resource generation in the opener to fuel the burst
                  window.
                </td>
              </tr>
              <tr className="border-t border-ffxiv-accent/30">
                <td className="py-2 pr-4 font-medium text-ffxiv-highlight">
                  Double Enshroud at 0-15s or 60-75s
                </td>
                <td className="py-2">
                  Enshroud windows must align with Arcane Circle. Two Enshrouds
                  fit within the 20s burst window.
                </td>
              </tr>
              <tr className="border-t border-ffxiv-accent/30">
                <td className="py-2 pr-4 font-medium text-ffxiv-highlight">
                  Save resources near Arcane Circle
                </td>
                <td className="py-2">
                  Don&apos;t spend Soul/Shroud when AC is coming within 8s.
                  Pool for burst.
                </td>
              </tr>
              <tr className="border-t border-ffxiv-accent/30">
                <td className="py-2 pr-4 font-medium text-ffxiv-highlight">
                  Avoid overcapping gauges
                </td>
                <td className="py-2">
                  Use Blood Stalk at 50+ Soul, Soul Slice on cooldown. Wasted
                  gauge = lost damage.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>

      {/* Rotation timeline */}
      <RotationTimeline phases={phases} skills={skills} />

      {/* Footer */}
      <footer className="mt-12 border-t border-ffxiv-accent pt-6 text-center text-xs text-ffxiv-muted">
        <p>
          Data sourced from The Balance FFXIV community guides and codebase
          analysis of RotationSolver.
        </p>
        <p className="mt-1">
          FINAL FANTASY XIV &copy; SQUARE ENIX CO., LTD. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
