import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">Sorting Visualizer</div>

      <h3 className="header__option"></h3>
    </div>
  );
}

export default Header;
