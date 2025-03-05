import NavbarSection from "./components/sections/Navbar";
import HeroSection from "./components/sections/Hero";
import LogoSliderSection from "./components/sections/LogoSlider";
import NewsCarouselSection from "./components/sections/NewsCarousel";
import PartnersSection from "./components/sections/Partners";
import StatisticsSection from "./components/sections/Statistics";
import PaymentGatewaysSection from "./components/sections/PaymentGateways";
import FooterSection from "./components/sections/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSection />
      <main className="flex-grow flex flex-col items-center gap-16 py-16 w-full">
        <HeroSection />
        <LogoSliderSection />
        <NewsCarouselSection />
        <PartnersSection />
        <StatisticsSection />
        <PaymentGatewaysSection />
      </main>
      <FooterSection />
    </div>
  );
}
