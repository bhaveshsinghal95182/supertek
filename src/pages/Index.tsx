
import { NavBar } from "@/components/Navigation/NavBar";
import { HeroSlider } from "@/components/HeroSection/HeroSlider";
import { CounterSection } from "@/components/Metrics/CounterSection";
import { TestimonialsSection } from "@/components/Testimonials/TestimonialsSection";
import { ProductShowcase } from "@/components/Products/ProductShowcase";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Company",
    items: [
      { label: "Company Profile", href: "/company/profile" },
      { label: "Director's Message", href: "/company/directors-message" },
      { label: "Careers", href: "/company/careers" },
      { label: "Certifications", href: "/company/certifications" },
      { label: "Awards", href: "/company/awards" },
      {
        label: "CSR",
        items: [
          {
            label: "Policy",
            items: [
              { label: "Human Rights Policy", href: "/csr/policy/human-rights" },
              { label: "Whistleblower Policy", href: "/csr/policy/whistleblower" },
            ],
          },
          { label: "Report a Concern", href: "/csr/report" },
          { label: "Whistleblower Hotline", href: "/csr/hotline" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "eCatalogs", href: "/resources/catalogs" },
      { label: "Calibration Certificates", href: "/resources/certificates" },
      { label: "Newsletters", href: "/resources/newsletters" },
    ],
  },
  {
    label: "Media",
    items: [
      { label: "Product Videos", href: "/media/videos" },
      { label: "News & Events", href: "/media/news" },
      { label: "Exhibitions", href: "/media/exhibitions" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar menuItems={menuItems} />
      <main>
        <HeroSlider />
        <CounterSection />
        <ProductShowcase />
        <TestimonialsSection />
      </main>
    </div>
  );
};

export default Index;
