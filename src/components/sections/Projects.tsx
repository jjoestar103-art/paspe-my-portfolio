import { Project } from '@/lib/types';
import Card from '@/components/ui/Card';

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack shopping experience with cart, checkout, and admin dashboard.',
    technologies: ['Next.js', 'Tailwind', 'Stripe'],
    imageUrl: 'https://design4users.com/wp-content/uploads/2019/02/ecommerce-app-designs.png',
    githubUrl: 'https://github.com/jjoestar103-art',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Task Manager',
    description: 'Real-time collaborative task board with drag-and-drop and notifications.',
    technologies: ['React', 'Firebase', 'TypeScript'],
    imageUrl: 'https://uizard.io/static/e5daa42c17923ec354ca0c0414827192/a8e47/320c8071bbbf30e4e49720dd798987a8896cbeb8-1440x835.png',
    githubUrl: 'https://github.com/jjoestar103-art',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with location search and animated illustrations.',
    technologies: ['Vue', 'Chart.js', 'REST API'],
    imageUrl: 'https://cdn.dribbble.com/userupload/12635846/file/original-80069cd23ab1c74a834758d806ecaf09.png?resize=752x&vertical=center',
    githubUrl: 'https://github.com/jjoestar103-art',
    liveUrl: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[var(--yellow-bg)] relative overflow-hidden section-y">
      <div className="page-container relative z-10">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none select-none leading-none">
          <span
            className="text-[22rem] font-black text-[var(--red)]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Projects
          </span>
        </div>

        <div className="mb-20">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--red)] mb-4">
            Selected Work
          </p>
          <h2
            className="text-6xl lg:text-7xl font-black italic text-[var(--text-dark)] mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            My Projects
          </h2>
          <p className="text-lg font-medium text-[var(--text-muted)] max-w-lg leading-relaxed">
            A curated selection of recent work — from front-end experiments to full-stack applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}