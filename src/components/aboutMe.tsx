"use client";
import React from "react";
import { MapPin, Code, Book } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CategoryProps, TimelineItem } from "./type";

const TimelineSection = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  const isExperienceInView = useInView(experienceRef, {
    once: false, // Changed to false to allow replay
    amount: 0.2,
    margin: "-100px 0px -100px 0px",
  });

  const isEducationInView = useInView(educationRef, {
    once: false, // Changed to false to allow replay
    amount: 0.2,
    margin: "-100px 0px -100px 0px",
  });

  const experienceItems: TimelineItem[] = [
  {
    period: "March 2025 - Present",
    title: "UX/UI Designer at Innotech Solution",
    location: "Phnom Penh, Cambodia",
    description:
      "Designed UX/UI for enterprise web and mobile systems, including Digital Supply Chain Financing, Supply Chain System, and Backend Core MIS.",
    highlights: [
      "Designed user-friendly interfaces for web and mobile applications.",
      "Created user flows, wireframes, prototypes, and design documentation.",
      "Worked with business, development, and QA teams to clarify requirements.",
      "Supported SIT and UAT by reviewing test scenarios and validating user flows.",
    ],
    icon: <Code className="w-5 h-5" />,
    category: "experience",
  },
  {
    period: "November 2024 - February 2025",
    title: "Web Developer Intern at Glean Asia",
    location: "Time Tower Building, Toul Tompong, Phnom Penh",
    description:
      "Worked as Team Lead and Frontend Developer for FRINT, an interview preparation platform for students.",
    highlights: [
      "Supported user research, UI design, frontend development, and deployment.",
      "Designed and developed responsive web interfaces.",
      "Conducted problem identification, user research, and user analysis.",
      "Developed frontend features using Next.js, TypeScript, and Tailwind CSS.",
      "Deployed the application on Vercel and supported production workflow.",
    ],
    icon: <Code className="w-5 h-5" />,
    category: "experience",
  },
  {
      period: "2023 - 2024",
      title: "Full Stack Web Development at SabaiCode",
      location: "Chrouy Changvar, Phnom Penh, Cambodia",
      description:
        "Built full-stack applications using Next.js, Node.js, and Mongodb.",
      highlights: [],
      icon: <Code className="w-5 h-5" />,
      category: "experience",
    },
  {
    period: "2022 - Present",
    title: "SETEC Institute",
    subtitle: "Bachelor's Degree",
    location: "Toul Kork, Phnom Penh, Cambodia",
    description: "Bachelor Degree of MIS",
    highlights: [
      "Focused on management information systems, software development, and web technologies.",
      "Studied system analysis, programming, database, and application development.",
    ],
    icon: <Book className="w-5 h-5" />,
    category: "education",
  },
  {
    period: "2022",
    title: "Sabai Code",
    subtitle: "Web Fullstack Developer",
    location: "Chrouy Changvar, Phnom Penh, Cambodia",
    description:
      "Completed full-stack web development training covering UI/UX, frontend, backend, and DevOps basics.",
    highlights: [
      "Learned UI/UX design, frontend development, backend development, and DevOps.",
      "Built full-stack web applications using modern web technologies.",
      "Practiced project-based development and deployment workflow.",
    ],
    icon: <Book className="w-5 h-5" />,
    category: "education",
  },
  {
    period: "2021",
    title: "Chea Sim Senthormuk High School",
    subtitle: "BacII Graduated",
    location: "Phnom Penh, Cambodia",
    description: "Completed Grade 12 / BacII.",
    highlights: [],
    icon: <Book className="w-5 h-5" />,
    category: "education",
  },

];

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    initial: {
      scale: 1,
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const getCategoryProps = (
    category: "experience" | "education"
  ): CategoryProps => {
    if (category === "experience") {
      return { ref: experienceRef, isInView: isExperienceInView };
    }
    return { ref: educationRef, isInView: isEducationInView };
  };

  return (
    <section
      className="py-16 overflow-hidden"
      style={{
        background: "var(--gradient-background)",
      }}
      id="about"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={
            isExperienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building digital solutions and continuously learning through
            practical experience and academic excellence.
          </p>
        </motion.div>

        {(["experience", "education"] as const).map((category) => {
          const { ref, isInView } = getCategoryProps(category);

          return (
            <div key={category} className="mb-16" ref={ref}>
              <motion.h3
                className="text-2xl font-semibold text-foreground mb-8 capitalize"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ delay: 0.3 }}
              >
                {category}
              </motion.h3>

              <div className="relative">
                <motion.div
                  className="absolute left-[42px] top-0 bottom-0 w-0.5 bg-primary"
                  initial={{ scaleY: 0, originY: 0 }}
                  animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                />

                <motion.div
                  className="space-y-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {experienceItems
                    .filter((item) => item.category === category)
                    .map((item, index) => (
                      <motion.div
                        key={index}
                        className="relative pl-16"
                        variants={itemVariants}
                        custom={index}
                      >
                        <motion.div
                          className="absolute left-0 p-2 bg-background rounded-full border border-border"
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          {item.icon}
                        </motion.div>

                        <motion.div
                          className="bg-card p-6 rounded-xl shadow-sm border border-border"
                          variants={cardVariants}
                          initial="initial"
                          whileHover="hover"
                        >
                          <div className="text-sm font-medium text-primary mb-2">
                            {item.period}
                          </div>
                          <h4 className="text-xl font-semibold text-foreground mb-1">
                            {item.title}
                          </h4>
                          {item.subtitle && (
                            <div className="text-md text-muted-foreground mb-2">
                              {item.subtitle}
                            </div>
                          )}
                          <div className="flex items-center text-muted-foreground text-sm mb-3">
                            <MapPin className="w-4 h-4 mr-1" />
                            {item.location}
                          </div>
                          {item.description && (
                            <p className="text-muted-foreground mb-3">
                              {item.description}
                            </p>
                          )}
                          {item.highlights && item.highlights.length > 0 && (
                            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                              {item.highlights.map((highlight, i) => (
                                <li key={i}>{highlight}</li>
                              ))}
                            </ul>
                          )}
                        </motion.div>
                      </motion.div>
                    ))}
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TimelineSection;
