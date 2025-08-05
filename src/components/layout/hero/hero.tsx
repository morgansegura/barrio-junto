import { cn } from "@/lib/utils/cn";

import Image from "next/image";
import { Container } from "@/components/layout/container/container";

import "./hero.css";
import { ReactNode } from "react";

type THeroProps = {
  className?: string;
  children?: ReactNode;
  id?: string;
  loading?: "eager" | "lazy";
  media: { src: string; alt: string };
  priority?: boolean;
};

export function Hero({
  className,
  children,
  id,
  loading = undefined,
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
        loading={loading}
      />

      <Container className="hero-container">{children}</Container>
    </div>
  );
}
