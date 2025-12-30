"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useMemo, useRef, useState } from "react";

const steps = [
  {
    title: "Ingest drawings in bulk",
    description:
      "Upload PDFs and scans from project folders, vendors, or exports from your EDMS—then process thousands of files consistently.",
  },
  {
    title: "Extract title-block metadata",
    description:
      "Automatically capture drawing number, title, revision, discipline/categories, and other key fields so drawings become searchable data.",
  },
  {
    title: "Verify with humans + track changes",
    description:
      "Route low-confidence fields to reviewers, mark records as verified, and keep an audit history so everyone knows what changed and why.",
  },
  {
    title: "Publish structured data downstream",
    description:
      "Save to your database or systems so you can power search, dashboards, compliance checks, deduping, and revision grouping.",
  },
];

function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) setInView(true);
    }, options);

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [options]);

  return { ref, inView };
}

function ConnectorArrow({
  direction,
  active,
  delayMs,
}: {
  direction: "right" | "down";
  active: boolean;
  delayMs: number;
}) {
  const isRight = direction === "right";
  return (
    <div
      className={[
        "pointer-events-none",
        "transition-all duration-700 ease-out",
        active ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-2 translate-y-2",
        isRight
          ? "hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2"
          : "flex md:hidden justify-center py-2",
      ].join(" ")}
      style={{ transitionDelay: `${delayMs}ms` }}
      aria-hidden="true"
    >
      {isRight ? (
        <svg width="40" height="14" viewBox="0 0 40 14" fill="none">
          <path
            d="M1 7H33"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M33 1L39 7L33 13"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="14" height="32" viewBox="0 0 14 32" fill="none">
          <path
            d="M7 1V25"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M1 25L7 31L13 25"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

export function HowItWorks() {
  const gradientClasses = useMemo(
    () => [
      "from-primary/12 via-purple-500/10 to-pink-500/10",
      "from-emerald-500/10 via-cyan-500/10 to-primary/10",
      "from-amber-500/12 via-orange-500/10 to-rose-500/10",
      "from-violet-500/12 via-fuchsia-500/10 to-primary/10",
    ],
    []
  );

  const { ref: sectionRef, inView } = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">How it works</h2>
          <p className="text-xl text-muted-foreground">
            A simple pipeline that turns drawing archives into trusted, AI-ready data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const delayMs = index * 140;
            const active = inView;
            const gradient = gradientClasses[index % gradientClasses.length];

            return (
              <div key={step.title} className="relative">
                <Card
                  className={[
                    "group",
                    "relative overflow-hidden",
                    "border-border",
                    "transition-all duration-700 ease-out",
                    "hover:-translate-y-1 hover:shadow-xl",
                    active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                  ].join(" ")}
                  style={{ transitionDelay: `${delayMs}ms` }}
                >
                  {/* Gradient background */}
                  <div
                    className={[
                      "absolute inset-0",
                      "bg-gradient-to-br",
                      gradient,
                      "opacity-70",
                      "transition duration-700",
                      "group-hover:opacity-90",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform duration-700 group-hover:scale-110"
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div className="relative">
                    <CardHeader className="gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-background/70 border border-border/60 backdrop-blur text-foreground flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>
                        <CardTitle className="text-lg leading-tight">{step.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </div>
                </Card>

                {/* Connector arrows */}
                {index < steps.length - 1 && (
                  <>
                    <ConnectorArrow direction="right" active={active} delayMs={delayMs + 240} />
                    <ConnectorArrow direction="down" active={active} delayMs={delayMs + 240} />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


