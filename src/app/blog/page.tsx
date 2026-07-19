import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "Por qué Next.js es el mejor framework para freelancers en 2025",
    slug: "nextjs-mejor-framework-freelancers",
    excerpt:
      "Descubre por qué Next.js se ha convertido en la herramienta favorita de los desarrolladores freelance para construir aplicaciones web modernas, rápidas y con SEO imbatible.",
    date: "2025-07-15",
    readTime: "6 min",
    tags: ["Next.js", "React", "Freelance"],
  },
  {
    title: "Guía completa de Prisma ORM con MySQL para proyectos reales",
    slug: "prisma-orm-mysql-guia-completa",
    excerpt:
      "Aprende a configurar Prisma con MySQL desde cero, con ejemplos prácticos de migraciones, relaciones, consultas avanzadas y mejores prácticas para producción.",
    date: "2025-06-28",
    readTime: "10 min",
    tags: ["Prisma", "MySQL", "Backend"],
  },
  {
    title: "Arquitectura limpia en Node.js: cómo estructurar tus APIs",
    slug: "arquitectura-limpia-nodejs-apis",
    excerpt:
      "Un enfoque práctico para aplicar Clean Architecture en tus proyectos Node.js/Express, con separación de responsabilidades, inyección de dependencias y testing.",
    date: "2025-06-10",
    readTime: "8 min",
    tags: ["Node.js", "API", "Arquitectura"],
  },
  {
    title: "10 patrones de React que todo desarrollador debería conocer",
    slug: "10-patrones-react-esenciales",
    excerpt:
      "Explora patrones avanzados de React como Compound Components, Render Props, Higher-Order Components, Custom Hooks y cómo aplicarlos en proyectos reales.",
    date: "2025-05-20",
    readTime: "12 min",
    tags: ["React", "TypeScript", "Patrones"],
  },
  {
    title: "Cómo conseguir clientes internacionales siendo freelancer latino",
    slug: "clientes-internacionales-freelance-latino",
    excerpt:
      "Estrategias probadas para posicionarte en el mercado global, construir tu marca personal, y conseguir clientes en USA y Europa desde Latinoamérica.",
    date: "2025-05-05",
    readTime: "7 min",
    tags: ["Freelance", "Negocios", "Carrera"],
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Blog
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Artículos y <span className="gradient-text">Recursos</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Comparto mi experiencia, aprendizajes y mejores prácticas sobre
            desarrollo web, arquitectura de software y vida freelance.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group glass-card p-6 hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 glass-card p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">
            ¿Te gusta el contenido?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Suscríbete para recibir nuevos artículos y recursos exclusivos
            directamente en tu bandeja de entrada.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary outline-none text-sm"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 text-sm font-semibold text-white bg-primary hover:bg-primary-hover rounded-full transition-all shadow-lg shadow-primary/25"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}