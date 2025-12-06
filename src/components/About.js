import { useState, useEffect, useRef } from 'react';
import profileImage from '../assets/profile.jpg';
import DecorativeBackground from './DecorativeBackground';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-4 sm:px-6 lg:px-8">
      <DecorativeBackground />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-stone-200 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-serif italic text-stone-800 mb-12 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className={`flex-shrink-0 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <img 
                src={profileImage} 
                alt="Nikki" 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-teal-100 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className={`flex-1 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}>
              <p className="text-stone-700 text-lg leading-relaxed font-light text-center md:text-left">
                I'm a software engineer based in San Francisco with professional experience at Samsung building Python automation, test tooling, and data pipelines that helped teams validate and debug SSDs more efficiently. I'm transitioning into full-stack and backend development, leveling up in React, TypeScript, Express, and SQL, and building projects that emphasize real-world impact and strong engineering fundamentals. I love taking ambiguous, messy problems and turning them into clear, useful tools with clean code and intuitive UX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

