'use client';
import Hero from "@/app/section/hero/Hero";
import About from "@/app/section/about/About";
import Mission from "@/app/section/mission/Mission";
import Events from "@/app/section/event/Event";


export default function Home() {

  return (
    <div>
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="mission">
        <Mission />
      </section>
      <section id="event">
      <Events />
      </section>
    </div>  
  );
}
