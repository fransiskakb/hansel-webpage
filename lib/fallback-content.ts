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
      headline: "The Future of Work Starts With Social Health.",
      subhead:
        "Hansel is an iOS tool that helps individuals build healthy social habits, and helps organizations build healthier, more connected workforces.",
      primaryCta: { label: "Join the waitlist", opensWaitlist: true, audienceHint: "organization" },
      secondaryCta: { label: "Read the science", href: "/the-science" },
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
      headline: "A daily tool for healthier relationships.",
      withPhone: true,
      pillars: [
        {
          icon: "activity",
          headline: "Measure what matters",
          body: "A validated Social Health Score that tracks connection, support, and belonging of users over time to measure their social wellness.",
        },
        {
          icon: "bell",
          headline: "Nudge healthy habits",
          body: "Short, science-backed nudges that help people build the daily habits of strong relationships.",
        },
        {
          icon: "users-round",
          headline: "Remember the people who matter",
          body: "A private map of your relationships. Last conversations, shared interests, who needs a check-in. So you can be present without the mental load.",
        },
      ],
    },
    {
      _type: "scienceTeaserBlock",
      _key: "scienceTeaser",
      eyebrow: "Built on the evidence",
      headline: "Decades of research, one daily habit.",
      body: "The Social Health Score draws on validated instruments from public health, psychology, and organizational science. Read what we measure and why.",
      cta: { label: "Read the science", href: "/the-science" },
    },
    {
      _type: "quoteBlock",
      _key: "quote",
      quote:
        "The mortality impact of being socially disconnected is similar to that caused by smoking up to 15 cigarettes a day, and even greater than that associated with obesity and physical inactivity.",
      attribution: "Dr. Vivek H. Murthy",
      role: "U.S. Surgeon General · Our Epidemic of Loneliness and Isolation, 2023",
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
          a: "We're optimizing the moment-to-moment experience on a single platform first. Android is on the roadmap.",
        },
        {
          q: "How long does it take to see a change?",
          a: "Most pilot users see meaningful score movement in 8–12 weeks of consistent daily check-ins.",
        },
      ],
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
                "We combine signals across four domains (connection, support, belonging, and reciprocity) into a single Social Health Score. Each domain draws on instruments with established reliability in peer-reviewed literature.",
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
          a: "We're optimizing the moment-to-moment experience on a single platform first. Android is on the roadmap.",
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
