export interface Project {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  highlights?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: JSX.Element;
}

export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillsByCategory {
  Frontend: Skill[];
  Backend: Skill[];
  Cloud: Skill[];
  Tools: Skill[];
}

export interface ProjectCardProps {
  project: Project;
}

export interface SkillCardProps {
  category: keyof SkillsByCategory;
  skills: SkillsByCategory;
}

export interface TimelineItem {
  period: string;
  title: string;
  subtitle?: string;
  location: string;
  description?: string;
  highlights?: string[];
  icon: React.ReactNode;
  category: "experience" | "education"; 
}

export interface CategoryProps {
  ref: React.RefObject<HTMLDivElement>;
  isInView: boolean;
}

export const projects = [
  {
    id: "dscf",
    title: "Demand and Supply Chain Finance",
    description:
      "Demand & Supply Chain Financing is a digital financing system designed to help MSMEs access invoice-based financing faster, while enabling banks to manage loan requests, invoice verification, approval workflows, repayment tracking, and risk monitoring more efficiently.",
    imageUrl: "/dscf.png",
    technologies: ["Figma", "Draw.io", "Redmine", "Excel"],
    role: "UX/UI Designer",
    projectUrl: "",
    githubUrl: "",
    liveUrl: "",
    highlights: [
      "Designed user flows and wireframes for loan request workflows.",
      "Created web and mobile UI designs in Figma.",
      "Designed approval, disbursement, and repayment tracking screens.",
      "Worked with business, QA, and development teams to validate user flows.",
    ],
  },
  {
    id: "core-framework",
    title: "Core Framework",
    description:
      "A reusable design framework created to provide a consistent foundation across different digital products. It helps designers and developers build forms, tables, and interface components faster while maintaining visual consistency and improving user experience.",
    imageUrl: "/coreframework.png",
    technologies: ["Figma", "Design System", "Component Library", "UX Documentation"],
    role: "UX/UI Designer",
    projectUrl: "",
    githubUrl: "",
    liveUrl: "",
    highlights: [
      "Created reusable UI components for forms, tables, and layouts.",
      "Improved design consistency across multiple digital products.",
      "Prepared design documentation for developer handoff.",
      "Supported faster interface design and development workflow.",
    ],
  },
  {
    id: "frint",
    title: "FRINT Interview",
    description:
      "FRINT is a career-focused platform designed to help job seekers prepare for interviews by providing tools, resources, and guidance to build confidence and improve interview performance.",
    imageUrl: "/frint2.png",
    technologies: ["Next.js", "HeroUI", "TypeScript", "Tailwind CSS"],
    role: "Team Lead, UX/UI Designer, Frontend Developer",
    projectUrl: "https://github.com/frintgroupwork/frint.git",
    githubUrl: "https://github.com/frintgroupwork/frint.git",
    liveUrl: "https://frint-phi.vercel.app/",
    highlights: [
      "Led the team and supported project planning.",
      "Designed user flows and UI screens.",
      "Developed responsive frontend interfaces.",
      "Deployed the application on Vercel.",
    ],
  },
  {
    id: "chekromlek",
    title: "Chekromlek Platform",
    description:
      "Chekromlek is a social media platform for sharing creative projects, allowing artists, designers, and entrepreneurs to showcase their work, connect with others, and inspire a creative community.",
    imageUrl:
      "/chekromlek.png",
    technologies: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Microservices",
    ],
    role: "Full Stack Developer",
    projectUrl: "https://github.com/chunminglingg/Chekromlek_Monorepo.git",
    githubUrl: "https://github.com/chunminglingg/Chekromlek_Monorepo.git",
    liveUrl: "https://chekromlek.com/",
    highlights: [
      "Developed a full-stack social media platform.",
      "Built responsive frontend interfaces with Next.js and TypeScript.",
      "Implemented backend services using Express.js and MongoDB.",
      "Worked with a microservices-based project structure.",
    ],
  },
];
