import { Card } from "@/components/ui/card";
import { ChefHat, TrendingUp, Users, BarChart3, Settings, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const recipeCollections = [
    {
      icon: TrendingUp,
      title: "Marketing Recipe Collection",
      recipes: [
        "Campaign Orchestration - Multi-touch campaigns that adapt to engagement",
        "Content Operations - Approval workflows that route around bottlenecks", 
        "Lead Intelligence - Scoring and routing with business rule validation",
        "Event Automation - Registration to follow-up with ROI tracking"
      ],
      highlight: "Battle-Tested",
      color: "primary"
    },
    {
      icon: Settings,
      title: "Operations Recipe Collection",
      recipes: [
        "Vendor Management - Onboarding to payment with compliance checks",
        "Resource Planning - Capacity monitoring with predictive alerts",
        "Quality Assurance - Process monitoring with exception handling",
        "Compliance Automation - Regulatory workflows with audit trails"
      ],
      highlight: "Enterprise-Ready",
      color: "accent"
    },
    {
      icon: Users,
      title: "People Operations Recipes",
      recipes: [
        "Talent Pipeline - Recruiting workflows with bias detection",
        "Employee Experience - Onboarding journeys that adapt to role/location",
        "Performance Management - Review cycles with fairness analytics",
        "Knowledge Management - Documentation workflows with freshness monitoring"
      ],
      highlight: "AI-Enhanced",
      color: "recipe"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence Recipes",
      recipes: [
        "Data Reliability - Quality monitoring with business impact scoring",
        "Insight Distribution - Stakeholder-specific reporting with narrative AI",
        "Anomaly Response - Alert workflows that distinguish signal from noise",
        "Decision Support - Data collection workflows for strategic questions"
      ],
      highlight: "Intelligence-First",
      color: "success"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-premium border border-primary/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <ChefHat className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Curated Recipe Collections</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recipes for Every <span className="text-gradient">Business Function</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each recipe is tested across 50+ business scenarios, monitored by AI, and comes with enterprise-grade reliability guarantees.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {recipeCollections.map((collection, index) => (
            <Card key={index} className="card-recipe group relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 bg-${collection.color}/10 text-${collection.color} border border-${collection.color}/20 rounded-full text-xs font-medium`}>
                  {collection.highlight}
                </span>
              </div>
              
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-12 h-12 bg-${collection.color}/20 rounded-xl flex items-center justify-center`}>
                  <collection.icon className={`h-6 w-6 text-${collection.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                </div>
              </div>
              
              <div className="space-y-3">
                {collection.recipes.map((recipe, recipeIndex) => (
                  <div key={recipeIndex} className="flex items-start space-x-3 p-3 bg-card/30 rounded-lg border border-border/50 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-sm mb-1">
                        {recipe.split(' - ')[0]}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {recipe.split(' - ')[1]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* AI Companion Feature */}
        <div className="card-premium mb-16 max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-hero opacity-5 rounded-2xl"></div>
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Bot className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Your Automation Never Sleeps <span className="text-gradient">(And Neither Does Your AI Assistant)</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="text-left">
                <h4 className="font-semibold mb-3 text-primary">Continuous Monitoring</h4>
                <p className="text-muted-foreground text-sm mb-4">Detects when workflows slow down or fail before your business feels the impact.</p>
                
                <h4 className="font-semibold mb-3 text-accent">Business Intelligence</h4>
                <p className="text-muted-foreground text-sm">Understands if delays matter - end of quarter urgency vs. random Tuesday tasks.</p>
              </div>
              <div className="text-left">
                <h4 className="font-semibold mb-3 text-recipe">Proactive Optimization</h4>
                <p className="text-muted-foreground text-sm mb-4">Suggests improvements based on usage patterns and business context.</p>
                
                <h4 className="font-semibold mb-3 text-success">Plain English Updates</h4>
                <p className="text-muted-foreground text-sm">"Your lead routing slowed down 23% - here's why and how to fix it."</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-premium border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Try Your First Recipe?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start with a 30-day free trial. Pick any 3 recipes from our library and see the difference enterprise-grade automation makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">Try a Recipe Free</Button>
              <Button className="btn-secondary">Schedule Recipe Consultation</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;