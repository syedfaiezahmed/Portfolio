import { MetadataRoute } from "next";

const SITE_URL = "https://syedfaiezahmed.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/blogs/artificialintelligence",
    "/blogs/cloudcomputing",
    "/blogs/cybersecurity",
    "/blogs/digitalmarketing",
    "/blogs/graphicdesigning",
    "/blogs/webdevelopmentblog",
  ];

  const currentDate = new Date().toISOString();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
