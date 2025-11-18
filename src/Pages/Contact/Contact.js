import React from "react";
import { motion } from "framer-motion";
import SocialMedia from "../../Components/SocialMedia/SocialMedia";
import contactSection from "../../Components/contactSection/contactSection";
import LottieDisplay from "../../Components/LottieDisplay/LottieDisplay";
import contactPerson from "../../assets/lottie/contactPerson";
import "./Contact.scss";

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <h2 className="title">{contactSection.title}</h2>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="row">
          <div className="main-content-profile">
            <p className="description-title">
              {contactSection.descriptionTitle}
            </p>
            <p className="description-main-content">
              {contactSection.descriptionContent}
            </p>
            <SocialMedia />
          </div>
          <div className="lottieContainer-contact">
            <LottieDisplay lottieFile={contactPerson} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Contact;
