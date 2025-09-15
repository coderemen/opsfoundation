import { Card } from "@/components/ui/card";
import { Workflow, Settings, Link, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Workflow,
      title: "Pre-Built Recipes",
      description: "50+ proven automation templates for marketing campaigns, analytics reporting, and operational workflows",
      highlight: "No setup required"
    },
    {
      icon: Settings,
      title: "Self-Service Platform",
      description: "Backstage-inspired interface that non-technical teams actually want to use",
      highlight: "Zero learning curve"
    },
    {
      icon: Link,
      title: "Smart Integrations",
      description: "Connect Slack, Google Analytics, HubSpot, and more with simple forms",
      highlight: "Works with your tools"
    },
    {
      icon: TrendingUp,
      title: "Cost Tracking",
      description: "Measure OpEx savings and hours recovered per automation",
      highlight: "Prove ROI instantly"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to <span className="text-gradient">Scale Operations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built specifically for marketing, analytics, and operations teams who want developer-quality automation without the complexity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="card-feature group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">
            Interested in helping us validate this concept?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're exploring if teams like yours would benefit from this type of automation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero">Share Your Interest</button>
            <button className="btn-secondary">Tell Us Your Pain Points</button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;