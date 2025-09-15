import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, FileText } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: TrendingUp,
      team: "Marketing",
      title: "Campaign QA & Ad Spend Alerts",
      description: "Automatically validate campaign setups, monitor ad spend thresholds, and alert teams before budgets are exceeded.",
      benefits: ["Prevent overspend", "Catch errors early", "Save 8+ hours/week"],
      recipe: "Marketing Campaign Monitor"
    },
    {
      icon: Users,
      team: "Analytics",
      title: "Dashboard to Presentation Pipeline",
      description: "Transform raw dashboard data into presentation-ready insights with automated formatting and delivery to stakeholders.",
      benefits: ["Consistent reporting", "Automated delivery", "Save 12+ hours/week"],
      recipe: "Analytics Report Builder"
    },
    {
      icon: FileText,
      team: "Operations",
      title: "Documentation & Approval Workflows",
      description: "Streamline process documentation, route approvals automatically, and maintain compliance without manual overhead.",
      benefits: ["Faster approvals", "Better compliance", "Save 6+ hours/week"],
      recipe: "Ops Process Automation"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for <span className="text-gradient">Your Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how different teams use OpsFoundry to eliminate repetitive work and focus on strategic initiatives.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card key={index} className="card-feature relative overflow-hidden">
              {/* Team Badge */}
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {useCase.team}
                </Badge>
              </div>
              
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <useCase.icon className="h-6 w-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {useCase.description}
              </p>
              
              {/* Benefits */}
              <div className="space-y-2 mb-6">
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              {/* Recipe Name */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">Recipe Available:</span>
                  <span className="text-sm text-muted-foreground">{useCase.recipe}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">
            Does this sound like your team?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're building OpsFoundry based on real problems faced by 10-50 person companies. Help us understand if we're on the right track.
          </p>
          <button className="btn-hero">
            Share Your Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;