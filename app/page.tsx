import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Faq from "@/components/home/Faq";
import ContactSection from "@/components/ContactSection";
import SectionLabel from "@/components/SectionLabel";
import { contact } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <About />
      <Projects />
      <Faq />
      <div className="px-6 pt-10">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel icon="✦">{contact.label}</SectionLabel>
          <h2 className="mt-8 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
            {contact.title}{" "}
            <span className="font-serif-italic text-muted">{contact.titleAccent}</span> !
          </h2>
        </div>
      </div>
      <ContactSection />
    </>
  );
}
