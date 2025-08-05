import { cn } from "@/lib/utils/cn";
import Link from "next/link";

type TNavItem = {
  __id: string;
  label: string;
  href?: string;
  title?: string;
  onClick?: () => void;
};

type TNavigation = {
  className?: string;
  items: TNavItem[];
};

export function Navigation({ className, items = [] }: TNavigation) {
  return (
    <nav className={cn("navigation", className)}>
      <ul>
        {items?.map((item: TNavItem) => (
          <li key={item.__id}>
            {item?.href ? (
              <Link href={item.href} aria-label={item.title}>
                {item.label}
              </Link>
            ) : (
              <button onClick={item.onClick} aria-label={item.title}>
                {item?.label}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
