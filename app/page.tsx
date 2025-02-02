import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavigationMenu from "./components/NavigationMenu";

export default function Home() {
  return (<NavigationMenu />
  );
}

{/*
    <main id="home" className="pb-[100vh]">
      <div
        className="z-10 bg-black bg-fixed bg-cover"
      >
        <div className="z-20 ">
          <Hero />
          <About />
          <Skills />
          <Projects />
        </div>
        <div id="contact"></div>
      </div>
      <div className="-z-10 fixed bottom-0 bg-white left-0 h-screen w-full">
        <Contact />
      </div>
    </main>

*/}
