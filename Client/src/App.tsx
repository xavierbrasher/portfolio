import { useState, useEffect, useRef } from "react";
import About_Me from "./components/about_me";
import Languages from "./components/languages";
import Projects from "./components/projects";

export default function App() {
    const firstAni = useRef<HTMLDivElement>(null);
    const secondAni = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <main>
            <h1 className="md:text-5xl text-4xl font-bold mb-6">
                Hello, I'm Xavier 👋
            </h1>
            <p className="text-2xl mb-4">
                I am a 15 year old student who is godly at coding.
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
