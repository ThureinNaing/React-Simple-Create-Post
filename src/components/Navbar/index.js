import React from "react";
import "./index.css";

export default function Navbar({ setShowModal }) {
  return (
    <nav>
      <div className="container">
        <h1>Logo </h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us </li>
          <li onClick={() => setShowModal(true)}>Create post</li>
        </ul>
      </div>
    </nav>
  );
}
