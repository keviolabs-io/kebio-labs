"use client";

import { motion } from "framer-motion";
import { blog } from "@/lib/content";
import Media from "@/components/Media";
import { staggerContainer, staggerItem } from "@/components/anim/Reveal";

export default function BlogList() {
  return (
    <section className="px-6 pb-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto grid max-w-[1400px] gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
      >
        {blog.posts.map((post) => (
          <motion.article key={post.slug} variants={staggerItem} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <Media
                src={post.image}
                alt={post.title}
                className="aspect-[4/3] w-full"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-5 flex items-center gap-3 text-xs text-muted-dark">
              <span className="rounded-full border border-border px-3 py-1 text-muted">
                {post.category}
              </span>
              <span>{post.date}</span>
            </div>
            <h3 className="mt-4 text-xl font-medium leading-snug tracking-tight transition-colors group-hover:text-muted">
              {post.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
