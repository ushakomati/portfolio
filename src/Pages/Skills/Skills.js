import React from "react";
import { motion } from "framer-motion";
import skillsSection from "../../Components/skillsSection/skillsSection";
import LottieDisplay from "../../Components/LottieDisplay/LottieDisplay";
import skillsPerson from "../../assets/lottie/skillsPerson";
import "./Skills.scss";

const Skills = () => {
    return (
        <div id="skills" className="skills-main-div">
            <h1 className="title">
                {skillsSection.title}{" "}
            </h1>
            <p className="subtitle">{skillsSection.subtitle}{" "}</p>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
            >
                <div className="skillContainer">
                    <div className="lottieContainer">
                        <LottieDisplay lottieFile={skillsPerson} />
                    </div>
                    <div className="skillsDetails">
                        {/* Component-scoped CSS: uses the same font as subtitle ('KoHo') and increases row spacing */}
                        <style>{`
                          /* layout: increase horizontal and vertical gaps; row spacing is the first value in gap (row-gap) */
                          .dev-icons { display:flex; flex-wrap:wrap; gap: 28px 28px; padding:0; margin:0; align-items:center; justify-content:flex-start; }
                          .software-skill-inline { list-style:none; margin:0; padding:0; background:transparent; border:none; }
                          .skillItem { position: relative; display: flex; align-items: center; justify-content: center; padding: 6px; background: transparent; }
                          .skillImage { width: 80px; height: 80px; object-fit: contain; transition: transform .18s ease, filter .18s ease; display:block; }
                          /* enlarge image smoothly on hover */
                          .skillItem:hover .skillImage { transform: scale(1.12); }
                          /* Tooltip - same font as subtitle for consistency */
                          .skillTooltip {
                            position: absolute;
                            bottom: -36px;
                            left: 50%;
                            transform: translateX(-50%) translateY(6px);
                            // background: rgba(0, 0, 0, 0);
                            color: #000000ff;
                            font-size: 0.9rem;
                            padding: 6px 8px;
                            border-radius: 6px;
                            white-space: nowrap;
                            opacity: 0;
                            pointer-events: none;
                            transition: opacity .15s ease, transform .15s ease;
                            box-shadow: 0 6px 18px rgba(0,0,0,0.12);
                            font-family: 'KoHo', sans-serif; /* same as subtitle */
                          }
                          .skillItem:hover .skillTooltip { opacity: 1; transform: translateX(-50%) translateY(0); }
                          /* ensure tooltip text uses same style as subtitle */
                          .skillsDetails .subtitle-like { font-family: 'KoHo', sans-serif; }
                          /* responsive tweaks */
                          @media (max-width: 600px) {
                            .skillImage { width: 64px; height: 64px; }
                            .skillTooltip { font-size: 0.80rem; bottom: -30px; }
                          }
                        `}</style>

                        <ul className="dev-icons">
                            {skillsSection.softwareSkills.map((skills, i) => {
                                return (
                                    <motion.li
                                        key={i}
                                        className="software-skill-inline"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: (skills.animationDelay || (i * 0.03)), duration: 0.38 }}
                                    >
                                        <motion.div
                                            className="skillItem"
                                            whileHover={{ scale: 1.06 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 18 }}
                                            role="img"
                                            aria-label={skills.skillName}
                                        >
                                            <motion.img
                                                src={skills.src}
                                                alt={skills.skillName}
                                                className="skillImage"
                                                draggable="false"
                                                whileHover={{ scale: 1.14 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 24 }}
                                            />
                                            <div className="skillTooltip">{skills.skillName}</div>
                                        </motion.div>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
export default Skills