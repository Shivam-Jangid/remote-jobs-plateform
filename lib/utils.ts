import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const platformsHomePage = [
  {
    name: "Toptal",
    jobs: "400k",
    upvotes: 200,
    downvotes: 5,
    comments: 43,
    href: "https://www.toptal.com/",
    description:
      "Elite freelance marketplace for top developers, designers, and finance experts.",
  },
  {
    name: "Upwork",
    jobs: "5M",
    upvotes: 540,
    downvotes: 24,
    comments: 120,
    href: "https://www.upwork.com/",
    description:
      "Popular freelancing platform for developers, writers, designers, and remote professionals.",
  },
  {
    name: "Fiverr",
    jobs: "4M",
    upvotes: 420,
    downvotes: 35,
    comments: 96,
    href: "https://www.fiverr.com/",
    description:
      "Gig-based freelance marketplace offering services across tech, design, and marketing.",
  },
  {
    name: "Freelancer",
    jobs: "2M",
    upvotes: 310,
    downvotes: 19,
    comments: 58,
    href: "https://www.freelancer.com/",
    description:
      "Freelancing website connecting businesses with developers and remote workers worldwide.",
  },
  {
    name: "PeoplePerHour",
    jobs: "800k",
    upvotes: 180,
    downvotes: 9,
    comments: 27,
    href: "https://www.peopleperhour.com/",
    description:
      "UK-based freelance platform focused on hourly and project-based remote work.",
  },
  {
    name: "Guru",
    jobs: "600k",
    upvotes: 150,
    downvotes: 12,
    comments: 31,
    href: "https://www.guru.com/",
    description:
      "Flexible freelance marketplace for developers, engineers, writers, and consultants.",
  },
  {
    name: "Contra",
    jobs: "350k",
    upvotes: 260,
    downvotes: 4,
    comments: 40,
    href: "https://contra.com/",
    description:
      "Commission-free freelancing platform built for independent creators and developers.",
  },
  {
    name: "Wellfound",
    jobs: "900k",
    upvotes: 370,
    downvotes: 11,
    comments: 74,
    href: "https://wellfound.com/",
    description:
      "Startup-focused job platform previously known as AngelList Talent.",
  },
  {
    name: "FlexJobs",
    jobs: "700k",
    upvotes: 240,
    downvotes: 8,
    comments: 50,
    href: "https://www.flexjobs.com/",
    description:
      "Curated remote and flexible job listings for professionals worldwide.",
  },
  {
    name: "LinkedIn",
    jobs: "20M",
    upvotes: 800,
    downvotes: 52,
    comments: 210,
    href: "https://www.linkedin.com/jobs/",
    description:
      "Professional networking platform with millions of global job opportunities.",
  },
];


export const testimonials = [
  {
    name: "Aarav Sharma",
    description: "Frontend Engineer at Google",
    testimonial:
      "Shivam consistently delivers polished and scalable interfaces with exceptional attention to detail.",
  },
  {
    name: "Priya Mehta",
    description: "Product Designer at Adobe",
    testimonial:
      "Working with Shivam was seamless. His implementation quality and responsiveness stood out immediately.",
  },
  {
    name: "Rohan Verma",
    description: "Founder at DevLabs",
    testimonial:
      "He combines strong engineering fundamentals with great product intuition.",
    avatarUrl: "/avatars/rohan.jpg",
  },
  {
    name: "Sneha Kapoor",
    description: "Software Engineer at Microsoft",
    testimonial:
      "The performance optimizations and UI refinements Shivam added significantly improved our platform.",
  },
  {
    name: "Kunal Jain",
    description: "CTO at StartSphere",
    testimonial:
      "Reliable, technically sharp, and extremely easy to collaborate with across fast-moving projects.",
    avatarUrl: "/avatars/kunal.jpg",
  },
];


export const platformLinks = [
  {
    href: "/platforms",
    title: "Browse Platforms",
  },
  {
    href: "/community",
    title: "Community Reviews",
  },
  {
    href: "/submitplatform",
    title: "Submit Platform",
  },
  {
    href: "/latest",
    title: "Latest Additions",
  },
];

export const resourcesLink = [
  {
    href: "/blog",
    title: "Blog",
  },
  {
    href: "/guides",
    title: "Freelancing Guides",
  },
  {
    href: "/faq",
    title: "FAQs",
  },
  {
    href: "/support",
    title: "Support",
  },
];

export const companyLinks = [
  {
    href: "/about",
    title: "About Us",
  },
  {
    href: "/about",
    title: "Contact",
  },
  {
    href: "/careers",
    title: "Carrers",
  },
  {
    href: "/privacypolicy",
    title: "Privacy Policy",
  },
];


export const allPlatforms = [
  ...platformsHomePage.map((p) => ({ ...p, category: "Freelance", tags: ["remote", "freelance"] })),
  {
    name: "Turing",
    jobs: "1.2M",
    upvotes: 460,
    downvotes: 18,
    comments: 87,
    href: "https://www.turing.com/",
    description: "AI-powered talent platform matching top remote engineers with Silicon Valley companies.",
    category: "Agency",
    tags: ["engineering", "AI"],
  },
  {
    name: "Remote.co",
    jobs: "500k",
    upvotes: 190,
    downvotes: 7,
    comments: 34,
    href: "https://remote.co/",
    description: "Hand-screened remote job listings from remote-friendly companies worldwide.",
    category: "Remote Jobs",
    tags: ["remote-first", "curated"],
  },
  {
    name: "We Work Remotely",
    jobs: "3M",
    upvotes: 670,
    downvotes: 22,
    comments: 145,
    href: "https://weworkremotely.com/",
    description: "The largest remote work community with thousands of remote job listings.",
    category: "Remote Jobs",
    tags: ["community", "tech"],
  },
  {
    name: "Gun.io",
    jobs: "250k",
    upvotes: 140,
    downvotes: 6,
    comments: 28,
    href: "https://gun.io/",
    description: "Freelance network for top-tier software engineers with transparent hourly rates.",
    category: "Marketplace",
    tags: ["engineering", "transparent"],
  },
  {
    name: "Contra",
    jobs: "350k",
    upvotes: 260,
    downvotes: 4,
    comments: 40,
    href: "https://contra.com/",
    description: "Commission-free freelancing platform built for independent creators and developers.",
    category: "Marketplace",
    tags: ["commission-free", "creators"],
  },
];