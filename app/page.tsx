import About from "@/components/About";
import Achievement from "@/components/Achievement";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Service from "@/components/Service";

export default function Home() {
  return (
    <div className="">
      <Hero autoSlide = {true} />
      <About />
      <Service />
      <Features />
      <HowItWorks />
      <Achievement />
      <Contact />
    </div>
  );
}
