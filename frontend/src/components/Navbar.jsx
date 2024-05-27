import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="mb-20 flex item-center py-3">
      <div className="m-4 flex items-center justify-center gap-4 text-2xl">
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
