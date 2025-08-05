import { HeroSplit } from "@/components/layout/hero-split/hero-split";
import { Logo } from "@/components/layout/logo/logo";
import { Heading } from "@/components/ui/heading/heading";

import { LANDING_PAGE_MOCK } from "@/data/mocks/landing.mock";

import "./about-section.css";

export function AboutSection() {
  const { aboutSection } = LANDING_PAGE_MOCK;

  return (
    <HeroSplit
      className="about-section"
      id="about-section"
      media={{
        src: aboutSection.image.src,
        alt: aboutSection.image.alt,
      }}
    >
      <Logo className="logo" />
      <Heading as="h2" className="heading">
        {aboutSection.headingBlock.heading}
      </Heading>
      <div className="description">{aboutSection.headingBlock.subheading}</div>
    </HeroSplit>
  );
}
