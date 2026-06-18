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
      headline: "The Future of Work Starts With Social Health",
      subhead:
        "Hansel.ai is an iOS tool that helps individuals build healthy social habits, and helps organizations build healthier, more connected workforces.",
      primaryCta: { label: "Join the waitlist", opensWaitlist: true, audienceHint: "organization" },
      secondaryCta: { label: "Read the science", href: "/the-science" },
      image: {
        alt: "Two people in conversation, leaning in, present with each other",
        asset: {
          url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
        },
      },
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
      eyebrow: "What Hansel.ai does",
      headline: "A daily tool for healthier relationships",
      withPhone: true,
      pillars: [
        {
          icon: "activity",
          headline: "Quantify your social wellbeing",
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
      _type: "waitlistBlock",
      _key: "waitlistB2C",
      eyebrow: "For individuals",
      headline: "Get early access",
      body: "Be among the first to use Hansel.ai on iOS. We'll let you know the moment we open beta.",
      audience: "individual",
    },
    {
      _type: "faqBlock",
      _key: "faq",
      eyebrow: "Common questions",
      headline: "What people ask us first",
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
      headline: "Why social connection matters",
      subhead:
        "Humans are wired for connection. Decades of research show that the strength of our relationships shapes how long and how well we live.",
    },
    {
      _type: "quoteBlock",
      _key: "quote",
      quote:
        "Being socially disconnected is similar to smoking up to 15 cigarettes a day.",
      attribution: "Dr. Vivek H. Murthy",
      role: "U.S. Surgeon General · 2023",
    },
    {
      _type: "richTextBlock",
      _key: "r1",
      richBody: [
        {
          _type: "block",
          _key: "h1a",
          style: "h2",
          children: [
            { _type: "span", _key: "s1", text: "Wired for connection" },
          ],
        },
        {
          _type: "block",
          _key: "p1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s2",
              text:
                "The Harvard Study of Adult Development, the longest longitudinal study of human life ever conducted, found that close, supportive relationships are the #1 predictor of long-term health and happiness. More than IQ, more than money, more than genetics. It is our relationships that determine how long and how well we live.",
            },
          ],
        },
      ],
    },
    {
      _type: "statBandBlock",
      _key: "sb",
      eyebrow: "What the research shows",
      stats: [
        {
          value: "~30%",
          label:
            "higher mortality risk linked to chronic disconnection and isolation, comparable to smoking",
          source:
            "Holt-Lunstad et al. · PLOS Medicine, 2010 · 308,849 participants",
        },
        {
          value: "~30%",
          label:
            "higher cardiovascular risk among chronically isolated individuals",
          source: "Valtorta et al. · Heart (AHA), 2016",
        },
        {
          value: "5.7 days",
          label: "additional work missed per year by lonely employees",
          source: "NIOSH/CDC, 2023",
        },
      ],
    },
    {
      _type: "richTextBlock",
      _key: "r2",
      richBody: [
        {
          _type: "block",
          _key: "p3",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s5",
              text:
                "Disconnection isn't only a personal health problem. It is a business performance problem too. Lonely workers miss more days, leave more often, and innovate less.",
            },
          ],
        },
      ],
    },
    {
      _type: "richTextBlock",
      _key: "r3",
      richBody: [
        {
          _type: "block",
          _key: "h3a",
          style: "h3",
          children: [{ _type: "span", _key: "s9", text: "Sources" }],
        },
        {
          _type: "block",
          _key: "src0",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s17",
              text:
                "Holt-Lunstad, J., Smith, T. B., and Layton, J. B. Social Relationships and Mortality Risk: A Meta-analytic Review. PLOS Medicine, 7(7), 2010.",
            },
          ],
        },
        {
          _type: "block",
          _key: "src0b",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s18",
              text:
                "Valtorta, N. K., Kanaan, M., Gilbody, S., Ronzi, S., and Hanratty, B. Loneliness and Social Isolation as Risk Factors for Coronary Heart Disease and Stroke. Heart, 102(13), 2016 (American Heart Association).",
            },
          ],
        },
        {
          _type: "block",
          _key: "src0c",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s19",
              text:
                "Waldinger, R. and Schulz, M. The Good Life: Lessons from the World's Longest Scientific Study of Happiness. Harvard Study of Adult Development, 2023.",
            },
          ],
        },
        {
          _type: "block",
          _key: "src1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s10",
              text:
                "U.S. Surgeon General. Our Epidemic of Loneliness and Isolation, 2023.",
            },
          ],
        },
        {
          _type: "block",
          _key: "src2",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s11",
              text:
                "National Institute for Occupational Safety and Health (NIOSH/CDC). Social Connection and Worker Well-being, November 2023. cdc.gov/niosh/bulletin/2023/social-connection-and-work.html",
            },
          ],
        },
        {
          _type: "block",
          _key: "src3",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s12",
              text:
                "World Health Organization. WHO Commission on Social Connection, 2023.",
            },
          ],
        },
      ],
    },
    {
      _type: "ctaBandBlock",
      _key: "cta",
      title: "Build a socially healthy workforce",
      description:
        "Hansel.ai is the first iOS platform built to measure and improve social health.",
      primaryCta: { label: "Join the waitlist", opensWaitlist: true },
    },
  ],
};
