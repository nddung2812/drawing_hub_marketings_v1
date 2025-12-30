"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Alyssa M.",
    role: "Document Control Lead",
    company: "EPC Contractor",
    image: "AM",
    content:
      "We finally have consistent metadata across thousands of legacy drawings. Reviewers only touch the fields that need attention, and everything is auditable.",
    rating: 5,
  },
  {
    name: "Michael C.",
    role: "Engineering Manager",
    company: "Manufacturing",
    image: "MC",
    content:
      "Finding the right drawing used to be painful. Now drawings are searchable by number, title, and revision—and related drawings are easy to group.",
    rating: 5,
  },
  {
    name: "Emily R.",
    role: "QA/QC Coordinator",
    company: "Utilities",
    image: "ER",
    content:
      "The verified vs AI status makes it obvious what's been checked. That trust layer is huge when you're using the data for governance and reporting.",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Asset Information Manager",
    company: "Energy",
    image: "DK",
    content:
      "Once metadata is structured, everything downstream gets easier—dashboards, completeness checks, deduping, and revision tracking all become possible.",
    rating: 5,
  },
  {
    name: "Lisa A.",
    role: "Engineering Systems",
    company: "Owner/Operator",
    image: "LA",
    content:
      "Batch processing with progress and retries lets us standardize how we ingest drawings. It's not a one-off script—it's an operational workflow.",
    rating: 5,
  },
  {
    name: "James W.",
    role: "Project Controls",
    company: "Infrastructure",
    image: "JW",
    content:
      "The ROI is straightforward: less manual admin, fewer mistakes, and much faster retrieval. We stopped re-keying title blocks into spreadsheets.",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update container width on mount and resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    e.preventDefault(); // Prevent text selection
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Swipe threshold: 50px
    if (translateX > 50) {
      handlePrevious();
    } else if (translateX < -50) {
      handleNext();
    }

    setTranslateX(0);
  };

  const getCardPosition = (index: number) => {
    const diff = index - currentIndex;
    return diff;
  };

  const getCardStyle = (index: number) => {
    const position = getCardPosition(index);
    const baseTranslate = position * 100;
    const dragOffset = isDragging ? (translateX / containerWidth) * 100 : 0;

    // Only show cards that are within range of -1, 0, 1 positions
    const isVisible = Math.abs(position) <= 1;

    let scale = 1;
    let opacity = 1;
    let zIndex = 10;

    if (position === 0) {
      // Center card - main focus
      scale = 1;
      opacity = 1;
      zIndex = 20;
    } else if (Math.abs(position) === 1) {
      // Side cards
      scale = 0.85;
      opacity = 0.5;
      zIndex = 10;
    } else {
      // Hidden cards
      opacity = 0;
      scale = 0.7;
      zIndex = 0;
    }

    return {
      transform: `translateX(calc(${baseTranslate + dragOffset}% + ${position * 2}rem)) scale(${scale})`,
      opacity: isVisible ? opacity : 0,
      zIndex,
      pointerEvents: position === 0 ? ('auto' as const) : ('none' as const),
    };
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Built for engineering documentation teams
          </h2>
          <p className="text-xl text-muted-foreground">
            What teams say after turning drawings into searchable, trusted data
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Container */}
          <div
            ref={containerRef}
            className="relative h-[350px] sm:h-[380px] touch-pan-y select-none cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="absolute top-0 left-1/2 w-full max-w-md -translate-x-1/2 transition-all duration-300 ease-out px-4"
                style={getCardStyle(index)}
              >
                <Card className="border-border h-full shadow-lg">
                  <CardContent className="pt-6 h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-foreground mb-6 grow text-base leading-relaxed">{testimonial.content}</p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                        {testimonial.image}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation Buttons and Dots */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/30 hover:bg-primary/50"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
