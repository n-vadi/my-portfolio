import { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import DecorativeBackground from './DecorativeBackground';

export default function Projects({ projects }) {
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
    <section id="projects" ref={sectionRef} className="relative py-32 px-4 sm:px-6 lg:px-8">
      <DecorativeBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-serif italic text-stone-800 mb-6 text-center">My Work</h2>
          <p className="text-center text-stone-600 font-light mb-16 text-lg">A collection of things I've built with love:</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-stone-200 hover:border-teal-300 transition-all hover:transform hover:scale-105 hover:shadow-xl group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"></div>
              <h3 className="text-2xl font-serif italic text-stone-800 mb-4">{project.title}</h3>
              <p className="text-stone-600 mb-6 font-light leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-light hover:scale-105 transition-transform duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-6">
                <a
                  href={project.link}
                  className="text-teal-600 hover:text-teal-700 flex items-center gap-2 font-light transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>view</span>
                </a>
                <a
                  href={project.github}
                  className="text-teal-600 hover:text-teal-700 flex items-center gap-2 font-light transition-colors"
                >
                  <Github size={18} />
                  <span>code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

