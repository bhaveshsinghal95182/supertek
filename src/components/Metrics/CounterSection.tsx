
import { useState, useEffect, useRef } from "react";
import { Award, Globe2, Package, Truck } from "lucide-react";

interface CounterProps {
  end: number;
  label: string;
  icon: React.ReactNode;
  duration?: number;
}

const Counter = ({ end, label, icon, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div className="flex flex-col items-center text-center" ref={countRef}>
      <div className="mb-4 p-4 rounded-full bg-accent/10 text-accent">
        {icon}
      </div>
      <div className="text-4xl font-bold mb-2">
        {count}
        <span className="text-accent">+</span>
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export const CounterSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Let Numbers Talk</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <Counter
            end={85}
            label="Years in Business"
            icon={<Award className="w-8 h-8" />}
          />
          <Counter
            end={80}
            label="Countries Served"
            icon={<Globe2 className="w-8 h-8" />}
          />
          <Counter
            end={3000}
            label="Products"
            icon={<Package className="w-8 h-8" />}
          />
          <Counter
            end={10000}
            label="Successful Shipments"
            icon={<Truck className="w-8 h-8" />}
          />
        </div>
      </div>
    </div>
  );
};
