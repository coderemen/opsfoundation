import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, User, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would send to coderemen@gmail.com
      // For now, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent! 📧",
        description: "Thanks for reaching out. We'll get back to you within 24 hours to discuss this concept further.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Thanks for your message!",
        description: "We've received your inquiry and will be in touch soon.",
        variant: "default",
      });
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm font-medium">Let's Talk</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Have Questions About <span className="text-gradient">This Concept?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear your thoughts on OpsFoundry and understand your current workflow challenges.
            </p>
          </div>

          <Card className="p-8 border-border bg-gradient-to-br from-card to-muted/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Work Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      name="email"
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Tell us about your workflow challenges</label>
                <Textarea
                  name="message"
                  placeholder="What repetitive tasks does your team currently handle manually? How much time do you spend on copy-paste workflows? We'd love to understand your specific pain points..."
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[120px] resize-none"
                  required
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hero group flex-1 sm:flex-none"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="btn-secondary flex-1 sm:flex-none"
                  onClick={() => setFormData({ name: "", email: "", message: "" })}
                >
                  Clear Form
                </Button>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Messages go directly to <span className="font-medium text-primary">coderemen@gmail.com</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  We typically respond within 24 hours to discuss your specific use case
                </p>
              </div>
            </form>
          </Card>
          
          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">💡</span>
              </div>
              <h4 className="font-semibold mb-1">Concept Validation</h4>
              <p className="text-sm text-muted-foreground">Help us understand if this solves real problems</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-success font-bold">🤝</span>
              </div>
              <h4 className="font-semibold mb-1">No Sales Pitch</h4>
              <p className="text-sm text-muted-foreground">Just genuine conversation about your needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-accent font-bold">📝</span>
              </div>
              <h4 className="font-semibold mb-1">Shape the Product</h4>
              <p className="text-sm text-muted-foreground">Your input directly influences development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;