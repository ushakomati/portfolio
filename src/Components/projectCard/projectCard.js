import React from 'react';
import Zoom from "react-reveal/Zoom";
import "./projectCard.scss";

const ProjectCard = ({ title, intro, image, url }) => {

    function openGithubRepo(url) {
        let win = window.open(url, "_blank");
        win.focus();
    }

    return (
        <Zoom bottom duration={1000}>
            <div className="card" onClick={() => openGithubRepo(url)}>
                <div>
                    <img src={image} alt={title} />
                </div>
                <div className="card_title">{title}</div>
                <div className="card_body">
                    {intro}
                </div>
            </div>
        </Zoom>
    );
}

export default ProjectCard;