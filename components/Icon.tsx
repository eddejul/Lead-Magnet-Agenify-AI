"use client";

import { icons, type LucideProps } from "lucide-react";
import type { CSSProperties } from "react";

function toPascal(name: string): string {
  return name
    .split("-")
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

type IconProps = {
  name: string;
  size?: number;
  color?: string;
  style?: CSSProperties;
};

export function Icon({ name, size = 20, color = "currentColor", style }: IconProps) {
  const Comp = (icons as unknown as Record<string, React.ComponentType<LucideProps>>)[
    toPascal(name)
  ];
  if (!Comp) return null;
  return (
    <span
      style={{
        display: "inline-flex",
        width: size,
        height: size,
        color,
        ...style,
      }}
    >
      <Comp size={size} color={color} strokeWidth={1.75} />
    </span>
  );
}
