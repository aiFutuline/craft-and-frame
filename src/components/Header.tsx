import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-industrial rounded-md flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-primary-foreground rounded-sm"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CHALLENGER WA LLC</h1>
              <p className="text-sm text-muted-foreground">Expert Railing & Metal Fence Services</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(425) 435-3081</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>challengerwallc@gmail.com</span>
            </div>
            <Button variant="contact" size="sm">
              Get Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;