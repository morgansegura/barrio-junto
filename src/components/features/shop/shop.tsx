import Image from "next/image";

import { When } from "@/components/helpers/when";
import { Section } from "@/components/layout/section/section";
import { HeadingBlock } from "../heading-block/heading-block";
import { Container } from "@/components/layout/container/container";

import { LANDING_PAGE_MOCK } from "@/data/mocks/landing.mock";

import "./shop.css";

import type { TShopItem } from "@/types/shop.types";

export function Shop() {
  const { shop } = LANDING_PAGE_MOCK;

  return (
    <>
      <Section className="shop" id="shop">
        <Container>
          <HeadingBlock
            className="mb-12"
            heading={shop.headingBlock.heading}
            description={shop.headingBlock.subheading}
          />

          <div className="shop-grid">
            {shop?.shopItems?.map((item: TShopItem) => (
              <div className="card shop-item" key={item.id}>
                <Image
                  src={item.media.src || ""}
                  alt={item.media.alt || ""}
                  width={item.media.width || 800}
                  height={item.media.height || 800}
                />
                <header className="card-header">
                  <When condition={!!item?.detail?.brand}>
                    <div className="brand">{item?.detail?.brand}</div>
                  </When>
                  <When
                    condition={!!item?.detail?.style || !!item?.detail?.color}
                  >
                    <div className="colors">
                      {item?.detail?.style}, {item?.detail?.color}
                    </div>
                  </When>
                </header>

                <div className="card-content">
                  <When condition={!!item.description}>
                    <p className="card-description">{item.description}</p>
                  </When>

                  <button className="card-button" disabled={!item.inStock}>
                    {!item.inStock ? "Sold Out" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <div className="separator border-b border-black/50" />
    </>
  );
}
