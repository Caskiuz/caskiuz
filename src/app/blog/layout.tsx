import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Caskiuz - Full-Stack Developer",
  description:
    "Artículos sobre desarrollo web, React, Next.js, Node.js, MySQL y arquitectura de software por Caskiuz.",
  openGraph: {
    title: "Blog | Caskiuz",
    description:
      "Artículos sobre desarrollo web, React, Next.js, Node.js, MySQL y arquitectura de software.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}