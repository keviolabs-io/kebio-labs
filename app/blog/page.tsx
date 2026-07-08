import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BlogList from "@/components/BlogList";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <PageHeader
        label="Le journal"
        title="Idées &"
        titleAccent="coulisses"
        intro="Nos réflexions sur le design, le développement et la construction de marques."
      />
      <BlogList />
    </>
  );
}
