import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Advanced Laboratory Equipment",
    description: "Discover our premium range of scientific instruments",
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "Educational Solutions",
    description: "Empowering learning through cutting-edge technology",
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "Research Excellence",
    description: "Supporting breakthrough discoveries worldwide",
  },
  {
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    title: "Innovation First",
    description: "Leading the way in scientific advancement",
  },
];

export const HeroSlider = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Optimized autoplay with visibility check
  useEffect(() => {
    if (!emblaApi || !isPlaying) return;

    let interval: NodeJS.Timeout;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(interval);
      } else if (isPlaying) {
        interval = setInterval(() => emblaApi.scrollNext(), 5000);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    interval = setInterval(() => emblaApi.scrollNext(), 5000);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [emblaApi, isPlaying]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50" />
              </div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl animate-fade-in">
                  {slide.description}
                </p>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 animate-fade-in"
                  onClick={() => window.location.href = '/products'}
                >
                  Explore Our Products
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className={cn(
              "pointer-events-auto rounded-full bg-white/10 hover:bg-white/20 border-white/20",
              "backdrop-blur-sm transition-all duration-200"
            )}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className={cn(
              "pointer-events-auto rounded-full bg-white/10 hover:bg-white/20 border-white/20",
              "backdrop-blur-sm transition-all duration-200"
            )}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>

      {/* Autoplay Control */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsPlaying(!isPlaying)}
        className={cn(
          "absolute bottom-4 right-4 rounded-full",
          "bg-white/10 hover:bg-white/20 border-white/20",
          "backdrop-blur-sm transition-all duration-200"
        )}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4 text-white" />
        ) : (
          <Play className="h-4 w-4 text-white" />
        )}
      </Button>
    </div>
  );
};
