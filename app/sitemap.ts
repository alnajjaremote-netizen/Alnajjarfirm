import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://alnajjarfirmlb.com";
  return [
    { url: `${base}/`,               lastModified: new Date("2026-05-19"), changeFrequency: "weekly",  priority: 1   },
    { url: `${base}/process`,        lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/faq`,            lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contacts`,       lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: new Date("2026-01-01"), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms-conditions`, lastModified: new Date("2026-01-01"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
