import React, { useState } from "react";
import "./button.scss";

//returns what's inside
const Button = ({ title, onClick, children }) => (
  <button onClick={onClick} className="button">
    <span className="text">{children || title}</span>
  </button>
);

export default Button;
