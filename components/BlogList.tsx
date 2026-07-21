"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blog } from "@/lib/content";
import Media from "@/components/Media";
import BlogCover from "@/components/blog/BlogCover";
import { staggerContainer, staggerItem } from "@/components/anim/Reveal";

// Halo blanc subtil en haut et en bas de la carte (repris de l'original).
const CARD_BG =
  "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 14.5%, rgba(255,255,255,0) 85.5%, rgba(255,255,255,0.12) 100%)";

// Ordre d'affichage des articles sur la page blog.
const ORDER = [
  "integrer-ia-entreprise-2026",
  "site-web-performant",
  "creer-application-entreprise",
];
const orderedPosts = [...blog.posts].sort(
  (a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug)
);

export default function BlogList() {
  return (
    <section className="px-6 pb-16 md:pb-28">
      {/* grid-cols-1 explicite : sinon la colonne « auto » prend la largeur
          intrinsèque de l'image et déborde tout l'écran sur mobile. */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {orderedPosts.map((post) => (
          <motion.article
            key={post.slug}
            variants={staggerItem}
            className="group min-w-0"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="flex h-full flex-col gap-8 overflow-hidden rounded-[40px] px-4 pb-4 pt-11 md:gap-12 md:rounded-[56px] md:pt-14"
              style={{ background: CARD_BG }}
            >
              {/* Haut : titre + excerpt (gauche) — Date (droite) */}
              <div className="flex items-start justify-between gap-4 px-2">
                <div className="min-w-0">
                  <h3 className="text-2xl font-medium leading-tight tracking-tight text-white">
                    {post.cardTitle}{" "}
                    <span className="text-[#999]">{post.cardAccent}</span>
                  </h3>
                  <p className="mt-3 truncate text-sm text-[#999]">
                    {post.excerpt}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs text-[#8a8a8a]">Date</p>
                  <p className="mt-2 whitespace-nowrap text-sm text-white/90">
                    {post.date}
                  </p>
                </div>
              </div>

              {/* Bas : image en cover, très arrondie (même format 5:4 que desktop) */}
              <div className="overflow-hidden rounded-[26px] md:rounded-[48px]">
                {post.image ? (
                  <Media
                    src={post.image}
                    alt={post.title}
                    className="aspect-[5/4] w-full"
                    imgClassName="transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <BlogCover
                    category={post.category}
                    className="aspect-[5/4] w-full transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                )}
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
