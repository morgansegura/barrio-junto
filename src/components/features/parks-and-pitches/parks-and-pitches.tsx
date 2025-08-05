import Image from "next/image";
import { HeadingBlock } from "@/components/features/heading-block/heading-block";

import "./parks-and-pitches.css";
import { Container } from "@/components/layout/container/container";
import { Section } from "@/components/layout/section/section";

import { LANDING_PAGE_MOCK } from "@/data/mocks/landing.mock";

export function ParksAndPitches() {
  const { parksAndPitches: content } = LANDING_PAGE_MOCK;

  const imageSize = {
    width: 900,
    height: 600,
  };

  function imageGridList() {
    return content?.mediaGrid?.map(({ description, heading, image, id }) => (
      <div className="image-block" key={id}>
        <div className="image">
          <Image
            src={image.src}
            alt={image.alt}
            width={imageSize.width}
            height={imageSize.height}
            loading="lazy"
          />
        </div>
        <div className="image-details">
          <h3>{heading}</h3>
          <p>{description}</p>
        </div>
      </div>
    ));
  }

  return (
    <Section className="parks-and-pitches" id="parks-and-pitches">
      <Container>
        <HeadingBlock
          heading={{
            as: content.headingBlock.heading.as,
            children: content.headingBlock.heading.children,
          }}
          description={content.headingBlock.subheading}
        />

        <div className="grid">{imageGridList()}</div>
      </Container>
    </Section>
  );
}
