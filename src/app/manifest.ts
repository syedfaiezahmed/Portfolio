import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Syed Faiez Ahmed | AI-Enabled ERP & FinTech Developer",
    short_name: "Faiez Ahmed",
    description:
      "Portfolio of Syed Faiez Ahmed, AI-Enabled ERP & FinTech Developer specializing in ERP Systems, Accounting Software, AI Applications, SaaS Platforms, Business Automation and Enterprise Solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0c10",
    theme_color: "#000000",
    icons: [
      {
        src: "/images/hero-image.png",
        sizes: "192x192 512x512",
        type: "image/png",
      },
    ],
  };
}
