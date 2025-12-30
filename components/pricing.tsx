import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Pilot",
    price: "Custom",
    description: "Validate extraction quality on your drawings",
    features: [
      "Batch upload + processing",
      "Title-block metadata extraction",
      "Reviewer queue for low-confidence fields",
      "Export to CSV/JSON",
      "Basic audit history",
    ],
    cta: "Start a Pilot",
    popular: false,
  },
  {
    name: "Team",
    price: "Custom",
    description: "Standardize metadata across projects",
    features: [
      "Everything in Pilot",
      "Bulk search + bulk actions",
      "Verified vs AI status tracking",
      "Revision grouping + dedupe helpers",
      "Automated retries + progress visibility",
      "Integrations (database / API)",
    ],
    cta: "Request a Demo",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For regulated environments and large volumes",
    features: [
      "Everything in Team",
      "SSO / SAML",
      "Advanced audit + governance",
      "VPC / private deployment options",
      "SLA + dedicated support",
      "Custom integrations + onboarding",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Plans that scale with drawing volume
          </h2>
          <p className="text-xl text-muted-foreground">
            Start with a pilot, then scale extraction + verification across projects and teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "border-primary shadow-xl scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Not sure where to start? We’ll recommend a rollout based on your drawing volume and governance needs.</p>
        </div>
      </div>
    </section>
  );
}

