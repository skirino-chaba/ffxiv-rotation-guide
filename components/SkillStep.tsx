import type { Skill, RotationStep, GaugeDefinition } from "@/data/types";
import SkillIcon from "./SkillIcon";
import ResourceBar from "./ResourceBar";

interface SkillStepProps {
  step: RotationStep;
  skill: Skill;
  gauges: GaugeDefinition[];
}

export default function SkillStep({ step, skill, gauges }: SkillStepProps) {
  const isOgcd = step.type === "ogcd";

  return (
    <div className={`relative flex gap-4 ${isOgcd ? "ml-8" : ""}`}>
      {/* Timeline connector */}
      <div className="flex flex-col items-center">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
            isOgcd
              ? "border-ffxiv-ogcd bg-ffxiv-ogcd/20 text-ffxiv-ogcd"
              : "border-ffxiv-gcd bg-ffxiv-gcd/20 text-ffxiv-gcd"
          }`}
        >
          {step.position}
        </div>
        <div className="w-px flex-1 bg-ffxiv-accent/40" />
      </div>

      {/* Content card */}
      <div
        className={`mb-4 flex-1 rounded-lg border p-4 ${
          isOgcd
            ? "border-ffxiv-ogcd/30 bg-ffxiv-ogcd/5"
            : "border-ffxiv-gcd/30 bg-ffxiv-surface"
        }`}
      >
        <div className="flex items-start gap-3">
          <SkillIcon iconId={skill.icon} name={skill.name} />

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold text-white">{skill.name}</h3>

              <span
                className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${
                  isOgcd
                    ? "bg-ffxiv-ogcd/20 text-ffxiv-ogcd"
                    : "bg-ffxiv-gcd/20 text-ffxiv-gcd"
                }`}
              >
                {step.type}
              </span>

              {step.timing && (
                <span className="rounded bg-ffxiv-accent/50 px-1.5 py-0.5 text-[10px] text-ffxiv-muted">
                  {step.timing}
                </span>
              )}

              {skill.positional && (
                <span className="rounded bg-ffxiv-gold/20 px-1.5 py-0.5 text-[10px] font-medium text-ffxiv-gold">
                  {skill.positional}
                </span>
              )}
            </div>

            <p className="mt-1.5 text-sm leading-relaxed text-ffxiv-muted">
              {step.reasoning}
            </p>

            <div className="mt-2">
              <ResourceBar gauges={gauges} values={step.resources} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
