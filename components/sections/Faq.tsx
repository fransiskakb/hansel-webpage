import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionReveal } from "@/components/MotionReveal";
import type { FaqBlock } from "@/lib/types";

export function Faq({ block }: { block: FaqBlock }) {
  return (
    <section className="container-page py-20 md:py-24">
      <div className="max-w-3xl mx-auto">
        {block.eyebrow && (
          <MotionReveal>
            <p className="eyebrow mb-3">{block.eyebrow}</p>
          </MotionReveal>
        )}
        {block.headline && (
          <MotionReveal delay={0.05}>
            <h2 className="display-2 mb-10 text-balance">{block.headline}</h2>
          </MotionReveal>
        )}
        <MotionReveal delay={0.1}>
          <Accordion type="single" collapsible className="border-t border-border">
            {block.items?.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionReveal>
      </div>
    </section>
  );
}
