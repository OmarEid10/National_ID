import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

/* 
1- build the form 
2- get the data from the form
3- send the data to the backend
4- get the response from the backend

*/
