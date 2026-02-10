import ReactIcon from "../assets/logos/React-logo.svg?raw";

export const projects = [
  {
    id: 1,
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
    image: "https://github.com/Naveenkms/my-portfolio/blob/main/assets/project-img/Screenshot%202025-08-22%20130501.png?raw=true",
  },
  {
    id: 2,
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
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=500&fit=crop",
  },
];
