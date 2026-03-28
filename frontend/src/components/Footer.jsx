import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-6 py-4 flex justify-center items-center text-gray-600">
        <span className="mr-2">
          © 2024 Copyright:
          <a
            href="https://omareid.vercel.app/en"
            className="text-gray-800 font-medium ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Omar Eid
          </a>
        </span>
        <a
          href="https://github.com/OmarEid10"
          className="text-gray-700 hover:text-blue-600 px-2 transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/omar-eid-769603287/"
          className="text-gray-700 hover:text-blue-600 px-1 transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
