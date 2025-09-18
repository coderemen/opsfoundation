import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import WorkflowDemo from "@/components/sections/WorkflowDemo";
import Features from "@/components/sections/Features";
import UseCases from "@/components/sections/UseCases";
import SocialProof from "@/components/sections/SocialProof";
import TrustReliability from "@/components/sections/TrustReliability";
import CompetitiveDifferentiation from "@/components/sections/CompetitiveDifferentiation";
import Pricing from "@/components/sections/Pricing";
import ContactForm from "@/components/sections/ContactForm";
import EmailCapture from "@/components/sections/EmailCapture";
import Footer from "@/components/sections/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>OpsFoundry - Automation Recipes That Actually Work</title>
        <meta name="description" content="Stop building automations. Start using proven recipes. OpsFoundry delivers enterprise-tested automation recipes with built-in AI monitoring for business teams." />
        <meta name="keywords" content="automation recipes, business automation, AI monitoring, workflow automation, enterprise automation, recipe platform" />
        
        {/* Open Graph */}
        <meta property="og:title" content="OpsFoundry - Automation Recipes That Actually Work" />
        <meta property="og:description" content="Curated, tested, and AI-monitored automation workflows designed for business teams who need reliability, not complexity." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "OpsFoundry",
            "description": "Premium automation recipe platform for business teams with AI monitoring and enterprise reliability",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "10",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "10",
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

          <section id="problem-solution">
            <ProblemSolution />
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

          <section id="trust-reliability">
            <TrustReliability />
          </section>

          <section id="competitive-differentiation">
            <CompetitiveDifferentiation />
          </section>
          
          <section id="pricing">
            <Pricing />
          </section>
          
          <section id="contact">
            <ContactForm />
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