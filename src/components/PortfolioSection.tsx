import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Modern Interior Staircase Railing",
      category: "Interior Railings",
      image: "/lovable-uploads/8ae72bb7-3683-4cf0-b968-635b60e8d6c1.png",
      description: "Sleek black metal railing with vertical pickets for contemporary home interior"
    },
    {
      id: 2,
      title: "Horizontal Bar Stair Railing",
      category: "Interior Railings", 
      image: "/lovable-uploads/755363d9-bf6c-44cd-aea3-3d327eb25dee.png",
      description: "Modern horizontal bar design for multi-level staircases"
    },
    {
      id: 3,
      title: "Deck Railing with Wood Accents",
      category: "Exterior Railings",
      image: "/lovable-uploads/f865e2a5-285d-4c14-b0a0-6bede7ab5d3a.png",
      description: "Black metal deck railing with natural wood handrail for outdoor spaces"
    },
    {
      id: 4,
      title: "Floating Stair Railing System",
      category: "Interior Railings",
      image: "/lovable-uploads/dd6677b3-752d-4dd6-913e-0249c885aead.png",
      description: "Contemporary floating stair design with clean horizontal lines"
    },
    {
      id: 5,
      title: "Custom Balcony Installation",
      category: "Interior Railings",
      image: "/lovable-uploads/854c9d06-41a5-4594-88b4-1b8659b6f3f4.png",
      description: "Multi-level balcony railing with sophisticated geometric design"
    },
    {
      id: 6,
      title: "Curved Deck Railing",
      category: "Exterior Railings",
      image: "/lovable-uploads/c23bbadb-3893-43ce-91f2-d2eaec5f7609.png",
      description: "Custom curved railing following deck contours with premium materials"
    },
    {
      id: 7,
      title: "Rustic Style Interior Railing",
      category: "Interior Railings",
      image: "/lovable-uploads/0ab337bb-d79a-4aa6-a3a8-2194a79ead9d.png",
      description: "Black metal railing with wood elements for rustic modern aesthetic"
    },
    {
      id: 8,
      title: "Horizontal Line Balcony Rail",
      category: "Interior Railings",
      image: "/lovable-uploads/6d93beb5-be68-4878-8553-60c52cb42c1a.png",
      description: "Clean horizontal line design for upper level balcony areas"
    },
    {
      id: 9,
      title: "Exterior Deck Addition",
      category: "Exterior Railings",
      image: "/lovable-uploads/ecb33625-24f8-4524-8135-eb3868bcd839.png",
      description: "Two-story deck structure with comprehensive railing system installation"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % portfolioItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? portfolioItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section ref={ref} className={`py-20 bg-background fade-in-up ${isVisible ? 'animate' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our recent projects showcasing custom railings and metal fabrication work for residential and commercial clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group border border-border bg-card hover:shadow-card transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-orange-accent font-medium">{item.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="bg-white rounded-lg overflow-hidden">
              <img 
                src={portfolioItems[selectedImage].image} 
                alt={portfolioItems[selectedImage].title}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-orange-600 font-medium">
                    {portfolioItems[selectedImage].category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {portfolioItems[selectedImage].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {portfolioItems[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;