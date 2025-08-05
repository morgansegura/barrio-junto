import { JSX, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

export type THeadingProps = {
  as?: JSX.ElementType;
  className?: string;
  children?: ReactNode;
};

export function Heading({ as = "h1", children, className }: THeadingProps) {
  const Element = as;
  return <Element className={cn("heading", className)}>{children}</Element>;
}
