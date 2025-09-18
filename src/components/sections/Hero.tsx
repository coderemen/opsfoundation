import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChefHat, Bot, Zap } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-section overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-recipe/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Premium Content */}
          <div className="text-center lg:text-left">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-premium border border-primary/20 rounded-full px-6 py-2 mb-6 animate-fade-in-up backdrop-blur-sm">
              <ChefHat className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Automation Recipes That Actually Work</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
              Stop Building Automations.
              <span className="block text-gradient">Start Using Proven Recipes.</span>
            </h1>
            
            {/* Premium Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              OpsFoundry delivers enterprise-tested automation recipes with built-in AI monitoring. 
              <span className="block mt-2 font-semibold text-foreground">Your business teams get the productivity boost without the maintenance headaches.</span>
            </p>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center space-x-3 p-4 bg-card/30 rounded-xl border border-border/50 backdrop-blur-sm">
                <div className="w-8 h-8 bg-success/20 rounded-lg flex items-center justify-center">
                  <span className="text-success text-sm font-bold">🧪</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">Battle-Tested</div>
                  <div className="text-xs text-muted-foreground">Validated across scenarios</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-card/30 rounded-xl border border-border/50 backdrop-blur-sm">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">AI-Monitored</div>
                  <div className="text-xs text-muted-foreground">Intelligent companion</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-card/30 rounded-xl border border-border/50 backdrop-blur-sm">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Zap className="h-4 w-4 text-accent" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">Business-Ready</div>
                  <div className="text-xs text-muted-foreground">Not for developers</div>
                </div>
              </div>
            </div>
            
            {/* Premium CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button className="btn-hero group">
                Try a Recipe Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" className="btn-secondary group">
                <Play className="mr-2 h-5 w-5" />
                See Recipes in Action
              </Button>
            </div>
            
            {/* Premium Value Statement */}
            <div className="card-premium animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="absolute inset-0 bg-gradient-hero opacity-5 rounded-2xl"></div>
              <div className="relative z-10">
                <p className="text-lg font-medium text-foreground mb-4">
                  "What if automation came with a guarantee? We maintain it, you use it."
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm">
                  <span className="status-active">
                    99.9% Uptime SLA
                  </span>
                  <span className="status-monitored">
                    AI-Monitored 24/7
                  </span>
                  <span className="status-recipe">
                    50+ Proven Recipes
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Premium Dashboard */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero opacity-30 rounded-2xl blur-2xl transform rotate-1"></div>
              <img 
                src={dashboardMockup} 
                alt="OpsFoundry Recipe Platform showing curated automation recipes with AI monitoring dashboard"
                className="relative z-10 w-full h-auto rounded-2xl shadow-recipe border border-primary/20 animate-float"
              />
              {/* Premium Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent/90 text-accent-foreground px-4 py-2 rounded-xl text-sm font-medium animate-pulse-subtle backdrop-blur-sm">
                ✨ Recipe Library
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-xl text-sm font-medium animate-pulse-subtle backdrop-blur-sm" style={{ animationDelay: '1s' }}>
                🤖 AI Monitoring
              </div>
              <div className="absolute top-1/2 -right-6 bg-recipe/90 text-recipe-foreground px-3 py-1 rounded-lg text-xs font-medium animate-pulse-subtle backdrop-blur-sm" style={{ animationDelay: '1.5s' }}>
                Enterprise Ready
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center bg-card/20 backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-subtle"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;