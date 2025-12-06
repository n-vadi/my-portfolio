import { useState, useEffect, useRef } from 'react';
import DecorativeBackground from './DecorativeBackground';

export default function Skills({ skills }) {
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
    <section id="skills" ref={sectionRef} className="relative py-32 px-4 sm:px-6 lg:px-8">
      <DecorativeBackground />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-serif italic text-stone-800 mb-6 text-center">What I Work With</h2>
          <p className="text-center text-stone-600 font-light mb-16 text-lg">Tools & Technologies I love to use:</p>
        </div>
        
        <div className="space-y-12">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <div 
              key={category} 
              className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-stone-200 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${catIdx * 200}ms` }}
            >
              <h3 className="text-2xl font-serif italic text-teal-600 mb-6 text-center">{category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {items.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`bg-white/80 backdrop-blur-sm border border-stone-200 text-stone-700 px-6 py-3 rounded-full text-base font-light ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    style={{ transitionDelay: `${(catIdx * 200) + (idx * 50)}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

