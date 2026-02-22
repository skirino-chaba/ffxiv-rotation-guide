"use client";

import { useState } from "react";

interface SkillIconProps {
  iconId: string;
  name: string;
  size?: number;
}

export default function SkillIcon({ iconId, name, size = 40 }: SkillIconProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [imgError, setImgError] = useState(false);

  const folder = iconId.slice(0, 3) + "000";
  const src = `https://xivapi.com/i/${folder}/${iconId}_hr1.png`;

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {imgError ? (
        <div
          className="flex items-center justify-center rounded bg-ffxiv-accent text-xs text-ffxiv-muted"
          style={{ width: size, height: size }}
        >
          {name.slice(0, 2)}
        </div>
      ) : (
        <img
          src={src}
          alt={name}
          width={size}
          height={size}
          className="rounded border border-ffxiv-accent/50"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      )}
      {showTooltip && (
        <div className="absolute -top-10 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded bg-black/90 px-3 py-1.5 text-xs font-medium text-white shadow-lg">
          {name}
          <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-black/90" />
        </div>
      )}
    </div>
  );
}
