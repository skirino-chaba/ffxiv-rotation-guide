export interface SkillResource {
  generates?: Record<string, number>;
  costs?: Record<string, number>;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  type: "gcd" | "ogcd";
  recast: number;
  category: string;
  description: string;
  resource?: SkillResource;
  positional?: "flank" | "rear";
}

export interface RotationStep {
  position: number;
  skill: string;
  type: "gcd" | "ogcd";
  timing?: string;
  reasoning: string;
  resources: {
    soul: number;
    shroud: number;
  };
}

export interface RotationPhase {
  phase: string;
  label: string;
  description: string;
  steps: RotationStep[];
}
