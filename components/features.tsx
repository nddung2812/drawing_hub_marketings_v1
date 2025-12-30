"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6M9 8h6m-8 13h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Title-block metadata extraction",
    description: "Extract drawing number, title, revision, discipline/categories, and other key fields from PDFs and scans.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01" />
      </svg>
    ),
    title: "Bulk workflows",
    description: "Bulk search, bulk extraction, mark verified, and save-to-db flows to standardize metadata across many drawings.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l7 4v6c0 5-3 8-7 8s-7-3-7-8V7l7-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Human verification + auditability",
    description: "Track verification status and audit history so you know what's confirmed by humans vs AI and why it changed.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M6 7v10a4 4 0 004 4h4a4 4 0 004-4V7" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11h8M8 15h6" />
      </svg>
    ),
    title: "Scales across large drawing sets",
    description: "Run batch pipelines (workers/queues) with retries and consistency instead of relying on manual effort.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11a4 4 0 100-8 4 4 0 000 8z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 16h1" />
      </svg>
    ),
    title: "Find related drawings fast",
    description: "Group revisions, dedupe near-duplicates, and find related drawings with title-block similarity search.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
      </svg>
    ),
    title: "Downstream automation-ready",
    description: "Once metadata is structured, power reports, dashboards, compliance checks, and completeness scoring.",
  },
];

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  return (
    <Card className="border-border hover:shadow-lg transition-shadow flex-shrink-0 w-[340px] sm:w-[380px] select-none">
      <CardHeader>
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
          {feature.icon}
        </div>
        <CardTitle>{feature.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">
          {feature.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export function Features() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const handleDragStart = useCallback((clientX: number) => {
    if (!trackRef.current) return;

    // Clear any pending resume timeout
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }

    setIsDragging(true);
    setIsPaused(true);
    setStartX(clientX);

    // Get current transform position
    const transform = window.getComputedStyle(trackRef.current).transform;
    const matrix = new DOMMatrix(transform);
    setScrollLeft(matrix.m41);
  }, []);

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDragging || !trackRef.current) return;

    const x = clientX;
    const walk = x - startX;
    trackRef.current.style.transform = `translateX(${scrollLeft + walk}px)`;
  }, [isDragging, startX, scrollLeft]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);

    // Resume animation after 2 seconds of inactivity
    resumeTimeoutRef.current = setTimeout(() => {
      if (trackRef.current) {
        // Reset transform to let CSS animation take over
        trackRef.current.style.transform = '';
      }
      setIsPaused(false);
    }, 2000);
  }, []);

  // Touch events
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  }, [handleDragStart]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  }, [handleDragMove]);

  const handleTouchEnd = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  // Mouse events (for desktop drag support)
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  }, [handleDragStart]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  }, [handleDragMove]);

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      handleDragEnd();
    }
  }, [isDragging, handleDragEnd]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      handleDragEnd();
    }
  }, [isDragging, handleDragEnd]);

  return (
    <section id="features" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Built for drawing operations at scale
          </h2>
          <p className="text-xl text-muted-foreground">
            Convert &ldquo;dark data&rdquo; into trustworthy, searchable metadata—then standardize it with bulk workflows.
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        className="relative cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div
          ref={trackRef}
          className={`flex gap-6 ${isPaused ? '' : 'animate-carousel'}`}
          style={{ touchAction: 'pan-y' }}
        >
          {/* First set of cards */}
          {features.map((feature, index) => (
            <FeatureCard key={`first-${index}`} feature={feature} />
          ))}
          {/* Duplicate set for seamless loop */}
          {features.map((feature, index) => (
            <FeatureCard key={`second-${index}`} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

