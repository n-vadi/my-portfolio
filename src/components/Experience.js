import { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import DecorativeBackground from './DecorativeBackground';

export default function Experience({ experiences, showExperienceDetail }) {
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
    <section id="experience" ref={sectionRef} className="relative py-32 px-4 sm:px-6 lg:px-8">
      <DecorativeBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-serif italic text-stone-800 mb-6 text-center">Experience</h2>
          <p className="text-center text-stone-600 font-light mb-16 text-lg">Where I've worked and grown:</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-stone-200 hover:border-teal-300 transition-all hover:transform hover:scale-105 hover:shadow-xl group transition-all duration-700 delay-${idx * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"></div>
              <h3 className="text-2xl font-serif italic text-stone-800 mb-2">{exp.role}</h3>
              <p className="text-lg text-teal-600 font-light mb-1">{exp.company}</p>
              <p className="text-stone-600 font-light mb-4">{exp.period}</p>
              <p className="text-stone-600 font-light mb-6 line-clamp-2">{exp.highlights[0]}</p>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  showExperienceDetail(idx);
                }}
                className="text-teal-600 hover:text-teal-700 font-light flex items-center gap-2 transition-colors"
              >
                <span>View Details</span>
                <ExternalLink size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

