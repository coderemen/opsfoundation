import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">OpsFoundry</h3>
          <p className="text-background/70 text-sm">
            We're currently in concept validation phase, exploring if there's demand for this type of automation platform for non-technical teams.
          </p>
            <div className="space-y-2 text-sm text-background/60">
              <p>Perfect for 10-50 person companies</p>
              <p>Built for marketing, analytics, and ops teams</p>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Recipes</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">About</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Press Kit</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-background/20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-background/60 mb-4 md:mb-0">
            © {currentYear} OpsFoundry. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm text-background/60">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Security</a>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-background/20 text-center">
          <p className="text-background/60 text-sm mb-2">
            🚀 <strong>This is a concept validation project.</strong> We're exploring if teams need this type of automation platform.
          </p>
          <p className="text-background/60 text-sm">
            Questions or feedback? Email us at <span className="font-medium">coderemen@gmail.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;