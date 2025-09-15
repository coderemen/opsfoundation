import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import WorkflowDemo from "@/components/sections/WorkflowDemo";
import Features from "@/components/sections/Features";
import UseCases from "@/components/sections/UseCases";
import SocialProof from "@/components/sections/SocialProof";
import Pricing from "@/components/sections/Pricing";
import EmailCapture from "@/components/sections/EmailCapture";
import Footer from "@/components/sections/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>OpsFoundry - Internal Developer Platform for Non-Technical Teams</title>
        <meta name="description" content="Transform your marketing and analytics workflows with pre-built automation recipes. No code required. Perfect for 10-50 person companies ready to scale operations." />
        <meta name="keywords" content="automation, workflows, operations, marketing automation, analytics, internal developer platform, no-code" />
        
        {/* Open Graph */}
        <meta property="og:title" content="OpsFoundry - Internal Developer Platform for Non-Technical Teams" />
        <meta property="og:description" content="Stop copy-pasting between tools. Start automating like developers do - but built for marketing, analytics, and ops teams." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "OpsFoundry",
            "description": "Internal Developer Platform for non-technical teams to automate workflows",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "29",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "29",
                "priceCurrency": "USD",
                "unitCode": "MON"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          <section id="home">
            <Hero />
          </section>
          
          <section id="demo">
            <WorkflowDemo />
          </section>
          
          <section id="features">
            <Features />
          </section>
          
          <section id="use-cases">
            <UseCases />
          </section>
          
          <section id="social-proof">
            <SocialProof />
          </section>
          
          <section id="pricing">
            <Pricing />
          </section>
          
          <section id="early-access">
            <EmailCapture />
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;