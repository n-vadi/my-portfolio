export default function About() {
  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-stone-200">
          <h2 className="text-5xl font-serif italic text-stone-800 mb-12 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <img 
                src="/profile.jpg" 
                alt="Nikki" 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-teal-100"
              />
            </div>
            <div className="flex-1">
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

