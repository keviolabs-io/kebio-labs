import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, projectDetails } from "@/lib/content";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectBody from "@/components/project/ProjectBody";
import Faq from "@/components/home/Faq";
import Contact from "@/components/home/Contact";

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
  return { title: project ? project.title : "Projet" };
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
      <ProjectHero title={project.title} image={project.image} />
      {detail && <ProjectBody detail={detail} liveUrl={detail.liveUrl} />}
      <Faq />
      <Contact />
    </>
  );
}
