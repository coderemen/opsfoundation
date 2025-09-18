import { Card } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProblemSolution = () => {
  const problems = [
    {
      title: "The Marketing Manager's Nightmare",
      problem: "Every campaign launch is a fire drill. I spend more time chasing approvals and fixing broken automations than actually marketing.",
      solution: "Campaign Orchestration Recipe adapts to team availability, automatically routes around bottlenecks, and includes fallback options.",
      icon: Target
    },
    {
      title: "The Operations Director's Headache", 
      problem: "Our vendor onboarding takes 6 weeks because everything is manual, and I never know where things are stuck.",
      solution: "Vendor Management Recipe provides real-time status updates, automatically escalates delays, and maintains compliance documentation.",
      icon: Zap
    },
    {
      title: "The HR Business Partner's Frustration",
      problem: "New hire onboarding is inconsistent, paperwork gets lost, and IT access requests sit in limbo for days.",
      solution: "Employee Journey Recipe personalizes onboarding by role/location, tracks completion, and integrates with IT systems seamlessly.",
      icon: CheckCircle
    },
    {
      title: "The Data Analyst's Dilemma",
      problem: "I spend 60% of my time creating reports that are outdated by the time stakeholders see them.",
      solution: "Business Intelligence Recipe automates data collection, generates insights with narrative context, and delivers personalized reports on schedule.",
      icon: AlertTriangle
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* The Automation Paradox */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-destructive/10 border border-destructive/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">The Automation Paradox</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everyone wants automation. <span className="text-gradient">Nobody wants to maintain it.</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-destructive/5 rounded-xl border border-destructive/10">
                <div className="text-3xl font-bold text-destructive mb-2">67%</div>
                <div className="text-sm text-muted-foreground">of business automations fail within 6 months</div>
              </div>
              <div className="text-center p-6 bg-warning/5 rounded-xl border border-warning/10">
                <div className="text-3xl font-bold text-warning mb-2">Silent</div>
                <div className="text-sm text-muted-foreground">failures go unnoticed for weeks</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-xl border border-border">
                <div className="text-3xl font-bold text-muted-foreground mb-2">Zero</div>
                <div className="text-sm text-muted-foreground">business context in error messages</div>
              </div>
            </div>
          </div>
        </div>

        {/* The Recipe Difference */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">What if automation came with a guarantee?</span>
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-destructive">DIY Automation Approach</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Build from scratch every time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Hope integrations don't break</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Debug failures manually</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-sm text-muted-foreground">You maintain everything</span>
                  </div>
                </div>
              </div>
              
              <div className="card-premium">
                <div className="absolute inset-0 bg-gradient-hero opacity-5 rounded-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-success">Recipe Approach</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-success"></CheckCircle>
                      <span className="text-sm">Pre-built & tested across scenarios</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-success"></CheckCircle>
                      <span className="text-sm">AI monitors 24/7 for issues</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-success"></CheckCircle>
                      <span className="text-sm">Auto-fix common problems</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-success"></CheckCircle>
                      <span className="text-sm">We maintain it, you use it</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Problems, Real Solutions */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Real Problems. <span className="text-gradient">Real Solutions.</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {problems.map((item, index) => (
              <Card key={index} className="card-feature relative overflow-hidden group">
                <div className="absolute top-4 right-4">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">{item.title}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-destructive mb-2 text-sm">The Problem:</h4>
                  <p className="text-muted-foreground text-sm italic mb-4">"{item.problem}"</p>
                  
                  <h4 className="font-semibold text-success mb-2 text-sm">The Recipe Solution:</h4>
                  <p className="text-foreground text-sm">{item.solution}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-premium max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-hero opacity-5 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Sound Familiar? Let's Fix This.
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Stop fighting broken automations. Start with recipes that actually work and come with guarantees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero">Try a Recipe Free</Button>
                <Button className="btn-secondary">Schedule Problem Assessment</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;