import { JsonLd } from "@/components/common/JsonLd";
import { absoluteUrl } from "@/lib/seo";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: item.href ? absoluteUrl(item.href) : undefined,
        })),
      }}
    />
  );
}
