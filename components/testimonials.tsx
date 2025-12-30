import { Card, CardContent } from "@/components/ui/card";

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
      "The verified vs AI status makes it obvious what’s been checked. That trust layer is huge when you’re using the data for governance and reporting.",
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
      "Batch processing with progress and retries lets us standardize how we ingest drawings. It’s not a one-off script—it's an operational workflow.",
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
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Built for engineering documentation teams
          </h2>
          <p className="text-xl text-muted-foreground">
            What teams say after turning drawings into searchable, trusted data
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

