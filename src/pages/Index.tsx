import { Helmet } from "react-helmet-async";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Felix Y Lingam | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Felix Y Lingam - Passionate Full Stack Developer specializing in web and software development. Currently pursuing B.Sc. in Computer Science at Jain College of Engineering."
        />
        <meta
          name="keywords"
          content="Felix Lingam, Full Stack Developer, Web Developer, Software Developer, React, Node.js, JavaScript, Portfolio"
        />
        <meta name="author" content="Felix Y Lingam" />
        <meta property="og:title" content="Felix Y Lingam | Full Stack Developer" />
        <meta
          property="og:description"
          content="Passionate developer interested in web & software development"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Felix Y Lingam | Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Passionate developer interested in web & software development"
        />
        <link rel="canonical" href="https://felixlingam.dev" />
      </Helmet>

      <div className="relative min-h-screen overflow-x-hidden">
        <ParticleBackground />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <AchievementsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
