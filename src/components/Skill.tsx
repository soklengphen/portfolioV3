"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Skill = {
  name: string;
  proficiency: number;
};

type SkillsByCategory = Record<string, Skill[]>;

export const SkillCard: React.FC<{
  category: string;
  skills: SkillsByCategory;
}> = ({ category, skills }) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, {
    once: false,
    amount: 0.2,
    margin: "-50px 0px -50px 0px",
  });

  const cardVariants = {
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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      className="bg-card p-6 rounded-xl shadow-lg border border-border"
      variants={cardVariants}
      initial="hidden"
      animate={isCardInView ? "visible" : "hidden"}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <h3 className="text-xl font-bold text-foreground mb-4">{category}</h3>
      <div className="space-y-4">
        {skills[category].map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={
              isCardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
            }
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center">
                <span className="text-gray-700 text-muted-foreground">
                  {skill.name}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">
                {skill.proficiency}%
              </span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={
                  isCardInView
                    ? { width: `${skill.proficiency}%` }
                    : { width: 0 }
                }
                transition={{
                  duration: 1.2,
                  delay: index * 0.15 + 0.3,
                  ease: "easeOut",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillSection = () => {
  const skillsRef = useRef(null);
  const headerRef = useRef(null);

  const isSkillsInView = useInView(skillsRef, {
    once: false,
    amount: 0.2,
    margin: "-100px 0px -100px 0px",
  });

  const isHeaderInView = useInView(headerRef, {
    once: false,
    amount: 0.2,
    margin: "-100px 0px -100px 0px",
  });

  const skills = {
  "UX/UI Skills": [
    { name: "User Flow", proficiency: 92 },
    { name: "Wireframing", proficiency: 90 },
    { name: "Prototyping", proficiency: 90 },
    { name: "UI Design", proficiency: 94 },
    { name: "Design System", proficiency: 88 },
    { name: "Responsive Design", proficiency: 90 },
  ],
  "Professional Skills": [
    { name: "Requirement Analysis", proficiency: 88 },
    { name: "Stakeholder Communication", proficiency: 86 },
    { name: "Team Collaboration", proficiency: 90 },
    { name: "Problem Solving", proficiency: 88 },
    { name: "Research & Analysis", proficiency: 85 },
    { name: "SIT / UAT Support", proficiency: 82 },
  ],
  "Design Tools": [
    { name: "Figma", proficiency: 98 },
    { name: "Adobe Photoshop", proficiency: 85 },
    { name: "Adobe Illustrator", proficiency: 82 },
    { name: "Adobe InDesign", proficiency: 78 },
    { name: "Trello", proficiency: 85 },
  ],
  "Frontend Skills": [
    { name: "Next.js", proficiency: 90 },
    { name: "React", proficiency: 88 },
    { name: "TypeScript", proficiency: 85 },
    { name: "Tailwind CSS", proficiency: 88 },
    { name: "HeroUI", proficiency: 82 },
  ],
};

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      ref={skillsRef}
      className="py-24"
      style={{
        background: "var(--gradient-background)",
      }}
      initial="hidden"
      animate={isSkillsInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            across different areas of software development.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {(Object.keys(skills) as Array<keyof typeof skills>).map(
            (category) => (
              <SkillCard key={category} category={category} skills={skills} />
            )
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillSection;
