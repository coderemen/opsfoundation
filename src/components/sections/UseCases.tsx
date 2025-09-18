import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, FileText, Target, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const UseCases = () => {
  const problemScenarios = [
    {
      icon: Target,
      team: "Marketing",
      title: "The Campaign Launch Fire Drill",
      problem: "Every campaign launch is chaos. Last-minute approval bottlenecks, broken tracking pixels, and budget overruns that nobody catches until it's too late.",
      solution: "Campaign Orchestration Recipe handles approvals, validates setups, monitors spend in real-time, and alerts teams before thresholds are hit.",
      results: ["Prevent overspend", "Catch setup errors early", "Save 8+ hours per campaign"],
      recipe: "Campaign Orchestration + Spend Guardian"
    },
    {
      icon: BarChart3,
      team: "Analytics",
      title: "The Report Treadmill",
      problem: "60% of my time goes to creating reports that are outdated by the time stakeholders see them. Manual data collection, formatting, and distribution consumes entire days.",
      solution: "Business Intelligence Recipe automates data collection, generates insights with narrative context, and delivers personalized reports on stakeholders' schedules.",
      results: ["Always-current data", "Automated narrative insights", "Save 12+ hours per week"],
      recipe: "BI Report Engine + Narrative AI"
    },
    {
      icon: Users,
      team: "Operations",
      title: "The Approval Bottleneck",
      problem: "Our vendor onboarding takes 6 weeks because approvals get stuck in email chains. Nobody knows where things stand, and compliance documentation is scattered.",
      solution: "Vendor Management Recipe routes approvals intelligently, maintains audit trails, and provides real-time status updates to all stakeholders.",
      results: ["Faster approvals", "Complete audit trails", "Save 6+ hours per vendor"],
      recipe: "Vendor Lifecycle + Approval Router"
    },
    {
      icon: FileText,
      team: "People Ops",
      title: "The Onboarding Inconsistency",
      problem: "New hire experiences vary wildly by manager and location. IT access requests sit in queues, paperwork gets lost, and nobody tracks completion.",
      solution: "Employee Journey Recipe personalizes onboarding by role and location, integrates with IT systems, and tracks completion with automated follow-ups.",
      results: ["Consistent experience", "Faster IT provisioning", "100% completion tracking"],
      recipe: "Employee Journey + IT Integration"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-premium border border-primary/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Real Problems, Real Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Fighting the Same <span className="text-gradient">Daily Battles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how different teams use OpsFoundry recipes to eliminate their biggest operational pain points.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {problemScenarios.map((scenario, index) => (
            <Card key={index} className="card-recipe relative overflow-hidden group">
              {/* Team Badge */}
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {scenario.team}
                </Badge>
              </div>
              
              {/* Icon & Title */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                  <scenario.icon className="h-6 w-6 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{scenario.title}</h3>
                </div>
              </div>
              
              {/* Problem Description */}
              <div className="mb-6">
                <h4 className="font-semibold text-destructive mb-3 text-sm flex items-center">
                  <div className="w-2 h-2 bg-destructive rounded-full mr-2"></div>
                  The Problem
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed italic bg-destructive/5 p-4 rounded-lg border-l-4 border-destructive/20">
                  "{scenario.problem}"
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="font-semibold text-success mb-3 text-sm flex items-center">
                  <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                  The Recipe Solution
                </h4>
                <p className="text-foreground text-sm leading-relaxed bg-success/5 p-4 rounded-lg border-l-4 border-success/20">
                  {scenario.solution}
                </p>
              </div>
              
              {/* Results */}
              <div className="mb-6">
                <h4 className="font-semibold text-primary mb-3 text-sm">Guaranteed Results:</h4>
                <div className="space-y-2">
                  {scenario.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Recipe Name */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-accent">Recipe Available:</span>
                  <span className="text-sm text-recipe font-medium">{scenario.recipe}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Results Summary */}
        <div className="card-premium mb-16 max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-hero opacity-5 rounded-2xl"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold mb-8">
              Average Results Across <span className="text-gradient">100+ Teams</span>
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">26 hrs</div>
                <div className="text-sm text-muted-foreground">Saved per team/week</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">94%</div>
                <div className="text-sm text-muted-foreground">Reduction in manual work</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">$8.2k</div>
                <div className="text-sm text-muted-foreground">Monthly OpEx savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-recipe mb-2">2.3x</div>
                <div className="text-sm text-muted-foreground">Faster process completion</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center">
          <div className="card-premium max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-hero opacity-5 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Solve Your Daily Battles?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Stop fighting the same operational problems every day. Pick a recipe that solves your biggest pain point and see results in 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero">
                  Find My Recipe
                </Button>
                <Button className="btn-secondary">
                  Schedule Problem Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;