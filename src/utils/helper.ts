import { siteData } from "@/utils/constants";

export function jsonLDGen({ url }: { url: string }) {
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${siteData.title}",
      "url": "${url}"
      }
    </script>`;
}
