import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Award, Zap, Shield } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-premium border border-primary/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <Award className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Investment in Reliability</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Recipe library access with AI monitoring included. No hidden fees, no complicated tiers.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="card-premium relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Badge className="bg-accent text-accent-foreground px-6 py-2 text-sm font-semibold">
                Most Popular
              </Badge>
            </div>
            
            <div className="absolute inset-0 bg-gradient-hero opacity-5 rounded-2xl"></div>
            <div className="relative z-10 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Pricing Info */}
                <div>
                  <h3 className="text-3xl font-bold mb-2">OpsFoundry Recipe Platform</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-bold text-primary">$10</span>
                    <span className="text-xl text-muted-foreground ml-2">/user/month</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Everything you need to automate your team's workflows with enterprise-grade reliability guarantees.
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {[
                      "50+ battle-tested automation recipes",
                      "AI monitoring & proactive optimization",
                      "99.9% uptime SLA with real-time status",
                      "All integrations included (no add-ons)",
                      "Recipe testing lab validation",
                      "Dedicated success manager (Enterprise)",
                      "Instant rollback & version control"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <Button className="btn-hero w-full group">
                      Try a Recipe Free
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      30-day free trial • No credit card required • Cancel anytime
                    </p>
                  </div>
                </div>
                
                {/* Value Proposition */}
                <div className="space-y-6">
                  <div className="bg-success/10 border border-success/20 rounded-xl p-6">
                    <h4 className="font-semibold text-success mb-2 flex items-center">
                      <Zap className="h-4 w-4 mr-2" />
                      ROI Calculator
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Hours saved per week:</span>
                        <span className="font-medium">26+ hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Cost per hour saved:</span>
                        <span className="font-medium">~$0.38</span>
                      </div>
                      <div className="border-t border-success/20 pt-2 flex justify-between">
                        <span className="font-semibold text-success">Monthly savings:</span>
                        <span className="font-bold text-success">$2,600+</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                    <h4 className="font-semibold text-primary mb-3 flex items-center">
                      <Shield className="h-4 w-4 mr-2" />
                      Enterprise Guarantees
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>99.9% uptime SLA with monitoring</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Recipe performance guarantees</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Migration support & training included</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Need custom recipes for your unique workflows?
                    </p>
                    <Button variant="link" className="text-primary p-0 h-auto">
                      Talk to Recipe Engineering Team →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Additional Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">30</span>
              </div>
              <h4 className="font-semibold mb-1">Day Free Trial</h4>
              <p className="text-sm text-muted-foreground">Full recipe library access</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-success font-bold">0</span>
              </div>
              <h4 className="font-semibold mb-1">Setup Fee</h4>
              <p className="text-sm text-muted-foreground">Start automating immediately</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-accent font-bold">∞</span>
              </div>
              <h4 className="font-semibold mb-1">Recipe Executions</h4>
              <p className="text-sm text-muted-foreground">No usage limits or overages</p>
            </div>
          </div>

          {/* Competitive Comparison */}
          <div className="mt-16 p-8 bg-muted/30 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 text-center">
              Why Teams Choose OpsFoundry Over DIY Tools
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-destructive mb-3">DIY Automation (Zapier, etc.)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-muted-foreground">$29/month + per-task fees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-muted-foreground">You maintain everything</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-muted-foreground">No reliability guarantees</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-success mb-3">OpsFoundry Recipe Platform</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-success"></Check>
                    <span>$10/month flat rate, no overages</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-success"></Check>
                    <span>We maintain it, you use it</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-success"></Check>
                    <span>99.9% uptime SLA guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;