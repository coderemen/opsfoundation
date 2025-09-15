import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const SocialProof = () => {
  const integrations = [
    { name: "Slack", logo: "💬" },
    { name: "Google Analytics", logo: "📊" },
    { name: "HubSpot", logo: "🔄" },
    { name: "Notion", logo: "📝" },
    { name: "Airtable", logo: "🗂️" },
    { name: "Zapier", logo: "⚡" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Testimonial */}
        <div className="text-center mb-16">
          <Card className="max-w-4xl mx-auto p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 relative">
            <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/30" />
            <Quote className="absolute bottom-4 right-4 h-8 w-8 text-primary/30 rotate-180" />
            
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-accent fill-current" />
              ))}
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-semibold text-foreground mb-6 leading-relaxed">
              "Finally, a platform that gives our ops team developer-level automation without the learning curve. 
              We've saved 20+ hours per week and eliminated those frustrating copy-paste workflows."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-primary">SG</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Sarah Chen</div>
                <div className="text-muted-foreground">Head of Operations, TechScale Inc.</div>
              </div>
              <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                42-person team
              </Badge>
            </div>
          </Card>
        </div>
        
        {/* Company Size Focus */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">
            Trusted by <span className="text-gradient">Growing Companies</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Perfect for 10-50 person companies ready to scale operations without scaling headcount.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              🚀 Series A Startups
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              📈 Growth-Stage SaaS
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              🏢 Scale-Up Companies
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              💡 Tech-Forward Teams
            </Badge>
          </div>
        </div>
        
        {/* Integrations */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-8">
            Integrates with your existing tools
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="text-center">
                  <div className="text-2xl mb-2">{integration.logo}</div>
                  <div className="text-sm font-medium text-muted-foreground">{integration.name}</div>
                </div>
              </Card>
            ))}
          </div>
          
          <p className="text-muted-foreground mt-8">
            Plus 20+ more integrations available
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;