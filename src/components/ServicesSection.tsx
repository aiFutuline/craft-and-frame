import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Building, HomeIcon, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import fabricationImage from "@/assets/fabrication.jpg";
import commercialImage from "@/assets/commercial-work.jpg";
import residentialImage from "@/assets/residential-project.jpg";
import quickTurnaroundImage from "@/assets/quick-turnaround.jpg";

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Custom Fabrication",
      description: "Precision metalwork tailored to your exact specifications and design requirements.",
      image: fabricationImage
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Commercial Installation",
      description: "Professional railing and fence installation for commercial and industrial properties.",
      image: commercialImage
    },
    {
      icon: <HomeIcon className="w-8 h-8 text-primary" />,
      title: "Residential Projects",
      description: "Beautiful and secure railings and fences for homes and residential developments.",
      image: residentialImage
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Quick Turnaround",
      description: "Fast, efficient service with installation completed within 5-15 business days.",
      image: quickTurnaroundImage
    }
  ];

  return (
    <section ref={ref} className={`py-20 bg-background fade-in-up ${isVisible ? 'animate' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Expert Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in custom fabrication and installation of railings and metal fences, 
            serving developers, builders, and remodeling companies across Washington.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-200 border border-border">
              {service.image && (
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
              )}
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;