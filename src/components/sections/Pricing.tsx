import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">💡 Concept Validation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Start automating your workflows today. No hidden fees, no complicated tiers.
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto bg-muted/50 rounded-lg p-3">
            <strong>Note:</strong> We're currently validating this concept with potential users. 
            The product is in early development - pricing shown is our target for launch.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-card to-primary/5">
            {/* Popular Badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Badge className="bg-accent text-accent-foreground px-6 py-1">
                Most Popular
              </Badge>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Pricing Info */}
                <div>
                  <h3 className="text-3xl font-bold mb-2">OpsFoundry Pro</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-bold text-primary">$10</span>
                    <span className="text-xl text-muted-foreground ml-2">/user/month</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Everything you need to automate your team's workflows and scale operations efficiently.
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {[
                      "50+ pre-built automation recipes",
                      "Unlimited workflow executions",
                      "All integrations included",
                      "Cost tracking & ROI analytics",
                      "Team collaboration features",
                      "Priority email support",
                      "Advanced scheduling options"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col space-y-3">
            <Button className="btn-hero w-full group">
              Express Interest
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Help us validate this concept • No commitment required
            </p>
                  </div>
                </div>
                
                {/* Value Proposition */}
                <div className="space-y-6">
                  <div className="bg-success/10 border border-success/20 rounded-xl p-6">
                    <h4 className="font-semibold text-success mb-2">ROI Calculator</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Hours saved per week:</span>
                        <span className="font-medium">15+ hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Cost per hour saved:</span>
                        <span className="font-medium">~$0.67</span>
                      </div>
                      <div className="border-t border-success/20 pt-2 flex justify-between">
                        <span className="font-semibold text-success">Monthly savings:</span>
                        <span className="font-bold text-success">$1,000+</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                    <h4 className="font-semibold text-primary mb-3">What's Included</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Instant setup in under 5 minutes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Recipe library updated weekly</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Dedicated onboarding specialist</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Interested in this concept?
            </p>
            <Button variant="link" className="text-primary p-0 h-auto">
              Share your thoughts →
            </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">14</span>
              </div>
              <h4 className="font-semibold mb-1">Day Free Trial</h4>
              <p className="text-sm text-muted-foreground">Full access, no limitations</p>
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
              <h4 className="font-semibold mb-1">Unlimited Workflows</h4>
              <p className="text-sm text-muted-foreground">Scale without limits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;