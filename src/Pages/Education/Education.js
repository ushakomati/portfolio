import React from "react";
import { motion } from "framer-motion";
import "./Education.scss";
import LottieDisplay from "../../Components/LottieDisplay/LottieDisplay";
import education from "../../assets/lottie/education.json";

const Education = () => {
  const educationInfo = {
    title: "Education",
    educations: [
      {
        schoolName: "University of Cincinnati",
        degree: "Masters in Computer Science",
        duration: "August 2022 – December 2023",
        gpa: "GPA: 3.93/4.0",
        descBullets: [
          "Specialized in advanced software engineering, cloud computing, and AI/ML",
          "Completed coursework in distributed systems, machine learning, and database systems",
        ],
      },
      {
        schoolName: "GITAM University",
        degree: "Bachelor of Technology in Computer Science",
        duration: "August 2015 – April 2019",
        gpa: "GPA: 3.77/4.0",
        descBullets: [
          "Graduated with honors in Computer Science",
          "Completed core curriculum in software engineering, data structures, and algorithms",
        ],
      },
    ],
  };

  return (
    <div id="education" className="education-section">
      <h2 className="title">{educationInfo.title}</h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* New two-column layout: animation left, cards right */}
        <div className="education-inner">
          <div className="lottieContainer" aria-hidden="true">
            <LottieDisplay lottieFile={education} />
          </div>

          <div className="education-container">
            {educationInfo.educations.map((education, index) => (
              <div key={index} className="education-card">
                <div className="card-content">
                  <h3 className="school-name">{education.schoolName}</h3>
                  <p className="degree"><i>{education.degree}</i></p>
                  <p className="duration">{education.duration}</p>
                  <p className="gpa">{education.gpa}</p>
                  <ul className="desc-bullets">
                    {education.descBullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Component-scoped CSS to size Lottie and create 40/60 vertical columns */}
      <style>{`
        .education-inner {
          display: flex;
          align-items: stretch; /* important: make both columns match height */
          gap: 20px;
          margin-top: 0.5rem;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 1rem;
        }

        /* LEFT COLUMN: Lottie fills the entire column height */
        .lottieContainer {
          flex: 0 0 40%; /* occupy 40% of section width */
          height: 100%;  /* will stretch to match the right column height */
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }
        /* make the Lottie element itself fill the left column */
        .lottieContainer > * {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* RIGHT COLUMN: title + stacked cards */
        .education-container {
          flex: 0 0 60%; /* occupy remaining 60% */
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 0;
        }

        /* Ensure the title appears at the top of the right column */
        .education-section .title {
          margin-bottom: 0.75rem;
          text-align: center;
        }

        /* Make each card use full available width and stack vertically */
        .education-container .education-card {
          width: 100%;
          box-sizing: border-box;
        }

        /* Responsive: stack vertically on narrow screens */
        @media (max-width: 768px) {
          .education-inner {
            flex-direction: column;
            gap: 12px;
          }
          .lottieContainer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            max-height: 480px;
            margin: 0 auto;
          }
          .lottieContainer > * { height: 100%; width: 100%; }
          .education-section .title { text-align: center; }
        }
      `}</style>
    </div>
  );
};

export default Education;

