import { ReactNode } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils/cn";

import { Container } from "@/components/layout/container/container";
import { Section } from "@/components/layout/section/section";

import "./hero-split.css";

type THeroSplitProps = {
  children: ReactNode;
  className?: string;
  id: string;
  imageOrientation?: "left" | "right";
  media: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    loading?: "eager" | "lazy";
  };
};

export function HeroSplit({
  className,
  children,
  id,
  imageOrientation = "left",
  media,
}: THeroSplitProps) {
  return (
    <Section
      id={id}
      className={cn("hero-split", className)}
      data-hero-plit-orientation={imageOrientation}
    >
      <Container className="hero-split-container">
        <div className="hero-split-image">
          <Image
            src={media.src}
            alt={media.alt}
            width={media.width ?? 600}
            height={media.height ?? 600}
            loading={media.loading}
          />
        </div>
        <div className="hero-split-content">{children}</div>
      </Container>
    </Section>
  );
}
