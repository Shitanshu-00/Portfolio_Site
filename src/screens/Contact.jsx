import React, { useState } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";

export default function Contact() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  }

  // Connecting RealTime Database
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message } = userData;
    setUserData({ name: "", email: "", message: "" });
    if (name && email && message) {
      const res = fetch('https://myportfolio-cb28f-default-rtdb.firebaseio.com/userMessages.json',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name, email, message,
          }),
        });
      res ? alert("Message Sent") : alert("Please Fill the Form");
    } else {
      alert("Please Fill the Form");
    }
  };

  return (
    <div className="container">
      <Header />
      <section className="section">
        <div className="secDiv">
          <div style={{ width: "80vw" }}>
            <form className="box">
              <input
                className="input"
                placeholder="Name"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
              <input
                className="input"
                placeholder="Email"
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
              <textarea
                className="input"
                style={{ height: "40%" }}
                placeholder="Your Message"
                name="message"
                value={userData.message}
                onChange={handleChange}
              />
              <button
                className="btn"
                style={{ width: "30%" }}
                type="submit"
                onClick={handleSubmit}
              >
                Send message
              </button>
            </form>
            <h1 className="hel" style={{ marginBottom: "0", fontSize: "4vw" }}>
              Let's work
            </h1>
            <p style={{ fontSize: "1.8vw" }}>I would love to hear from you!</p>
          </div>
        </div>
      </section>
      <aside className="aside">
        <Menu />
      </aside>
    </div>
  );
}
