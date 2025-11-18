import React from "react";
import ExperienceCard from "../../Components/experienceCard/ExperienceCard";
import { experienceInfo } from "../../Components/experienceSection/ExperienceSection";
import "./Experience.scss";

const Experience = () => {
  return (
    <div id="experience" className="experience-section">
      <h2 className="title">{experienceInfo.title}{" "}</h2>

      <div className="experience-card-container">
        {experienceInfo.companies.map((company, index) => (
          <ExperienceCard key={index} company={company} />
        ))}
      </div>
    </div>
  )
}
export default Experience