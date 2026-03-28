import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 py-4 px-6">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center gap-6 text-lg font-medium">
          <Link
            to="/"
            className={`transition duration-200 ${
              location.pathname === "/"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            الصفحة الرئيسية
          </Link>
          {/* <Link
            to="/about"
            className={location.pathname === "/about" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700 hover:text-blue-600"}
          >
            شرح الرقم القومي
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
