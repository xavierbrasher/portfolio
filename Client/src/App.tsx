import { useState, useEffect, useRef } from "react";
import About_Me from "./components/about_me";
import Languages from "./components/languages";
import Projects from "./components/projects";

export default function App() {
  const firstAni = useRef<HTMLDivElement>(null);
  const secondAni = useRef<HTMLDivElement>(null);

  function ageCalculation() {
    const bdate = new Date(2007, 7, 24);
    const timeDiff = Math.abs(Date.now() - bdate.getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
  }
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <main>
      <h1 className="md:text-5xl text-4xl font-bold mb-6">
        Hello, I'm Xavier 👋
      </h1>
      <p className="text-2xl mb-4">
        I am a {ageCalculation()} year old student who is godly at coding.
      </p>
      <div>
        <div ref={firstAni} className="firstAni">
          <About_Me />
        </div>
        <div className="secondAni">
          <Languages />
        </div>
        <div className="thirdAni">
          <Projects />
        </div>
      </div>
    </main>
  );
}
