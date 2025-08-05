import { cn } from "@/lib/utils/cn";

import Image from "next/image";
import { Container } from "@/components/layout/container/container";

import "./hero.css";
import { ReactNode } from "react";

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
    <div className={cn("hero", className)} id={id}>
      <Image
        className="hero-image"
        src={media.src}
        alt={media.alt}
        priority={priority}
        width={1800}
        height={1800}
      />

      <Container className="hero-container">{children}</Container>
    </div>
  );
}
