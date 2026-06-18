import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { MotionReveal } from "@/components/MotionReveal";
import type { RichTextBlock } from "@/lib/types";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="display-2 mt-12 mb-4 text-balance">{children}</h2>,
    h3: ({ children }) => <h3 className="display-3 mt-10 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-display mt-8 mb-2">{children}</h4>,
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
};

export function RichText({ block }: { block: RichTextBlock }) {
  return (
    <section className="container-page py-12 md:py-16">
      <MotionReveal>
        <div className="max-w-3xl mx-auto prose-body">
          <PortableText value={block.richBody} components={components} />
        </div>
      </MotionReveal>
    </section>
  );
}
