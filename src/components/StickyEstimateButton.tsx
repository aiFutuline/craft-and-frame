import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

const StickyEstimateButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`sticky-estimate ${isVisible ? 'show' : ''}`}>
      <Button 
        variant="contact" 
        size="lg" 
        className="shadow-xl hover:shadow-2xl transition-shadow duration-300"
        onClick={() => window.location.href = 'tel:4254353081'}
      >
        <Phone className="w-5 h-5 mr-2" />
        FREE ESTIMATE
      </Button>
    </div>
  );
};

export default StickyEstimateButton;