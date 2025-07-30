import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-railing.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-industrial text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 mb-4">
            <Award className="w-6 h-6 text-orange-accent" />
            <span className="text-orange-accent font-semibold">Licensed & Insured Contractor</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Expert Railing & Metal Fence Services
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl">
            CHALLENGER WA LLC specializes in custom fabrication and installation of railings and metal fences. 
            Over 3 years of proven experience delivering superior quality workmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Get Free Estimate in 24 Hours
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
              View Our Work
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-orange-accent flex-shrink-0" />
              <span className="text-lg">Free Estimates in 24 Hours</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-6 h-6 text-orange-accent flex-shrink-0" />
              <span className="text-lg">Installation in 5-15 Days</span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-6 h-6 text-orange-accent flex-shrink-0" />
              <span className="text-lg">Superior Quality Materials</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;