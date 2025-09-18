import { Card } from "@/components/ui/card";
import { Shield, Clock, FlaskConical, RotateCcw, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const TrustReliability = () => {
  const promises = [
    {
      icon: Clock,
      title: "99.9% Uptime SLA",
      description: "Real-time status dashboard with guaranteed availability",
      highlight: "Enterprise-Grade"
    },
    {
      icon: FlaskConical,
      title: "Recipe Testing Lab",
      description: "Every workflow tested across 50+ business scenarios",
      highlight: "Battle-Tested"
    },
    {
      icon: RotateCcw,
      title: "Version Control",
      description: "Rollback to previous versions instantly when needed",
      highlight: "Risk-Free"
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "SOC 2, GDPR, HIPAA configurations available",
      highlight: "Secure"
    },
    {
      icon: Users,
      title: "Business Continuity",
      description: "Redundancy and disaster recovery built-in",
      highlight: "Always-On"
    },
    {
      icon: Award,
      title: "Success Team",
      description: "Dedicated success manager with every enterprise plan",
      highlight: "White-Glove"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <Shield className="h-4 w-4 text-success" />
            <span className="text-sm font-medium text-success">Enterprise-Grade Promises</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trust & <span className="text-gradient">Reliability</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just deliver recipes - we guarantee they work. Every automation comes with enterprise-grade reliability promises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {promises.map((promise, index) => (
            <Card key={index} className="card-feature text-center group">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-success/10 text-success border border-success/20 rounded-full text-xs font-medium">
                  {promise.highlight}
                </span>
              </div>
              
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <promise.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{promise.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {promise.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Real-time Status Dashboard Preview */}
        <div className="card-premium mb-16 max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-hero opacity-5 rounded-2xl"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Real-Time Recipe Health Dashboard
              </h3>
              <p className="text-muted-foreground">
                Monitor all your automation recipes from one unified dashboard
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card/30 rounded-xl p-6 text-center border border-border/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                </div>
                <div className="text-2xl font-bold text-success mb-1">24</div>
                <div className="text-sm text-muted-foreground">Recipes Running</div>
              </div>
              
              <div className="bg-card/30 rounded-xl p-6 text-center border border-border/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">99.97%</div>
                <div className="text-sm text-muted-foreground">Uptime This Month</div>
              </div>
              
              <div className="bg-card/30 rounded-xl p-6 text-center border border-border/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent mb-1">847</div>
                <div className="text-sm text-muted-foreground">Hours Saved</div>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="text-center">
          <div className="card-premium max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-hero opacity-5 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-success" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                The OpsFoundry Guarantee
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                If any recipe fails to deliver the promised results within 30 days, we'll refund your money and help you find a solution that works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero">Start Risk-Free Trial</Button>
                <Button className="btn-secondary">View SLA Details</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustReliability;