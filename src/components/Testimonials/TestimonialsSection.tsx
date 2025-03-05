
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  institution: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Supertek's commitment to quality and innovation has made them our trusted partner for laboratory equipment. Their products consistently meet our high standards.",
    author: "Dr. Sarah Chen",
    role: "Head of Research",
    institution: "Global Research Institute"
  },
  {
    id: 2,
    quote: "The educational products from Supertek have transformed our teaching methodology. Students benefit immensely from their practical and well-designed equipment.",
    author: "Prof. James Mitchell",
    role: "Department Chair",
    institution: "University of Science"
  },
  {
    id: 3,
    quote: "As a long-term partner, we've found Supertek's products to be consistently reliable and their service exceptional. They understand the needs of modern laboratories.",
    author: "Dr. Maria Rodriguez",
    role: "Laboratory Director",
    institution: "Advanced Medical Center"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        
        <div className="relative min-h-[300px]">
          <div 
            className={cn(
              "absolute inset-0 flex flex-col items-center text-center transition-all duration-500",
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            )}
          >
            <Quote className="w-12 h-12 text-accent mb-6" />
            <blockquote className="text-xl text-gray-700 mb-6 max-w-3xl">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="mt-4">
              <cite className="not-italic font-semibold text-gray-900">
                {testimonials[currentIndex].author}
              </cite>
              <div className="text-gray-600">
                {testimonials[currentIndex].role}
              </div>
              <div className="text-accent">
                {testimonials[currentIndex].institution}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex ? "bg-accent w-4" : "bg-gray-300"
              )}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
