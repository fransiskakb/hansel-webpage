import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { PortableTextBlock } from "@portabletext/types";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="display-3 mt-12 mb-3 text-balance">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-display mt-8 mb-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-display mt-6 mb-2">{children}</h4>,
    normal: ({ children }) => <p className="mt-4 leading-relaxed text-foreground/90">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-primary pl-5 italic text-foreground/85">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <a href={value?.href} className="text-primary underline underline-offset-2 hover:no-underline">
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mt-4 list-disc list-outside ml-6 space-y-2 text-foreground/90">{children}</ul>,
    number: ({ children }) => <ol className="mt-4 list-decimal list-outside ml-6 space-y-2 text-foreground/90">{children}</ol>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const url = urlFor(value).width(1600).url();
      return (
        <figure className="my-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted">
            <Image src={url} alt={value.alt || ""} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
          </div>
          {value.alt && <figcaption className="mt-2 text-sm text-muted-foreground">{value.alt}</figcaption>}
        </figure>
      );
    },
  },
};

export function PostBody({ body }: { body: PortableTextBlock[] }) {
  return <PortableText value={body} components={components} />;
}
