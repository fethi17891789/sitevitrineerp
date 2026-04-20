import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sitevitrineerp.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Vous pourrez ajouter d'autres pages ici plus tard (ex: /contact, /tarifs)
  ];
}
