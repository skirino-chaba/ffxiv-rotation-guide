interface ResourceBarProps {
  soul: number;
  shroud: number;
}

export default function ResourceBar({ soul, shroud }: ResourceBarProps) {
  return (
    <div className="flex gap-3 text-xs">
      <div className="flex items-center gap-1.5">
        <span className="font-medium text-ffxiv-soul">Soul</span>
        <div className="h-2 w-16 overflow-hidden rounded-full bg-ffxiv-bg">
          <div
            className="h-full rounded-full bg-ffxiv-soul transition-all duration-300"
            style={{ width: `${soul}%` }}
          />
        </div>
        <span className="w-7 text-right tabular-nums text-ffxiv-muted">
          {soul}
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="font-medium text-ffxiv-shroud">Shroud</span>
        <div className="h-2 w-16 overflow-hidden rounded-full bg-ffxiv-bg">
          <div
            className="h-full rounded-full bg-ffxiv-shroud transition-all duration-300"
            style={{ width: `${shroud}%` }}
          />
        </div>
        <span className="w-7 text-right tabular-nums text-ffxiv-muted">
          {shroud}
        </span>
      </div>
    </div>
  );
}
