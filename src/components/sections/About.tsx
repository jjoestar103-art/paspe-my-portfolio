const skills = [
  { name: 'HTML5 & CSS3 (Flexbox, Grid, Tailwind)' }, // Fixed missing closing parenthesis
  { name: 'JavaScript (ES6+) & React / Next.js' },
  { name: 'Responsive & Mobile‑First Design' },
  { name: 'Git & Basic Version Control' },
  { name: 'Problem Solving & Attention to Detail' },
];

export default function About() {
  return (
    <section id="about" className="bg-[var(--cream)] relative overflow-hidden section-y">
      <div className="page-container">
        <div className="absolute left-0 top-0 opacity-[0.04] pointer-events-none select-none leading-none">
          <span
            className="text-[22rem] font-black text-[var(--red)]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About
          </span>
        </div>

        <div className="relative z-10">
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-[var(--red)] mb-5">
            Who I Am
          </p>
          <h2
            className="text-6xl lg:text-7xl font-black italic text-[var(--text-dark)] mb-24"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-24 lg:gap-36">
            <div className="flex flex-col gap-7">
              <p className="text-lg text-[var(--text-muted)] leading-[1.9]">
                I’m a passionate web developer who focuses on creating simple, 
                responsive, and user‑friendly websites. I work with modern tools 
                like HTML5, CSS3, JavaScript, React, and Next.js.
              </p>
              <p className="text-lg text-[var(--text-muted)] leading-[1.9]">
                My goal is to build clean, accessible interfaces that help people 
                and businesses establish a strong online presence. I also enjoy 
                learning new technologies and improving my craft every day.
              </p>

              <div className="flex items-center gap-4 mt-2">
                <div className="h-px w-10 bg-[var(--red)]" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--red)]">
                  Available for hire
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-16">
              {/* Education block */}
              <div className="border-l-4 border-[var(--red)] pl-12 py-3 space-y-2">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--red)] mb-3">
                  Education
                </p>
                <p className="text-xl text-[var(--text-dark)] font-bold leading-snug">
                  Central Philippine University
                </p>
                <p className="text-sm text-[var(--text-muted)] mt-2">Jaro, Iloilo City</p>
                <p className="text-sm text-[var(--text-muted)]">BS Computer Science — 2023 to Present</p>
              </div>

              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--red)] mb-7">
                  Skills & Technologies
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center justify-between px-6 py-4 border-2 border-[var(--red)]/20 hover:border-[var(--red)] hover:bg-[var(--red)] transition-all duration-300 cursor-default"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[var(--red)] group-hover:bg-white transition-colors duration-300 flex-shrink-0" />
                        <span className="text-sm font-semibold text-[var(--text-dark)] group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}