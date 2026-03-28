
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import ID from "../components/ID";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900 antialiased selection:bg-blue-200 selection:text-blue-900">
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
