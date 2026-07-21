import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/BlogList";
import JsonLd from "@/components/JsonLd";
import { blogSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog — Conseils web, applications, IA & SEO",
  description:
    "Le blog de Kevio Labs : conseils et coulisses sur la création de sites, les applications, l'automatisation IA, la publicité et le référencement SEO.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Conseils web, applications, IA & SEO | Kevio Labs",
    description:
      "Nos réflexions sur le web, les applications, l'IA et le SEO.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogSchema} />
      <BlogHero />
      <BlogList />
    </>
  );
}
