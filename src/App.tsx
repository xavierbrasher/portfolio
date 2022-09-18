import { useState, useEffect } from "react";
import About_Me from "./components/about_me";
import Languages from "./components/languages";
import Projects from "./components/projects";

function App() {
    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <div>
            <h1 className="md:text-5xl text-4xl font-bold mb-6">
                Hello, I'm Xavier 👋
            </h1>
            <p className="text-2xl mb-4">
                I am a 15 year old student who is godly at coding.
            </p>
            <About_Me />
            <Languages />
            <Projects />
        </div>
    );
}

export default App;
