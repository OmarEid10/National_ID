import React from "react";

import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import ID from "../components/ID";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow">
        <ID />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default Home;
