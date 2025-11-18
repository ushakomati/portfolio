import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import LottieDisplay from "../../Components/LottieDisplay/LottieDisplay";
import landingPerson from "../../assets/lottie/landingPerson";
import "./About.scss";
import localResume from "../../assets/resume/Usha_Komati_Resume.pdf";

const About = () => {
  const openResume = async () => {
    try {
      const res = await fetch(localResume.default || localResume);
      const blob = await res.blob();

      const copy = new Blob([blob], { type: "application/pdf" });
      const url = URL.createObjectURL(copy);

      window.open(url, "_blank");

      const link = document.createElement("a");
      link.href = url;
      link.download = `Usha_Komati_Resume_${Date.now()}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => URL.revokeObjectURL(url), 15000);
    } catch (err) {
      console.error("Failed to open local resume:", err);
      // no fallback — only the bundled resume is available
      alert("Unable to open the resume from this site at the moment.");
    }
  };
  return (
    <div id="about" className="aboutContainer">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="aboutDetails"
          style={{ maxWidth: "480px" }} // limit width so text feels smaller / more compact
        >
          <h1>
            <span className="glitch">Hey! I'm Usha Komati</span>
          </h1>
          <h1 className="type-writer">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Senior Software Engineer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Cloud Engineer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("API Specialist")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Full-Stack Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Backend Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Senior Software Engineer")
                  .start();
              }}
            />
          </h1>
          <p className="subtitle">
            I thrive on turning challenges into opportunities. I architect resilient microservices, streamline APIs, and deliver high-impact solutions across multi-cloud environments. Collaboration, communication and curiosity are at the heart of my work. I enjoy helping teams grow, building systems people can rely on, and transforming complex requirements into efficient solutions. Continuous growth matters to me, so I blend technical innovation with thoughtful leadership to create infrastructure that's ready for tomorrow.          </p>
          <button className="hover-button" onClick={openResume}>
            <span>See My Resume</span>
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <div
          className="lottieFConatiner"
          style={{ width: "900px", maxWidth: "60vw", margin: "0 auto" }} // cap lottie size and keep it responsive
        >
          <LottieDisplay lottieFile={landingPerson} />
        </div>
      </motion.div>
    </div>
  );
};
export default About;
