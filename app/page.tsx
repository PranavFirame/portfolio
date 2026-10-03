import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Marquee from "@/components/Common/Marquee";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <div id="content-wrapper" style={{ position: "relative", zIndex: 2, background: "var(--bg-color)" }}>
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
