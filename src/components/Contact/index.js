import React from "react";
import "./index.scss";
import Sidebar from '../Sidebar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ContactInfo = () => {
  return (
    <>
    <Sidebar/>
    <div className="big">
    <div className="contact-info">
      <h1>Contact Me</h1>
      <div className="contact-card">
        <div className="contact-item">
          <a href="https://maps.app.goo.gl/YHMApNwJUWSFQs7e6"> <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> </a>
          <p>1412 Seymore St, Halifax NS</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <p>902-476-2855</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <p>xanderbrown05@gmail.com</p>
        </div>
      </div>
      <div className="social-media">
        <h2>Connect with Me</h2>
        <div className="social-icons">
          <a href="https://www.instagram.com/xander___brown/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/xander-b-21b106281" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/Xan1237" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default ContactInfo;
