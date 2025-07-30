import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, Shield, Trophy, Users, Calendar } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-orange-accent" />,
      title: "24-Hour Free Estimates",
      description: "Quick response time with comprehensive estimates provided within one business day."
    },
    {
      icon: <Calendar className="w-8 h-8 text-orange-accent" />,
      title: "5-15 Day Installation",
      description: "Efficient project completion that respects your timeline and budget constraints."
    },
    {
      icon: <Trophy className="w-8 h-8 text-orange-accent" />,
      title: "Superior Quality",
      description: "Premium materials and exceptional craftsmanship that stands the test of time."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-orange-accent" />,
      title: "Competitive Pricing",
      description: "Fair, transparent pricing that delivers exceptional value for your investment."
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-accent" />,
      title: "Licensed & Insured",
      description: "Full licensing and comprehensive insurance coverage for your peace of mind."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-accent" />,
      title: "3+ Years Experience",
      description: "Proven track record with developers, builders, and remodeling companies."
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose CHALLENGER WA LLC</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand the importance of working with reliable subcontractors who deliver quality work on time and within budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-border bg-card hover:shadow-card transition-all duration-200">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;