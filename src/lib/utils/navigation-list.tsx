import Link from "next/link";

import { TMenuItem } from "@/types/menu.types";

export function navigationList(navigation: TMenuItem[]) {
  return navigation?.map(({ href, label, title }) => (
    <Link
      key={label}
      href={href as string}
      className="nav-item"
      aria-label={title}
    >
      {label}
    </Link>
  ));
}
