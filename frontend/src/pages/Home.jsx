import React from "react";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import ID from "../components/ID";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <ID />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default Home;
