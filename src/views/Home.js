import * as React from "react";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Projects from "../Pages/Projects/Projects";
import Experience from "../Pages/Experience/Experience";
import Education from "../Pages/Education/Education";
import Contact from "../Pages/Contact/Contact";
import TopButton from "../Components/topButton/topButton";

const Home = () => {
    return (
        <>
            <Navbar />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            <TopButton />
        </>
    )
}

export default Home
