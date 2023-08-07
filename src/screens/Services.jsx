import React from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";

export default function Services() {
  return (
    <div className="container">
      <Header />
      <section className="section">
        <div className='secDiv'>
        <h1 className="hel" style={{ marginTop: "-8vh" }}>
          What I do
        </h1>
        <div className="cardDiv">
          <a href="https://github.com/Shitanshu-00/">
          <div className="card">
            <p className="cardTxt">Web Development </p>
          </div>
          </a>
          <a href="https://github.com/Shitanshu-00/React_Native_Project">
          <div className="card">
            <p className="cardTxt">
              Application <br /> Development
            </p>
          </div>
          </a>
          <a href="https://github.com/Shitanshu-00/">
            <div className="card">
              <p className="cardTxt">Java</p>
            </div>
          </a>
        </div>
        </div>
      </section>
      <aside className="aside">
        <Menu />
      </aside>
    </div>
  );
}
