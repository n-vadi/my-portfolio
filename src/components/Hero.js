import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export default function Hero({ scrollToSection }) {
  return (
    <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6">
          <Sparkles className="text-teal-500 mb-4 mx-auto" size={40} />
        </div>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif italic text-stone-800 mb-8 leading-tight">
          Hi, I'm <br/>
          <span className="text-teal-600">Nikki</span>
        </h1>
        <div className="flex justify-center space-x-8 mb-16">
          <a href="https://github.com/n-vadi" className="text-stone-600 hover:text-teal-600 transition-all transform hover:scale-110">
            <Github size={32} />
          </a>
          <a href="https://www.linkedin.com/in/nikki-vadi" className="text-stone-600 hover:text-teal-600 transition-all transform hover:scale-110">
            <Linkedin size={32} />
          </a>
          <a href="mailto:vadinikitha@gmail.com" className="text-stone-600 hover:text-teal-600 transition-all transform hover:scale-110">
            <Mail size={32} />
          </a>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => scrollToSection('about')}
            className="bg-teal-600 text-white px-10 py-4 rounded-full font-light text-lg tracking-wide hover:bg-teal-700 hover:shadow-xl transition-all transform hover:scale-105"
          >
            Let's start
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-teal-600 text-white px-10 py-4 rounded-full font-light text-lg tracking-wide hover:bg-teal-700 hover:shadow-xl transition-all transform hover:scale-105"
          >
            Let's chat
          </button>
        </div>
      </div>
    </section>
  );
}

