import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, projectDetails } from "@/lib/content";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectBody from "@/components/project/ProjectBody";
import Faq from "@/components/home/Faq";
import Contact from "@/components/home/Contact";
import JsonLd from "@/components/JsonLd";
import { projectSchema } from "@/lib/schema";

export function generateStaticParams() {
  return projects.items.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.items.find((p) => p.slug === slug);
  if (!project) return { title: "Projet" };
  return {
    title: `${project.title} — ${project.subtitle}`,
    description: `${project.title} : ${project.subtitle}. Une réalisation de Kevio Labs, agence web à Lyon.`,
    alternates: { canonical: `/projets/${slug}` },
    openGraph: {
      title: `${project.title} — Kevio Labs`,
      description: project.subtitle,
      url: `/projets/${slug}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.items.find((p) => p.slug === slug);
  if (!project) notFound();

  const detail = projectDetails[slug];

  return (
    <>
      <JsonLd data={projectSchema(project)} />
      <ProjectHero title={project.title} image={detail?.heroImage ?? project.image} />
      {detail && <ProjectBody detail={detail} liveUrl={detail.liveUrl} />}
      <Faq />
      <Contact />
    </>
  );
}
