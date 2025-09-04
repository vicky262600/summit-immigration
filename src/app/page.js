import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Statistics from "../components/Statistics.jsx";
import Services from "../components/Services.jsx";
import ExpressEntry from "../components/ExpressEntry.jsx";
// import ProvincialPrograms from "../components/ProvincialPrograms.jsx";
import WhyChooseCanada from "../components/WhyChooseCanada.jsx";
import CTASection from "../components/CTASection.jsx";
import Footer from "../components/Footer.jsx";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Statistics />
      <Services />
      <ExpressEntry />
      {/* <ProvincialPrograms /> */}
      <WhyChooseCanada />
      <CTASection />
      <Footer />
    </div>
  );
}
