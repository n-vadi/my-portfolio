export default function Skills({ skills }) {
  return (
    <section id="skills" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-serif italic text-stone-800 mb-6 text-center">What I Work With</h2>
        <p className="text-center text-stone-600 font-light mb-16 text-lg">Tools & Technologies I love to use:</p>
        
        <div className="space-y-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-stone-200">
              <h3 className="text-2xl font-serif italic text-teal-600 mb-6 text-center">{category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-white/80 backdrop-blur-sm border border-stone-200 text-stone-700 px-6 py-3 rounded-full text-base font-light hover:border-teal-300 hover:shadow-lg hover:scale-105 transition-all"
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

