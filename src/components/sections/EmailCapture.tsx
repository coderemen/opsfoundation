import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to OpsFoundry! 🎉",
        description: "You're on the early access list. We'll notify you when we launch!",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-white" />
              <span className="text-white text-sm font-medium">Early Access</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Workflows?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join 500+ operations leaders getting automation tips and early access to new recipes.
            </p>
          </div>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                  <Input
                    type="email"
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 bg-white/10 border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:border-white/40"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none group"
                >
                  {isSubmitting ? (
                    "Joining..."
                  ) : (
                    <>
                      Get Early Access
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </form>
          </Card>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">
                Weekly Automation Tips
              </h4>
              <p className="text-white/70 text-sm">
                Get proven recipes and workflows delivered to your inbox every Tuesday.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">
                Early Access Benefits
              </h4>
              <p className="text-white/70 text-sm">
                First access to new features, priority support, and exclusive content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;