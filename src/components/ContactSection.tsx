import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-industrial text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Contact us today for a free estimate and discover why developers, builders, and remodeling companies 
            choose CHALLENGER WA LLC for their railing and metal fence needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Get Your Free Estimate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-accent p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-white/90">(425) 435-3081</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-accent p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-white/90">challengerwallc@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-accent p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Service Area</h3>
                    <p className="text-white/90">Washington State</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-accent p-3 rounded-full">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Response Time</h3>
                    <p className="text-white/90">Free estimates within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-bold mb-6">Professional Partnership</h3>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              We're confident that a partnership with CHALLENGER WA LLC will bring added value to your 
              current and future projects. Our commitment to professionalism, efficiency, and precision 
              sets us apart in today's competitive market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="contact" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => window.location.href = 'tel:4254353081'}
              >
                Call Now: (425) 435-3081
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20"
                onClick={() => window.location.href = 'mailto:challengerwallc@gmail.com'}
              >
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;