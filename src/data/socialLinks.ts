import { ReactElement } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export const socialLinks = [
  {
    href: "https://www.facebook.com/people/Eveon-Solutions/61577012938487/",
    icon: FaFacebookF,
    color: "hover:text-blue-400",
  },
  {
    href: "https://www.instagram.com/eveonsolutions/",
    icon: FaInstagram,
    color: "hover:text-pink-400",
  },
  {
    href: "https://www.linkedin.com/company/eveon-solutions/",
    icon: FaLinkedinIn,
    color: "hover:text-blue-500",
  },
  {
    href: "https://github.com",
    icon: FaGithub,
    color: "hover:text-white",
  },
];
