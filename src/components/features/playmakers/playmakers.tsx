import { Section } from "@/components/layout/section/section";
import { HeadingBlock } from "@/components/features/heading-block/heading-block";
import { Hero } from "@/components/layout/hero/hero";
import { Container } from "@/components/layout/container/container";

import { LANDING_PAGE_MOCK } from "@/data/mocks/landing.mock";

export function Playmakers() {
  const { playmakers: content } = LANDING_PAGE_MOCK;

  return (
    <Section
      id="playmaker"
      hasSpacing={false}
      className="playmaker grid gap-y-8"
    >
      <Container>
        <HeadingBlock
          className="mt-8"
          heading={content.headingBlock.heading}
          description={content.headingBlock.subheading}
        />
      </Container>
      <Hero media={content.image} className="hero-playmaker">
        <div className="hero-content items-center">
          <h2 className="hero-heading">{content.heading}</h2>
          <p className="hero-decription">{content.description}</p>
        </div>
      </Hero>
    </Section>
  );
}
