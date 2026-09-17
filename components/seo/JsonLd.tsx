import { localBusinessJsonLd } from "@/lib/site";

export function JsonLd() {
  const data = {
    ...localBusinessJsonLd,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
