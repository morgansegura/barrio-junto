import { Hero } from "@/components/layout/hero/hero";

import { LANDING_PAGE_MOCK } from "@/data/mocks/landing.mock";

export function HeroMain() {
  const { heroMain: content } = LANDING_PAGE_MOCK;

  return (
    <Hero
      id="hero-main"
      className="hero-main"
      media={{
        src: content.image.src,
        alt: content.image.alt,
      }}
      priority={content.image.priority}
    >
      <div className="hero-content">
        <h1 className="hero-heading">{content.headingBlock.heading}</h1>
        <h2 className="hero-decription">{content.headingBlock.subheading}</h2>
      </div>
    </Hero>
  );
}
