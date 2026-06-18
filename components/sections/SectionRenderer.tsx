import * as React from "react";
import { Hero } from "./Hero";
import { StatBand } from "./StatBand";
import { Pillars } from "./Pillars";
import { HowItWorks } from "./HowItWorks";
import { Quote } from "./Quote";
import { LogoCloud } from "./LogoCloud";
import { ScienceTeaser } from "./ScienceTeaser";
import { Waitlist } from "./Waitlist";
import { BlogTeaser } from "./BlogTeaser";
import { TeamTeaser } from "./TeamTeaser";
import { RichText } from "./RichText";
import { Faq } from "./Faq";
import { CtaBand } from "./CtaBand";
import type { Section } from "@/lib/types";

export async function SectionRenderer({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((s) => {
        switch (s._type) {
          case "heroBlock":
            return <Hero key={s._key} block={s} />;
          case "statBandBlock":
            return <StatBand key={s._key} block={s} />;
          case "pillarsBlock":
            return <Pillars key={s._key} block={s} />;
          case "howItWorksBlock":
            return <HowItWorks key={s._key} block={s} />;
          case "quoteBlock":
            return <Quote key={s._key} block={s} />;
          case "logoCloudBlock":
            return <LogoCloud key={s._key} block={s} />;
          case "scienceTeaserBlock":
            return <ScienceTeaser key={s._key} block={s} />;
          case "waitlistBlock":
            return <Waitlist key={s._key} block={s} />;
          case "blogTeaserBlock":
            // BlogTeaser is async (fetches latest posts)
            return <BlogTeaserAsync key={s._key} block={s} />;
          case "teamTeaserBlock":
            return <TeamTeaser key={s._key} block={s} />;
          case "richTextBlock":
            return <RichText key={s._key} block={s} />;
          case "faqBlock":
            return <Faq key={s._key} block={s} />;
          case "ctaBandBlock":
            return <CtaBand key={s._key} block={s} />;
          default:
            return null;
        }
      })}
    </>
  );
}

async function BlogTeaserAsync({ block }: { block: Extract<Section, { _type: "blogTeaserBlock" }> }) {
  // delegate; BlogTeaser is itself async
  return <BlogTeaser block={block} />;
}
