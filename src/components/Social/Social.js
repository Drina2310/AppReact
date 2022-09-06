import React from "react";
import {FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa"
import "./styles.scss"

const socialMedia = [
  {
    icon: <FaTwitter />,
    link: "https://twitter.com/",
  },
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com//",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/drina-rincon-7677b7200/",
  },
];

export const Social = () => {
  return (
    <div className="social">
      {socialMedia.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};