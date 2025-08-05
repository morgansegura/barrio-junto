import { cn } from "@/lib/utils/cn";

import Image from "next/image";
import { Container } from "@/components/layout/container/container";

import "./hero.css";
import { ReactNode } from "react";
import { Section } from "@/components/layout/section/section";

type THeroProps = {
  className?: string;
  children?: ReactNode;
  id?: string;
  media: { src: string; alt: string };
  priority?: boolean;
};

export function Hero({
  className,
  children,
  id,
  media,
  priority = false,
}: THeroProps) {
  return (
    <Section className={cn("hero", className)} id={id} hasSpacing={false}>
      <Image
        className="hero-image"
        src={media.src}
        alt={media.alt}
        priority={priority}
        width={2500}
        height={1402}
      />

      <Container className="hero-container">{children}</Container>
    </Section>
  );
}
