"use client";

import Link from "next/link";

import { cn } from "@/lib/utils/cn";

import { Container } from "@/components/layout/container/container";
import { Logo } from "@/components/layout/logo/logo";

import { navigationList } from "@/lib/utils/navigation-list";

import { NAVIGATION_MOCK } from "@/data/mocks/navigation.mock";

import "./header.css";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

type THeaderProps = {
  className?: string;
};

export function Header({ className }: THeaderProps) {
  useSmoothScroll(50);
  const navigation = NAVIGATION_MOCK;

  return (
    <header className={cn("header", className)}>
      <Container className="header-container">
        <Link href="/" ariar-title="Link to home page" className="header-logo">
          <Logo />
          <p className="logo-text">Barrio Junto</p>
        </Link>
        <nav className="header-nav">{navigationList(navigation)}</nav>
      </Container>
    </header>
  );
}
