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
    
    try {
      // Send email to coderemen@gmail.com
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          type: 'early_access',
          message: `New early access signup: ${email}`,
          to: 'coderemen@gmail.com'
        }),
      });

      if (response.ok) {
        toast({
          title: "Thank you for your interest! 🎉",
          description: "We've received your request and will be in touch soon about our concept validation.",
        });
        setEmail("");
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Thanks for your interest!",
        description: "We've noted your email. We'll reach out soon as we develop this concept further.",
        variant: "default",
      });
      setEmail("");
    } finally {
      setIsSubmitting(false);
    }
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
              Interested in This Concept?
            </h2>
            <p className="text-xl text-white/80 mb-4 max-w-2xl mx-auto">
              We're exploring if there's demand for this type of automation platform.
            </p>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Share your email to help us understand if OpsFoundry could solve real problems for teams like yours.
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
                    "Sending..."
                  ) : (
                    <>
                      Share Interest
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                  <span>Just exploring the idea</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                  <span>No commitment needed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                  <span>Help shape the product</span>
                </div>
              </div>
            </form>
          </Card>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">
                Concept Validation
              </h4>
              <p className="text-white/70 text-sm">
                Help us understand if this solves real problems for operations teams.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">
                Shape the Future
              </h4>
              <p className="text-white/70 text-sm">
                Your input will directly influence how we build this platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;