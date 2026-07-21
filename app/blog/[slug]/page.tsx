import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blog } from "@/lib/content";
import BlogArticle from "@/components/blog/BlogArticle";
import Contact from "@/components/home/Contact";
import JsonLd from "@/components/JsonLd";
import { blogPostSchema } from "@/lib/schema";

export function generateStaticParams() {
  return blog.posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blog.posts.find((p) => p.slug === slug);
  if (!post) return { title: "Article" };
  const cover = post.image ?? "/opengraph-image.png";
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} | Kevio Labs`,
      description: post.excerpt,
      url: `/blog/${slug}`,
      publishedTime: post.isoDate,
      modifiedTime: post.isoDate,
      authors: ["Kevio Labs"],
      section: post.category,
      images: [{ url: cover, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [cover],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blog.posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={blogPostSchema(post)} />
      <BlogArticle post={post} />
      <Contact />
    </>
  );
}
