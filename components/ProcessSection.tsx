import type { ProcessStep } from "@/types";
import { resolveImagePath, accentLastWordParts } from "@/lib/utils";

interface ProcessSectionProps {
  steps: ProcessStep[];
}

function AccentLastWord({ text }: { text: string }) {
  const { rest, last } = accentLastWordParts(text);
  return (
    <>
      {rest && `${rest} `}
      <span className="accent-word">{last}</span>
    </>
  );
}

export default function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section className="section reveal">
      <h2>Our process</h2>
      <div className="process-list stagger-children">
        {steps.map((step) => (
          <article key={step.title} className="process-card">
            <h3 className="process-title">
              <AccentLastWord text={step.title} />
            </h3>
            <p className="process-text">{step.text}</p>
            {step.badges && step.badges.length > 0 && (
              <div className="process-badges">
                {step.badges.map((b, i) => (
                  <img
                    key={i}
                    src={resolveImagePath(b)}
                    alt={`badge ${i + 1}`}
                    loading="lazy"
                    width={64}
                    height={64}
                  />
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
