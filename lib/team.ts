// Local team data. No CMS dependency.
// Edit this file directly to add/remove people.

export type TeamPerson = {
  name: string;
  /** Role / what they do. Use periods or "and", not em-dashes. */
  role: string;
  /** Optional list of past or current affiliations. Rendered as a small line of pills. */
  affiliations?: string[];
  /** Path under /public — e.g. "/team/sudha-foote.jpg" */
  photo?: string;
};

export const team: TeamPerson[] = [
  {
    name: "Sudha Foote",
    role: "Mathematician and former corporate strategist with expertise in building enterprise products.",
    affiliations: ["Stanford", "Amgen", "Amazon", "Dropbox"],
    photo: "/team/sudha-foote.jpg",
  },
  {
    name: "Teddy Huang",
    role: "Two-time Olympian and Stanford Organizational Behavior PhD. Mental performance and sports psychologist.",
    affiliations: ["Stanford", "Olympics", "Webcor"],
    photo: "/team/teddy-huang.png",
  },
  {
    name: "Greg McCullough",
    role: "Product and engineering leader with deep expertise in agentic coding.",
    affiliations: ["eBay", "3Com", "Tap"],
    photo: "/team/greg-mccullough.png",
  },
  {
    name: "Steven Michael Crane",
    role: "Stanford researcher. Head of the Social Engagement Pillar at Stanford Lifestyle Medicine.",
    affiliations: [
      "Stanford",
      "Social Connection in America",
      "Stanford Lifestyle Medicine",
    ],
    photo: "/team/steven-michael-crane.png",
  },
];

export const advisors: TeamPerson[] = [
  {
    name: "Natasha Chand",
    role: "Board Director at Patagonia and Hanes. Formerly Amazon, Levi's, Target, and McKinsey. Stanford MBA.",
    photo: "/team/natasha-chand.png",
  },
  {
    name: "Sean Foote",
    role: "UC Berkeley Professor. Venture capitalist and former startup founder. Google alum.",
    photo: "/team/sean-foote.png",
  },
  {
    name: "Keshia Theobald-van Gent",
    role: "VC Partner at BDev Ventures. Former startup founder.",
    photo: "/team/keshia-theobald-van-gent.png",
  },
  {
    name: "Karl Matzke",
    role: "Business Coach for Stanford Seed and the American Red Cross.",
    photo: "/team/karl-matzke.png",
  },
  {
    name: "Dani Hrera",
    role: "Engineering leader at Snap. Formerly Amazon.",
    photo: "/team/dani-hrera.png",
  },
];
