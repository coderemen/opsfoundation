import { Card } from "@/components/ui/card";
import { X, Check, Zap, Wrench, Users, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const CompetitiveDifferentiation = () => {
  const comparisons = [
    {
      feature: "Maintenance",
      zapier: "You maintain it",
      zapierIcon: X,
      opsFoundry: "We maintain it",
      opsFoundryIcon: Check
    },
    {
      feature: "Reliability",
      zapier: "Hope it works",
      zapierIcon: X,
      opsFoundry: "Guaranteed to work",
      opsFoundryIcon: Check
    },
    {
      feature: "Business Context",
      zapier: "Generic triggers",
      zapierIcon: X,
      opsFoundry: "Business-aware intelligence",
      opsFoundryIcon: Check
    },
    {
      feature: "Support",
      zapier: "Community forums",
      zapierIcon: X,
      opsFoundry: "Recipe success team",
      opsFoundryIcon: Check
    },
    {
      feature: "Monitoring",
      zapier: "Manual checking",
      zapierIcon: X,
      opsFoundry: "AI-powered 24/7",
      opsFoundryIcon: Check
    },
    {
      feature: "Testing",
      zapier: "Test in production",
      zapierIcon: X,
      opsFoundry: "50+ scenario validation",
      opsFoundryIcon: Check
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-warning/10 border border-warning/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-warning" />
            <span className="text-sm font-medium text-warning">Why Not Just Use...</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Zapier, n8n, Power Automate?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Great tools for developers. Not designed for business teams who need reliability, not complexity.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="card-premium overflow-hidden">
            <div className="absolute inset-0 bg-gradient-hero opacity-5 rounded-2xl"></div>
            <div className="relative z-10">
              {/* Header */}
              <div className="grid grid-cols-3 gap-4 p-6 border-b border-border/50">
                <div className="text-center">
                  <h3 className="font-bold text-lg">Feature</h3>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Wrench className="h-5 w-5 text-muted-foreground" />
                    <h3 className="font-bold text-lg text-muted-foreground">DIY Tools</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Zapier, n8n, Power Automate</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Bot className="h-5 w-5 text-primary" />
                    <h3 className="font-bold text-lg text-primary">OpsFoundry</h3>
                  </div>
                  <p className="text-xs text-accent mt-1">Recipe Platform</p>
                </div>
              </div>

              {/* Comparison Rows */}
              <div className="divide-y divide-border/50">
                {comparisons.map((comparison, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 p-6 hover:bg-card/20 transition-colors">
                    <div className="flex items-center">
                      <span className="font-medium">{comparison.feature}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <comparison.zapierIcon className="h-5 w-5 text-destructive" />
                      <span className="text-sm text-muted-foreground">{comparison.zapier}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <comparison.opsFoundryIcon className="h-5 w-5 text-success" />
                      <span className="text-sm font-medium">{comparison.opsFoundry}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Key Differentiators */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Why Teams Choose Generic Tools</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-destructive/5 rounded-lg border border-destructive/10">
                <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm text-destructive mb-1">They're familiar</div>
                  <div className="text-xs text-muted-foreground">Everyone's heard of Zapier</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-destructive/5 rounded-lg border border-destructive/10">
                <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm text-destructive mb-1">Low upfront cost</div>
                  <div className="text-xs text-muted-foreground">Until maintenance costs pile up</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-destructive/5 rounded-lg border border-destructive/10">
                <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm text-destructive mb-1">Flexibility</div>
                  <div className="text-xs text-muted-foreground">Which becomes complexity quickly</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Why Teams Switch to OpsFoundry</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-success/5 rounded-lg border border-success/10">
                <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm text-success mb-1">Guaranteed reliability</div>
                  <div className="text-xs text-muted-foreground">99.9% uptime SLA with monitoring</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-success/5 rounded-lg border border-success/10">
                <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm text-success mb-1">Business context</div>
                  <div className="text-xs text-muted-foreground">AI understands your workflows</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-success/5 rounded-lg border border-success/10">
                <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm text-success mb-1">We handle maintenance</div>
                  <div className="text-xs text-muted-foreground">Focus on business, not debugging</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Migration Support */}
        <div className="text-center">
          <div className="card-premium max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-hero opacity-5 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Already Using Zapier or Others?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our migration team will help you transition your existing automations to reliable recipes. No data loss, no downtime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero">Schedule Migration Assessment</Button>
                <Button className="btn-secondary">Compare Side-by-Side</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveDifferentiation;