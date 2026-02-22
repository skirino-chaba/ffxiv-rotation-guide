import type { Skill, RotationPhase } from "@/data/types";
import PhaseHeader from "./PhaseHeader";
import SkillStep from "./SkillStep";

interface RotationTimelineProps {
  phases: RotationPhase[];
  skills: Record<string, Skill>;
}

export default function RotationTimeline({
  phases,
  skills,
}: RotationTimelineProps) {
  return (
    <div className="space-y-2">
      {phases.map((phase) => (
        <div key={phase.phase}>
          <PhaseHeader
            id={phase.phase}
            label={phase.label}
            description={phase.description}
          />
          <div className="mt-4">
            {phase.steps.map((step) => {
              const skill = skills[step.skill];
              if (!skill) return null;
              return (
                <SkillStep key={step.position} step={step} skill={skill} />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
