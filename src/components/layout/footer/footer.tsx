import { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";
import { navigationList } from "@/lib/utils/navigation-list";

import { Container } from "@/components/layout/container/container";
import { Logo } from "@/components/layout/logo/logo";

import { NAVIGATION_MOCK } from "@/data/mocks/navigation.mock";

import "./footer.css";

type TFooterProps = {
  children?: ReactNode;
  className?: string;
};

export function Footer({ className }: TFooterProps) {
  const navigation = NAVIGATION_MOCK;

  return (
    <footer className={cn("footer", className)}>
      <Container className="footer-container">
        <div className="footer-logo">
          <Logo variant="text" onDark />
        </div>
        <nav className="footer-nav">{navigationList(navigation)}</nav>
      </Container>
      <div className="copyright">
        <Container>
          Copyright Barrio Junto, {new Date().getFullYear()}.{" "}
        </Container>
      </div>
    </footer>
  );
}
