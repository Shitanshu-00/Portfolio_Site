import React from "react";
import { Route, Routes } from "react-router-dom";
import Project from "./screens/Project";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Services from "./screens/Services";
import "./App.css";
import AllProjects from "./screens/AllProjects";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/services"} element={<Services />} />
        <Route path={"/project"} element={<Project />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/allprojects"} element={<AllProjects/>} />
      </Routes>
    </div>
  );
};

export default App;
