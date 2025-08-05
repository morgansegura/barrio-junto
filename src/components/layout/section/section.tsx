import { CSSProperties, JSX, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

import "./section.css";

type TSectionProps = {
  as?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  className?: string;
  hasSpacing?: boolean;
  id?: string;
  style?: CSSProperties;
};

export function Section({
  as = "section",
  children,
  className,
  hasSpacing = true,
  id,
  style,
}: TSectionProps) {
  const Component = as;

  return (
    <Component
      id={id}
      style={style}
      className={cn("section", className)}
      data-section-spacing={hasSpacing}
    >
      {children}
    </Component>
  );
}
