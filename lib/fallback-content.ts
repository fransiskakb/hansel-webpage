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
        alt: "Three colleagues laughing together in a sunlit office",
        asset: {
          url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
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
      _type: "quoteBlock",
      _key: "quote",
      quote:
        "Being socially disconnected is similar to smoking up to 15 cigarettes a day.",
      attribution: "Dr. Vivek H. Murthy",
      role: "U.S. Surgeon General · 2023",
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
        "We are wired for connection. Decades of research show that relationships are the most overlooked driver of human wellbeing, and the costliest blind spot at work.",
      primaryCta: { label: "Join the waitlist", opensWaitlist: true, audienceHint: "organization" },
    },
    {
      _type: "richTextBlock",
      _key: "r1",
      richBody: [
        {
          _type: "block",
          _key: "h1a",
          style: "h2",
          children: [{ _type: "span", _key: "s1", text: "Humans are wired for connection" }],
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
                "Humans are fundamentally social beings. Thousands of years of evolution wired us for connection. Yet social health, the quality and strength of our relationships, remains the most overlooked driver of human wellbeing.",
            },
          ],
        },
        {
          _type: "block",
          _key: "p2",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s3",
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
      eyebrow: "The scale of the problem",
      stats: [
        {
          value: "15 cigarettes",
          label: "the daily mortality impact of being socially disconnected",
          source: "U.S. Surgeon General, 2023",
        },
        {
          value: "1 in 5",
          label: "employees feel lonely a lot of the day",
          source: "Gallup, 2024",
        },
        {
          value: "Global threat",
          label: "WHO declared loneliness a pressing global health concern",
          source: "World Health Organization, 2023",
        },
      ],
    },
    {
      _type: "richTextBlock",
      _key: "r2",
      richBody: [
        {
          _type: "block",
          _key: "h2a",
          style: "h2",
          children: [{ _type: "span", _key: "s4", text: "The cost of disconnection at work" }],
        },
        {
          _type: "block",
          _key: "p3",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s5",
              text:
                "The cost of disconnection at work is staggering, and largely hidden. On the financial side, workplace disconnection costs U.S. companies $154 billion a year in lost productivity. Healthcare costs attributable to social isolation run between $125 and $190 billion annually.",
            },
          ],
        },
        {
          _type: "block",
          _key: "p4",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s6",
              text:
                "On the human side, 22% of innovation has been lost due to hybrid work models, according to McKinsey. Gallup found that 1 in 5 employees report feeling lonely a lot of the day.",
            },
          ],
        },
        {
          _type: "block",
          _key: "p5",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s7",
              text:
                "A recent Harvard Business Review article warned that AI is quietly making this worse. By shifting problem-solving away from teams and into private, opaque tools, AI is blurring accountability and weakening the human connections that drive performance.",
            },
          ],
        },
        {
          _type: "block",
          _key: "p6",
          style: "h3",
          children: [
            {
              _type: "span",
              _key: "s8",
              text:
                "This is not only a wellness problem. This is a business performance problem.",
            },
          ],
        },
      ],
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
      _key: "r3",
      richBody: [
        {
          _type: "block",
          _key: "h3a",
          style: "h2",
          children: [{ _type: "span", _key: "s9", text: "Sources" }],
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
                "U.S. Surgeon General. Our Epidemic of Loneliness and Isolation: The Healing Effects of Social Connection and Community, 2023.",
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
                "World Health Organization. WHO Commission on Social Connection, 2023.",
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
                "Waldinger, R. and Schulz, M. The Good Life: Lessons from the World's Longest Scientific Study of Happiness. Harvard Study of Adult Development, 2023.",
            },
          ],
        },
        {
          _type: "block",
          _key: "src4",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s13",
              text: "Cigna. Loneliness in America Report, 2024.",
            },
          ],
        },
        {
          _type: "block",
          _key: "src5",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s14",
              text: "Gallup. State of the Global Workplace Report, 2024.",
            },
          ],
        },
        {
          _type: "block",
          _key: "src6",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s15",
              text:
                "McKinsey & Company. The State of Hybrid Work: Innovation and Collaboration in a Distributed Workforce, 2024.",
            },
          ],
        },
        {
          _type: "block",
          _key: "src7",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s16",
              text:
                "Harvard Business Review. How AI Is Reshaping Workplace Collaboration, 2024.",
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
