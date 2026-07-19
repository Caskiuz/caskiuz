import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { notFound } from "next/navigation";

const blogPosts = {
  "nextjs-mejor-framework-freelancers": {
    title: "Por qué Next.js es el mejor framework para freelancers en 2025",
    date: "2025-07-15",
    readTime: "6 min",
    tags: ["Next.js", "React", "Freelance"],
    content: `# Por qué Next.js es el mejor framework para freelancers en 2025

Si eres un desarrollador freelance, elegir el framework correcto puede marcar la diferencia entre
entregar proyectos a tiempo y con calidad, o pasar horas configurando tooling.

## La ventaja del Server-Side Rendering

Next.js ofrece SSR, SSG e ISR en un solo framework. Esto significa que puedes elegir la
estrategia de renderizado correcta para cada página de tu aplicación:

- **SSG (Static Site Generation):** Perfecto para landing pages y blogs que no cambian frecuentemente.
- **SSR (Server-Side Rendering):** Ideal para dashboards y contenido dinámico.
- **ISR (Incremental Static Regeneration):** Lo mejor de ambos mundos para contenido que cambia ocasionalmente.

## Productividad desde el día 1

Con Next.js obtienes:

1. **File-based routing** — sin necesidad de configurar un router
2. **API Routes** — backend integrado sin servidor separado
3. **TypeScript** — soporte nativo desde la instalación
4. **Optimización de imágenes** — componente Image integrado
5. **Middleware** — para auth, redirecciones, y más

## Entrega más rápido, cobra más

Como freelancer, tu tiempo es dinero. Next.js te permite:

- **Reutilizar componentes** entre proyectos con un sistema de diseño consistente
- **Desplegar en Vercel** con un solo comando (\`git push\`)
- **Ofrecer mejor SEO** que con SPAs tradicionales (los clientes lo valoran)
- **Escalar sin cambiar de stack** cuando el proyecto crece

## Conclusión

Next.js no es solo una moda pasajera. Es el estándar de facto para desarrollo React moderno
y la mejor inversión de aprendizaje para cualquier freelancer en 2025.`,
  },
  "prisma-orm-mysql-guia-completa": {
    title: "Guía completa de Prisma ORM con MySQL para proyectos reales",
    date: "2025-06-28",
    readTime: "10 min",
    tags: ["Prisma", "MySQL", "Backend"],
    content: `# Guía completa de Prisma ORM con MySQL

Prisma ha revolucionado la forma en que trabajamos con bases de datos en Node.js. En esta guía
aprenderás a configurarlo con MySQL para proyectos reales.

## Instalación y configuración inicial

\`\`\`bash
npm install prisma @prisma/client
npx prisma init --datasource-provider mysql
\`\`\`

Esto crea un archivo \`schema.prisma\` donde definiremos nuestros modelos:

\`\`\`prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}
\`\`\`

## Migraciones

Prisma gestiona las migraciones por ti:

\`\`\`bash
npx prisma migrate dev --name init
\`\`\`

## Consultas type-safe

El verdadero poder de Prisma está en sus consultas completamente tipadas:

\`\`\`typescript
const users = await prisma.user.findMany({
  include: { posts: true },
  where: { email: { contains: "@gmail.com" } },
});
\`\`\`

## Conclusión

Prisma + MySQL es la combinación perfecta para proyectos que necesitan type safety,
migraciones automáticas y un DX excepcional.`,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return { title: "Post no encontrado | Caskiuz" };
  }

  return {
    title: `${post.title} | Caskiuz Blog`,
    description: post.content.slice(0, 160).replace(/[#*`\n]/g, ""),
    openGraph: {
      title: post.title,
      description: post.content.slice(0, 160).replace(/[#*`\n]/g, ""),
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="glass-card p-8">
          <div className="prose-custom whitespace-pre-wrap leading-relaxed">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("# ")) {
                return (
                  <h1
                    key={i}
                    className="text-3xl font-bold mt-10 mb-4 tracking-tight"
                  >
                    {line.slice(2)}
                  </h1>
                );
              }
              if (line.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold mt-8 mb-3 tracking-tight"
                  >
                    {line.slice(3)}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    className="text-xl font-semibold mt-6 mb-2"
                  >
                    {line.slice(4)}
                  </h3>
                );
              }
              if (line.startsWith("- **")) {
                const cleaned = line
                  .slice(2)
                  .replace(/\*\*/g, "")
                  .replace(/: /, ": ");
                const [label, ...rest] = cleaned.split(": ");
                return (
                  <li key={i} className="ml-4 mb-1 text-muted-foreground">
                    <strong className="text-foreground">{label}</strong>:{" "}
                    {rest.join(": ")}
                  </li>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <li key={i} className="ml-4 mb-1 text-muted-foreground">
                    {line.slice(2)}
                  </li>
                );
              }
              if (line.startsWith("1. ") || line.match(/^\d+\./)) {
                return (
                  <li key={i} className="ml-4 mb-1 text-muted-foreground">
                    {line.replace(/^\d+\.\s*/, "")}
                  </li>
                );
              }
              if (line.startsWith("```")) {
                return (
                  <div
                    key={i}
                    className="my-2 px-3 py-1 bg-muted rounded text-xs text-muted-foreground font-mono"
                  >
                    {line.slice(3)}
                  </div>
                );
              }
              if (line.startsWith("`") && line.endsWith("`")) {
                return (
                  <code
                    key={i}
                    className="px-1.5 py-0.5 rounded-md bg-muted text-sm font-mono text-accent"
                  >
                    {line.slice(1, -1)}
                  </code>
                );
              }
              if (line === "") {
                return <br key={i} />;
              }
              return (
                <p key={i} className="mb-4 leading-relaxed text-muted-foreground">
                  {line}
                </p>
              );
            })}
          </div>
        </div>

        {/* Share / nav */}
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground bg-surface border border-border hover:border-primary/30 rounded-full transition-all"
          >
            ← Más artículos
          </Link>
        </div>
      </div>
    </article>
  );
}