import React from "react";

import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import ID from "../components/ID";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className=" text-neutral-300 min-h-screen flex flex-col antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <Navbar />
      <ID />
      <Footer />
      <Toaster />
    </div>
  );
}

export default Home;
