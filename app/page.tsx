import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Process from "@/components/home/Process";
import Awards from "@/components/home/Awards";
import Team from "@/components/home/Team";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Projects />
      <Process />
      <Awards />
      <Team />
      <Pricing />
      <Testimonials />
    </>
  );
}
