import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="mb-10 flex item-center py-2">
      <div className="m-3 flex items-center justify-center gap-4 text-2xl">
        <Link
          to="/"
          className={location.pathname === "/" ? "text-cyan-300" : ""}
        >
          الصفحة الرئيسية
        </Link>
        {/* <Link
          to="/about"
          className={location.pathname === "/about" ? "text-cyan-300" : ""}
        >
          شرح الرقم القومي
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
