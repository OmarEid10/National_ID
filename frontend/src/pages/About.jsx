import React from 'react'
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutId from '../components/AboutId';


function About() {
  return (
    <div className=" text-neutral-300 min-h-screen flex flex-col antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <Navbar />
      <AboutId />
      <Footer />
      <Toaster />
    </div>
  );
}

export default About