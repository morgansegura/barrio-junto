import { ReactNode } from "react";

export type TMenuItem = {
  href?: string;
  label: string;
  onClick?: () => void;
  title?: string;
  icon?: ReactNode;
};
