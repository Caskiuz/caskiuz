"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electrónico full-stack con carrito en tiempo real, pasarela de pagos Stripe y panel de administración.",
    tags: ["Next.js", "TypeScript", "Prisma", "MySQL", "Stripe"],
    image: "/images/project-1.jpg",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "SaaS Dashboard",
    description:
      "Dashboard analítico multi-tenant con gráficos en tiempo real, autenticación JWT, roles de usuario y exportación de datos.",
    tags: ["React", "Node.js", "WebSocket", "PostgreSQL", "Docker"],
    image: "/images/project-2.jpg",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Mobile App FitTrack",
    description:
      "App de fitness con tracking de ejercicios, progreso visual y sincronización con wearables vía Bluetooth.",
    tags: ["React Native", "Expo", "Firebase", "Chart.js"],
    image: "/images/project-3.jpg",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Task Manager API",
    description:
      "API RESTful para gestión de tareas con WebSockets, notificaciones push y documentación OpenAPI.",
    tags: ["Node.js", "Express", "MongoDB", "Socket.io"],
    image: "/images/project-4.jpg",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Landing Page Builder",
    description:
      "Constructor drag-and-drop de landing pages con previsualización en tiempo real y exportación a HTML/React.",
    tags: ["React", "TailwindCSS", "DnD Kit", "Zustand"],
    image: "/images/project-5.jpg",
    github: "#",
    demo: "#",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mainProjects = featuredProjects.filter((p) => p.featured);
  const sideProjects = featuredProjects.filter((p) => !p.featured);

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que reflejan mi pasión por el código
            limpio, el rendimiento y la experiencia de usuario.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto"
        >
          {/* Featured project 1 - large */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 lg:row-span-2 group"
          >
            <div className="relative h-full min-h-[400px] rounded-2xl border border-border bg-surface hover:bg-surface-hover transition-all duration-300 overflow-hidden gradient-border p-6 flex flex-col justify-between">
              {/* Fake gradient bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Destacado
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-3">
                  {mainProjects[0]?.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  {mainProjects[0]?.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {mainProjects[0]?.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-3 mt-6">
                <Link
                  href={mainProjects[0]?.demo || "#"}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-full transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </Link>
                <Link
                  href={mainProjects[0]?.github || "#"}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-foreground bg-muted hover:bg-muted/80 rounded-full transition-all"
                >
                  <Code2 className="w-4 h-4" />
                  Código
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Featured project 2 */}
          <motion.div variants={itemVariants} className="group">
            <div className="relative h-full min-h-[400px] rounded-2xl border border-border bg-surface hover:bg-surface-hover transition-all duration-300 overflow-hidden p-6 flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                  Destacado
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">
                  {mainProjects[1]?.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {mainProjects[1]?.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {mainProjects[1]?.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-2 mt-4">
                <Link
                  href={mainProjects[1]?.demo || "#"}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-primary hover:bg-primary-hover rounded-full transition-all"
                >
                  Demo <ArrowUpRight className="w-3 h-3" />
                </Link>
                <Link
                  href={mainProjects[1]?.github || "#"}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-foreground bg-muted hover:bg-muted/80 rounded-full transition-all"
                >
                  <Code2 className="w-3 h-3" /> Código
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Side projects */}
          {sideProjects.map((project, i) => (
            <motion.div key={i} variants={itemVariants} className="group">
              <div className="relative h-full rounded-2xl border border-border bg-surface hover:bg-surface-hover transition-all duration-300 p-5 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                <Link
                  href={project.github || "#"}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                >
                  <Code2 className="w-4 h-4" />
                </Link>
                </div>
                <h3 className="font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="https://github.com/caskiuz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground bg-surface border border-border hover:border-primary/30 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/5"
          >
            <Code2 className="w-4 h-4" />
            Ver más proyectos en GitHub
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}