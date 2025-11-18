import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import leetcodeIcon from "@iconify-icons/simple-icons/leetcode";
import microsoftoutlookIcon from "@iconify-icons/simple-icons/microsoftoutlook";
import "./SocialMedia.scss";

export default function SocialMedia() {
  return (
    <div className="social-media-div">
      <a
        href={"https://www.linkedin.com/in/ushasree-komati/"}
        target="_blank"
        rel="noreferrer"
        className="icon-button linkedin"
      >
        <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#0077b5" }} />
      </a>
      <a
        href={"https://github.com/ushakomati"}
        target="_blank"
        rel="noreferrer"
        className="icon-button"
      >
        <FontAwesomeIcon icon={faGithub} style={{ color: "#171515" }} />
      </a>
      {/* <a
        href={"https://leetcode.com/ushakomati/"}
        target="_blank"
        rel="noreferrer"
        className="icon-button"
      >
        <Icon icon={leetcodeIcon} style={{ color: "#eb9e10" }} />
      </a> */}
      <a
        href={"mailto:ushasree.komati.work@gmail.com"}
        target="_blank"
        rel="noreferrer"
        className="icon-button"
      >
        <Icon icon={microsoftoutlookIcon} style={{ color: "#0072c6" }} />
      </a>
    </div>
  );
}
