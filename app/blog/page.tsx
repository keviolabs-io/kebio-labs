import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/BlogList";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogList />
    </>
  );
}
