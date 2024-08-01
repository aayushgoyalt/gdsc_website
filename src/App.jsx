import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" w-full min-h-screen"> 
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/team" element={<Team />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/events" element={<Events />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
