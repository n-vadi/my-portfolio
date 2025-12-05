export default function ExperienceDetail({ experience, onBack }) {
  if (!experience) return null;

  return (
    <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-6xl sm:text-7xl font-serif italic text-stone-800 mb-6">{experience.role}</h1>
          <p className="text-xl text-stone-600 font-light">{experience.company}</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-stone-200 hover:border-teal-300 transition-all">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div>
              <h2 className="text-3xl font-serif italic text-stone-800 mb-2">{experience.role}</h2>
              <h3 className="text-xl text-teal-600 font-light mb-1">{experience.company}</h3>
              <p className="text-stone-600 font-light">{experience.location}</p>
            </div>
            <span className="text-stone-600 font-light mt-2 md:mt-0">{experience.period}</span>
          </div>

          <ul className="space-y-3 mb-6">
            {experience.highlights.map((highlight, i) => (
              <li key={i} className="text-stone-700 font-light leading-relaxed flex">
                <span className="text-teal-600 mr-3 flex-shrink-0">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-light"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

