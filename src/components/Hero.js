import { Github, Linkedin, Mail, Sparkles, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import DecorativeBackground from './DecorativeBackground';

export default function Hero({ scrollToSection }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roles = ['Software Engineer', 'Full-Stack Developer', 'Problem Solver'];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout;

    if (!isDeleting && displayText.length < role.length) {
      timeout = setTimeout(() => {
        setDisplayText(role.substring(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === role.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(role.substring(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8">
      <DecorativeBackground variant="hero" />

      <div className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Sparkle icon */}
        <div className="inline-block mb-8">
          <Sparkles className="text-teal-500 mx-auto" size={48} />
        </div>

        {/* Main heading with gradient */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic mb-6 leading-tight">
          <span className="block text-stone-800 mb-2">Hi, I'm</span>
          <span className="block text-teal-600">
            Nikki
          </span>
        </h1>

        {/* Typing animation for role */}
        <div className="h-16 sm:h-20 mb-8 flex items-center justify-center">
          <p className="text-xl sm:text-2xl md:text-3xl text-stone-600 font-light">
            <span className="inline-block min-w-[1ch]">{displayText}</span>
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Social links with hover effects */}
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://github.com/n-vadi" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 text-stone-600 hover:text-teal-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github size={28} className="transition-transform group-hover:rotate-12" />
          </a>
          <a 
            href="https://www.linkedin.com/in/nikki-vadi" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 text-stone-600 hover:text-teal-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} className="transition-transform group-hover:rotate-12" />
          </a>
          <a 
            href="mailto:vadinikitha@gmail.com"
            className="group relative p-4 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 text-stone-600 hover:text-teal-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail size={28} className="transition-transform group-hover:rotate-12" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => scrollToSection('about')}
            className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-light text-lg tracking-wide overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's start
              <ArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="group px-10 py-4 rounded-full bg-white/80 backdrop-blur-sm border-2 border-teal-600 text-teal-600 font-light text-lg tracking-wide transition-all duration-300 transform hover:scale-105 hover:bg-teal-600 hover:text-white hover:shadow-xl"
          >
            Let's chat
          </button>
        </div>
      </div>
    </section>
  );
}

