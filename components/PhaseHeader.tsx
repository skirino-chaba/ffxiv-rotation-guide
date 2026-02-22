interface PhaseHeaderProps {
  id: string;
  label: string;
  description: string;
}

export default function PhaseHeader({
  id,
  label,
  description,
}: PhaseHeaderProps) {
  return (
    <div id={id} className="scroll-mt-20 pb-2 pt-8 first:pt-0">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-ffxiv-highlight to-transparent" />
        <h2 className="shrink-0 text-lg font-bold uppercase tracking-wider text-ffxiv-highlight">
          {label}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-ffxiv-highlight to-transparent" />
      </div>
      <p className="mt-2 text-center text-sm text-ffxiv-muted">{description}</p>
    </div>
  );
}
