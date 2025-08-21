import ReactIcon from "../assets/logos/React-logo.svg?raw";

export const projects = [
  {
    title: "Receipt Upload & Expense Tracking System",
    techStack: "Next.js • TypeScript • PostgreSQL • Drizzle • Shadcn",
    description:
      "A fullstack app built with Next.js, leveraging server components to improve First Contentful Paint (FCP) and reduce bundle size by performing data fetching and rendering on the server.",
    cta: [
      {
        text: "View Repo →",
        link: "https://github.com/Naveenkms/receipto",
      },
      {
        text: "Live Demo →",
        link: "https://receipto-azure.vercel.app",
      },
    ],
    icon: ReactIcon,
  },
  {
    title: "Realtime Chat Service",
    techStack: "Next.js • WebSockets • Redis • Pusher • Tailwind CSS",
    description:
      "Low-latency messaging with Redis-backed pub/sub and Pusher channels. Implements optimistic UI updates and SWR caching strategy.",
    cta: [
      {
        text: "View Repo →",
        link: "https://github.com/Naveenkms/nextjs13-mesenger",
      },
    ],
    icon: ReactIcon,
  },
];
