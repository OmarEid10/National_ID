import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-200 text-center dark:bg-neutral-700 w-full">
      <div className="p-4 flex justify-center items-center text-neutral-700 dark:text-neutral-200">
        <span className="mr-2">
          © 2024 Copyright:
          <span className="text-neutral-800 dark:text-neutral-400 ml-1">
            Omar Eid
          </span>
        </span>
        <a
          href="https://github.com/OmarEid10"
          className="text-neutral-800 dark:text-neutral-400 px-2"
          target="_blank"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/omar-eid-769603287/"
          className="text-neutral-800 dark:text-neutral-400 px-1"
          target="_blank"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
