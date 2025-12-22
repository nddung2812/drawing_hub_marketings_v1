import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    company: "TechCorp",
    image: "SJ",
    content: "DrawingHub has completely transformed our design workflow. The real-time collaboration features are game-changing!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    company: "DesignStudio",
    image: "MC",
    content: "The AI-powered tools save us hours every week. It's like having an extra team member who never sleeps.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Freelance Illustrator",
    company: "Independent",
    image: "ER",
    content: "As a freelancer, DrawingHub gives me professional-grade tools without the enterprise price tag. Absolutely love it!",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "UX Lead",
    company: "StartupXYZ",
    image: "DK",
    content: "The template library is incredible. We can prototype ideas in minutes instead of hours. Highly recommend!",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "Art Director",
    company: "Creative Agency",
    image: "LA",
    content: "Best design tool we've used. The interface is intuitive and the performance is outstanding even with complex projects.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Graphic Designer",
    company: "BrandCo",
    image: "JW",
    content: "DrawingHub's cloud storage and version control have saved our projects multiple times. It's a lifesaver!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Loved by creators worldwide
          </h2>
          <p className="text-xl text-muted-foreground">
            See what our community has to say about DrawingHub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="pt-6">
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
                <p className="text-foreground mb-6">{testimonial.content}</p>

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
          ))}
        </div>
      </div>
    </section>
  );
}

