import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import Header from "../components/Header";

export default function Project() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Header />
      <section className="section">
        <div className="secDiv">
          <h1 className="hel" style={{ marginTop: "-25vh" }}>
            My Work
          </h1>
          <p style={{ fontSize: "1.2vw" }}>
            This is a selection of projects that showcase my skills and
            experience in UI/UX design and WEB development.
          </p>
          <button className="btn" onClick={() => navigate("/allprojects")}>
            View all Projects
          </button>
        </div>
      </section>
      <aside className="aside">
        <Menu />
      </aside>
    </div>
  );
}
