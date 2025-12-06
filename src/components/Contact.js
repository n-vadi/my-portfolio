import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import DecorativeBackground from './DecorativeBackground';

export default function Contact() {
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
    <section id="contact" ref={sectionRef} className="relative py-32 px-4 sm:px-6 lg:px-8">
      <DecorativeBackground />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className={`bg-gradient-to-br from-teal-500 to-emerald-500 rounded-3xl p-16 shadow-2xl text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Sparkles className="mx-auto mb-6" size={48} />
          </div>
          <h2 className="text-5xl font-serif italic mb-6">Let's Connect</h2>
          <p className="text-xl font-light mb-10 text-white/90 leading-relaxed">
            I'm always excited to chat about new projects, creative ideas, or opportunities to collaborate. 
            Drop me a line below!
          </p>
          
          <div className="space-y-4 mb-10 text-left max-w-md mx-auto">
            <a 
              href="mailto:vadinikitha@gmail.com" 
              className={`flex items-center gap-3 text-white hover:text-white/80 transition-colors ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <Mail size={20} />
              <span className="font-light">vadinikitha@gmail.com</span>
            </a>
            <a 
              href="tel:+14082014389" 
              className={`flex items-center gap-3 text-white hover:text-white/80 transition-colors ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              <span className="font-light">+1 (408) 201-4389</span>
            </a>
            <a 
              href="https://github.com/n-vadi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex items-center gap-3 text-white hover:text-white/80 transition-colors ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '600ms' }}
            >
              <Github size={20} />
              <span className="font-light">github.com/n-vadi</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/nikki-vadi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex items-center gap-3 text-white hover:text-white/80 transition-colors ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '700ms' }}
            >
              <Linkedin size={20} />
              <span className="font-light">linkedin.com/in/nikki-vadi</span>
            </a>
          </div>
          
          <a
            href="mailto:vadinikitha@gmail.com"
            className={`inline-block bg-white text-teal-600 px-10 py-4 rounded-full font-light text-lg tracking-wide hover:bg-stone-50 hover:shadow-xl transition-all transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '800ms' }}
          >
            Say Hello ✨
          </a>
        </div>
      </div>
    </section>
  );
}

