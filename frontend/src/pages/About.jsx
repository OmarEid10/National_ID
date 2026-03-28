import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutId from '../components/AboutId';


function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col antialiased selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-10">
        <AboutId />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default About