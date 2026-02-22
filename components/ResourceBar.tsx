import type { GaugeDefinition } from "@/data/types";

interface ResourceBarProps {
  gauges: GaugeDefinition[];
  values: Record<string, number>;
}

export default function ResourceBar({ gauges, values }: ResourceBarProps) {
  return (
    <div className="flex gap-3 text-xs">
      {gauges.map((gauge) => {
        const value = values[gauge.key] ?? 0;
        const pct = Math.min(100, (value / gauge.max) * 100);
        return (
          <div key={gauge.key} className="flex items-center gap-1.5">
            <span className={`font-medium text-ffxiv-${gauge.color}`}>
              {gauge.label}
            </span>
            <div className="h-2 w-16 overflow-hidden rounded-full bg-ffxiv-bg">
              <div
                className={`h-full rounded-full bg-ffxiv-${gauge.color} transition-all duration-300`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="w-7 text-right tabular-nums text-ffxiv-muted">
              {value}
            </span>
          </div>
        );
      })}
    </div>
  );
}
