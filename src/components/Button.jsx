import React from "react";
import "../assets/css/Button.css";
import '../assets/css/responsive/fullpage.css';

const Button = ({
  text,
  link,
  onClick,
  download = false,
  target = "_self",
  className = "",
}) => {
  // Case 1: Button action (JS click)
  if (onClick) {
    return (
      <button
        className={`myBtn ${className}`}
        onClick={onClick}
        type="button"
      >
        {text}
      </button>
    );
  }

  // Case 2: Link / Download
  return (
    <a
      href={link}
      download={download}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`myBtn ${className}`}
    >
      {text}
    </a>
  );
};

export default Button;