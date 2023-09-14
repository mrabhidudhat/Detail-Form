import React from "react";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div>
      <div className="body-btn">
        <h3>Title</h3>
        <div>
          <Link to="/Form">
            <button className="btn">New User</button>
          </Link>
        </div>
        <br />
        <div>
          <Link to="/Sform">
            <button className="btn">Registered User</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
