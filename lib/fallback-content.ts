import type { PageDoc } from "@/lib/types";

export const fallbackHome: PageDoc = {
  title: "Home",
  slug: "home",
  seo: null,
  sections: [
    {
      _type: "heroBlock",
      _key: "hero",
      eyebrow: "Social health, measured.",
      headline: "Build a workforce that's socially well — measurably.",
      subhead:
        "Hansel is an iOS coach that helps people build healthy social habits, and gives organizations a longitudinal Social Health Score they can act on.",
      primaryCta: { label: "Join the waitlist", opensWaitlist: true, audienceHint: "organization" },
      secondaryCta: { label: "Read the science", href: "/the-science" },
      image: {
        alt: "Two colleagues having a warm, in-person conversation",
        asset: {
          url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
        },
      },
    },
    {
      _type: "logoCloudBlock",
      _key: "logos",
      eyebrow: "Trusted by design partners across",
      logos: [
        { alt: "Acme Health", image: { asset: {} } },
        { alt: "Northwind Benefits", image: { asset: {} } },
        { alt: "Initech People", image: { asset: {} } },
        { alt: "Globex Wellness", image: { asset: {} } },
        { alt: "Hooli HR", image: { asset: {} } },
      ],
    },
    {
      _type: "statBandBlock",
      _key: "stats",
      eyebrow: "The state of social wellbeing",
      stats: [
        { value: "61%", label: "of adults report feeling lonely at work", source: "U.S. Surgeon General, 2023" },
        { value: "$154B", label: "annual productivity loss from disconnection", source: "Cigna, 2024" },
        { value: "1 in 4", label: "employees has no close colleague", source: "Gallup, 2024" },
      ],
    },
    {
      _type: "pillarsBlock",
      _key: "pillars",
      eyebrow: "What Hansel does",
      headline: "Three ways we move the needle.",
      pillars: [
        {
          icon: "activity",
          headline: "Measure what matters",
          body: "A validated Social Health Score that tracks connection, support, and belonging — over time, not just once.",
        },
        {
          icon: "heart-handshake",
          headline: "Coach in the moment",
          body: "Short, evidence-based chat nudges that help people show up for the people in their life — at work and beyond.",
        },
        {
          icon: "line-chart",
          headline: "Prove the outcome",
          body: "Anonymized, aggregate dashboards for benefits leaders. Defensible numbers your CFO will respect.",
        },
      ],
    },
    {
      _type: "howItWorksBlock",
      _key: "how",
      eyebrow: "How it works",
      headline: "Three steps. No clinical jargon.",
      steps: [
        { number: "01", headline: "Five-minute baseline", body: "A short, science-backed assessment in chat establishes a starting Social Health Score." },
        { number: "02", headline: "Daily micro-coaching", body: "Two-minute prompts and reflections, tuned to where someone is — not a generic content library." },
        { number: "03", headline: "Quarterly score", body: "Track movement, surface what's working, and report outcomes you can stand behind." },
      ],
    },
    {
      _type: "scienceTeaserBlock",
      _key: "scienceTeaser",
      eyebrow: "Built on the evidence",
      headline: "Decades of research, one daily habit.",
      body: "The Social Health Score draws on validated instruments from public health, psychology, and organizational science. Read what we measure and why.",
      cta: { label: "Read the science", href: "/the-science" },
      image: {
        alt: "Open research notebook and pen",
        asset: {
          url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
        },
      },
    },
    {
      _type: "quoteBlock",
      _key: "quote",
      quote:
        "Our employee assistance program told us how many people called. Hansel tells us whether they feel less alone six months later. That's the difference.",
      attribution: "Head of Total Rewards",
      role: "Fortune 500 retailer (design partner)",
    },
    {
      _type: "waitlistBlock",
      _key: "waitlistB2C",
      eyebrow: "For individuals",
      headline: "Get early access.",
      body: "Be among the first to use Hansel on iOS. We'll let you know the moment we open beta.",
      audience: "individual",
    },
    {
      _type: "faqBlock",
      _key: "faq",
      eyebrow: "Common questions",
      headline: "What people ask us first.",
      items: [
        {
          q: "Is the Social Health Score clinically validated?",
          a: "The Score is built on validated sub-instruments from public health and organizational psychology. We're running ongoing validation studies of the composite with academic partners and will publish findings as they're peer-reviewed.",
        },
        {
          q: "How do you protect employee privacy?",
          a: "Individual responses are never shared with employers. Organizations only ever see anonymized, aggregated cohort data with minimum sample sizes enforced.",
        },
        {
          q: "Why iOS first?",
          a: "We're optimizing the moment-to-moment coaching experience on a single platform first. Android is on the roadmap.",
        },
        {
          q: "How long does it take to see a change?",
          a: "Most pilot users see meaningful score movement in 8–12 weeks of consistent daily check-ins.",
        },
      ],
    },
    {
      _type: "ctaBandBlock",
      _key: "cta",
      eyebrow: "Ready to talk?",
      title: "Bring measurable social wellbeing to your people.",
      description:
        "Join the organizations piloting Hansel and shape the Social Health Score from day one.",
      primaryCta: { label: "Join the waitlist", opensWaitlist: true, audienceHint: "organization" },
      secondaryCta: { label: "Email us", href: "mailto:hello@hansel.ai" },
    },
  ],
};

export const fallbackScience: PageDoc = {
  title: "The Science",
  slug: "the-science",
  seo: null,
  sections: [
    {
      _type: "heroBlock",
      _key: "h",
      eyebrow: "The Science",
      headline: "What we measure, and why it works.",
      subhead:
        "The Social Health Score is built on validated instruments from public health, organizational psychology, and behavioral science.",
      primaryCta: { label: "Join the waitlist", opensWaitlist: true, audienceHint: "organization" },
      image: {
        alt: "Open notebook and pen on a research desk",
        asset: {
          url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
        },
      },
    },
    {
      _type: "richTextBlock",
      _key: "r1",
      richBody: [
        {
          _type: "block",
          _key: "p1",
          style: "h2",
          children: [{ _type: "span", _key: "s1", text: "A composite, not a vibe." }],
        },
        {
          _type: "block",
          _key: "p2",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s2",
              text:
                "We combine signals across four domains — connection, support, belonging, and reciprocity — into a single Social Health Score. Each domain draws on instruments with established reliability in peer-reviewed literature.",
            },
          ],
        },
      ],
    },
    {
      _type: "statBandBlock",
      _key: "sb",
      eyebrow: "What changes when social health improves",
      stats: [
        { value: "↓ 27%", label: "self-reported burnout (12 weeks)", source: "Pilot cohort, 2025" },
        { value: "↑ 19%", label: "perceived belonging at work", source: "Pilot cohort, 2025" },
        { value: "↑ 2.3×", label: "likelihood to recommend employer", source: "Pilot cohort, 2025" },
      ],
    },
    {
      _type: "faqBlock",
      _key: "faq",
      eyebrow: "Frequently asked",
      headline: "Common questions.",
      items: [
        {
          q: "Is the Social Health Score clinically validated?",
          a: "The Score is built on validated sub-instruments. We're running ongoing validation studies of the composite with academic partners. We'll publish findings as they're peer-reviewed.",
        },
        {
          q: "How do you protect employee privacy?",
          a: "Individual responses are never shared with employers. Organizations only ever see anonymized, aggregated cohort data with minimum sample sizes enforced.",
        },
        {
          q: "Why iOS first?",
          a: "We're optimizing the moment-to-moment coaching experience on a single platform first. Android is on the roadmap.",
        },
      ],
    },
    {
      _type: "ctaBandBlock",
      _key: "cta",
      title: "Want the methodology in detail?",
      description: "Join the waitlist and we'll send our methods brief.",
      primaryCta: { label: "Join the waitlist", opensWaitlist: true },
    },
  ],
};
