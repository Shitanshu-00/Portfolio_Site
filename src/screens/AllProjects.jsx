import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const AllProjects = () => {
  const history = useNavigate();
  return (
    <div className="container">
      <Header />
      <button
        className="btn"
        style={{ alignSelf: "flex-start", width: "10vw" }}
        onClick={() => history(-1)}
      >
        Go Back
      </button>
      <section className="section">
        <div className="secDiv">
          <div className="cardDiv">
            <a href="https://github.com/Shitanshu-00/Dashboard">
              <div className="card">
                <img
                  src={require("../images/beatnami.png")}
                  className="projImg"
                />
              </div>
            </a>
            <a href="https://github.com/Shitanshu-00/React_Native_Project">
              <div className="card">
                <img
                  src={require("../images/khiladi.jpg")}
                  className="projImg"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
