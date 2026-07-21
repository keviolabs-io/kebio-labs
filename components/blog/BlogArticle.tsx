import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/content";
import Media from "@/components/Media";
import BlogCover from "@/components/blog/BlogCover";

const LINK_CLS =
  "font-medium text-foreground underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white";

/**
 * Transforme les liens en syntaxe [texte](/lien) présents dans le texte
 * en vrais liens (internes = Next Link, externes = <a>). Sert au maillage interne.
 */
function renderRich(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const label = m[1];
    const href = m[2];
    if (href.startsWith("/")) {
      parts.push(
        <Link key={key++} href={href} className={LINK_CLS}>
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLS}
        >
          {label}
        </a>
      );
    }
    last = regex.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.map((p, idx) => <Fragment key={idx}>{p}</Fragment>);
}

/** Rendu d'un article de blog (en-tête + couverture + corps structuré). */
export default function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article className="px-6 pb-20 pt-28 md:pb-28 md:pt-40">
      {/* En-tête */}
      <div className="mx-auto max-w-[46rem]">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Le journal
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-dark">
          <span className="rounded-full border border-border px-3 py-1 text-muted">
            {post.category}
          </span>
          <span>{post.date}</span>
          <span aria-hidden>·</span>
          <span>{post.readingTime} de lecture</span>
        </div>

        <h1 className="mt-5 text-3xl font-medium leading-[1.1] tracking-tight text-foreground md:text-[2.9rem]">
          {post.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">{post.intro}</p>
      </div>

      {/* Couverture — même format 5:4 que la carte (aucun recadrage) */}
      <div className="mx-auto mt-10 max-w-[46rem] md:mt-12">
        {post.image ? (
          <Media
            src={post.image}
            alt={post.title}
            className="aspect-[5/4] w-full overflow-hidden rounded-3xl border border-border"
          />
        ) : (
          <BlogCover
            category={post.category}
            className="aspect-[5/4] w-full rounded-3xl border border-border"
          />
        )}
      </div>

      {/* Corps */}
      <div className="mx-auto mt-12 max-w-[46rem] space-y-6 md:mt-16">
        {post.content.map((block, i) => {
          switch (block.type) {
            case "h2":
              return (
                <h2
                  key={i}
                  className="pt-4 text-2xl font-medium tracking-tight text-foreground md:text-[1.7rem]"
                >
                  {block.text}
                </h2>
              );
            case "p":
              return (
                <p key={i} className="leading-relaxed text-muted">
                  {renderRich(block.text)}
                </p>
              );
            case "ul":
              return (
                <ul key={i} className="space-y-3">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-3 leading-relaxed text-muted">
                      <span
                        aria-hidden
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40"
                      />
                      <span>{renderRich(item)}</span>
                    </li>
                  ))}
                </ul>
              );
            case "quote":
              return (
                <blockquote
                  key={i}
                  className="border-l-2 border-white/25 pl-5 font-serif-italic text-xl leading-snug text-foreground/90"
                >
                  {block.text}
                </blockquote>
              );
            default:
              return null;
          }
        })}
      </div>
    </article>
  );
}
