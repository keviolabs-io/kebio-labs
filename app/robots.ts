import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Pages légales : suivies mais non indexées.
      disallow: ["/mentions-legales", "/confidentialite", "/cgv"],
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
