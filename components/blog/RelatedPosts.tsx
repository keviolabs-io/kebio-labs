import Link from "next/link";
import { blog } from "@/lib/content";
import Media from "@/components/Media";
import BlogCover from "@/components/blog/BlogCover";

/** Bloc « À lire aussi » — relie les articles entre eux (maillage interne). */
export default function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const others = blog.posts.filter((p) => p.slug !== currentSlug).slice(0, 2);
  if (!others.length) return null;

  return (
    <section className="px-6 pb-12 md:pb-20">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-dark">
          À lire aussi
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {others.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block min-w-0"
            >
              <div className="overflow-hidden rounded-2xl border border-border">
                {post.image ? (
                  <Media
                    src={post.image}
                    alt={post.title}
                    className="aspect-[16/9] w-full"
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <BlogCover category={post.category} className="aspect-[16/9] w-full" />
                )}
              </div>
              <div className="mt-4 flex items-center gap-3 text-xs text-muted-dark">
                <span className="rounded-full border border-border px-3 py-1 text-muted">
                  {post.category}
                </span>
                <span>{post.readingTime}</span>
              </div>
              <h3 className="mt-3 text-lg font-medium leading-snug tracking-tight text-foreground transition-colors group-hover:text-muted">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
