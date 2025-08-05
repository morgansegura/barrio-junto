import { Metadata } from "next";

import { getBaseMetadata } from "@/lib/metadata";

import { Header } from "@/components/layout/header/header";
import { Page } from "@/components/layout/page/page";
import { Footer } from "@/components/layout/footer/footer";

import { Shop } from "@/components/features/shop/shop";
import { ParksAndPitches } from "@/components/features/parks-and-pitches/parks-and-pitches";
import { Playmakers } from "@/components/features/playmakers/playmakers";

import { HeroMain } from "@/components/features/hero-main/hero-main";
import { AboutSection } from "@/components/features/about-section/about-section";

export const generateMetadata = (): Metadata => {
  return getBaseMetadata({
    title: "Home Page",
    description: "This is a simple landing page.",
    path: "/",
    imagePath: "/images/default-og.jpg",
  });
};

export default function Home() {
  return (
    <Page>
      <Header />

      <main className="page-main">
        <HeroMain />

        <AboutSection />

        <ParksAndPitches />

        <Playmakers />

        <Shop />
      </main>

      <Footer />
    </Page>
  );
}
