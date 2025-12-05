import { ExternalLink } from 'lucide-react';

export default function Experience({ experiences, showExperienceDetail }) {
  return (
    <section id="experience" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-serif italic text-stone-800 mb-6 text-center">Experience</h2>
        <p className="text-center text-stone-600 font-light mb-16 text-lg">Where I've worked and grown:</p>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-stone-200 hover:border-teal-300 transition-all hover:transform hover:scale-105 hover:shadow-xl group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full mb-6 group-hover:scale-110 transition-transform"></div>
              <h3 className="text-2xl font-serif italic text-stone-800 mb-2">{exp.role}</h3>
              <p className="text-lg text-teal-600 font-light mb-1">{exp.company}</p>
              <p className="text-stone-600 font-light mb-4">{exp.period}</p>
              <p className="text-stone-600 font-light mb-6 line-clamp-2">{exp.highlights[0]}</p>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  showExperienceDetail(idx);
                }}
                className="text-teal-600 hover:text-teal-700 font-light flex items-center gap-2"
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

