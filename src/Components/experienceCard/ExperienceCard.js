import React, { createRef } from "react";
import { Fade, Slide } from "react-reveal";
import "./ExperienceCard.scss";

export default function ExperienceCard({ company }) {
  const imgRef = createRef();

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item, i) => (
        <li key={i} className="subTitle">
          {item}
        </li>

      ))
      : null;
  };
  return (
    <div>
      <Fade left duration={1000}>
        <div className="experience-card">
          <div className="experience-card-left">
            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="experience-roundedimg"
              src={company.image}
              alt={company.companyName}
            />
          </div>
          <div className="experience-card-right">
            <h5
              className="experience-text-company"
              style={{ marginBottom: "4px" }} // added 4px spacing after company name
            >
              {company.companyName}
            </h5>
            <div className="experience-text-details">
              <h5
                className="experience-text-jobtitle">
                {company.jobtitle}
              </h5>
              <p
                className="experience-text-duration"
              >
                {company.duration}
              </p>
              <p className="experience-text-desc">{company.desc}</p>
              <div className="experience-text-bullets">
                <ul>
                  <GetDescBullets descBullets={company.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="experience-card-border"></div>
      </Slide>
    </div>
  );
}