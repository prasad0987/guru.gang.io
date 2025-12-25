import React from "react";
import { useNavigate } from "react-router-dom";
import vg_logo from "../../asserts/vg_logo.png"; // make sure the path is correct
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-page">
      <div className="notfound-container">
        <img src={vg_logo} alt="Guru Logo" className="notfound-logo" />

        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <button className="btn-home" onClick={() => navigate("/")}>
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
