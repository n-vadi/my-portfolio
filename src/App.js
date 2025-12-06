import React, { useState, useEffect } from 'react';
import { experiences } from './data/experiences';
import { projects } from './data/projects';
import { skills } from './data/skills';
import DecorativeBackground from './components/DecorativeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import ExperienceDetail from './components/ExperienceDetail';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.experienceIndex !== undefined) {
        setSelectedExperience(event.state.experienceIndex);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSelectedExperience(null);
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Check if there's a hash in the URL on initial load
    const hash = window.location.hash;
    if (hash && hash.startsWith('#experience-')) {
      const index = parseInt(hash.replace('#experience-', ''));
      if (!isNaN(index) && index >= 0 && index < experiences.length) {
        setSelectedExperience(index);
        window.history.replaceState({ experienceIndex: index }, '', hash);
      }
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const scrollToSection = (id) => {
    if (id === 'experience-page') {
      setSelectedExperience(null);
      window.history.pushState({ experienceIndex: null }, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
    } else {
      setSelectedExperience(null);
      window.history.pushState({ experienceIndex: null }, '', window.location.pathname);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      setMobileMenuOpen(false);
    }
  };

  const showExperienceDetail = (index) => {
    setSelectedExperience(index);
    const hash = `#experience-${index}`;
    window.history.pushState({ experienceIndex: index }, '', hash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleBackToPortfolio = () => {
    // Go back in browser history (works with back button functionality)
    window.history.back();
  };

  if (selectedExperience !== null) {
    const exp = experiences[selectedExperience];
    return (
      <div className="min-h-screen bg-amber-50 relative overflow-hidden">
        <DecorativeBackground />
        <Navbar 
          isExperienceDetail={true}
          onBackToPortfolio={handleBackToPortfolio}
        />
        <ExperienceDetail 
          experience={exp}
          onBack={handleBackToPortfolio}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 relative overflow-hidden">
      <Navbar 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
        isExperienceDetail={false}
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Experience 
        experiences={experiences}
        showExperienceDetail={showExperienceDetail}
      />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact />
      <Footer />
    </div>
  );
}
