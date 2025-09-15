import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-section overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
              The Internal Developer Platform
              <span className="block text-gradient">for Non-Technical Teams</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Transform your marketing and analytics workflows with pre-built automation recipes. 
              <span className="block mt-2 font-semibold text-foreground">No code required.</span>
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button className="btn-hero group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" className="btn-secondary group">
                <Play className="mr-2 h-5 w-5" />
                Book Demo
              </Button>
            </div>
            
            {/* Value Proposition */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-lg font-medium text-foreground">
                "Stop copy-pasting between tools. Start automating like developers do - 
                <span className="text-primary font-semibold"> but built for marketing, analytics, and ops teams."</span>
              </p>
            </div>
          </div>
          
          {/* Right Column - Dashboard Mockup */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl blur-xl transform rotate-1"></div>
              <img 
                src={dashboardMockup} 
                alt="OpsFoundry Dashboard showing automation recipes and workflow management interface"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border border-border/20 animate-float"
              />
              {/* Floating UI Elements */}
              <div className="absolute -top-4 -right-4 bg-success/90 text-success-foreground px-3 py-1 rounded-full text-sm font-medium animate-pulse-subtle">
                ✨ 50+ Recipes
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium animate-pulse-subtle" style={{ animationDelay: '1s' }}>
                🚀 Auto-Deploy
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse-subtle"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;