import React from "react";
import "../App.css";
import Menu from "../components/Menu";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <section class="section">
        <div className="secDiv">
          <h1 id="hello" className="hel">
            HELLO
          </h1>
          <p>
            I'm <span style={{ color: "#d4af37" }}>Shitanshu Tripathi</span>
          </p>
          <p>I'm React Native Developer</p>
          <a href="http://github.com/Shitanshu-00">
            <img
              src={require("../images/github.png")}
              alt="Github"
              class="link"
            />
          </a>
          <a>
            <img
              src={require("../images/linkedin.png")}
              alt="LinkedIn"
              class="link"
            />
          </a>
          <a>
            <img
              src={require("../images/hackerrank.png")}
              alt="Hackerrank"
              class="link"
            />
          </a>
        </div>
      </section>
      <aside className="aside">
        <Menu />
      </aside>
    </div>
  );
}
