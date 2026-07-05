import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/aboutMe";
import FloatingButton from "@/components/button/floatButton";
import { ContactSection } from "@/components/Contact";
import SkillSection from "@/components/Skill";
import { Project } from "@/components/Project";

const Home = () => {

  return (
    <div className="min-h-screen">
      <Head>
        <title>Phen Sokleng - UX/UI Designer</title>
        <meta
          name="description"
          content="Professional portfolio of Phen Sokleng - UX/UI Designer"
        />
      </Head>
      <FloatingButton />
      <HeroSection />
      <AboutSection />
      <Project />
      <SkillSection />
      <ContactSection />
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Phen Sokleng. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
