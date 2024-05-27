import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import ID from "./components/ID";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;

/* 
1- build the form 
2- get the data from the form
3- send the data to the backend
4- get the response from the backend

*/
