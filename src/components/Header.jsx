import React from 'react'

const Header = () => {
  return (
    <header style={{height:'10vh', width:'100vw'}}>
    <div className="header">
      <img src={require("../images/Logo-Name.png")} alt="Logo" id="logo" />
      <h2>
        Shitanshu<span style={{ color: "#d4af37" }}>Tripathi</span>
      </h2>
    </div>
    </header>
  )
}

export default Header