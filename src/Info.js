import React from "react";

function info() {
  return (
    <div className="info">
      <img
        src="https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="headshot"
      />
      <div className="brief">
        <h1>Adekunle Adebayo</h1>
        <h3>Frontend Developer</h3>
      </div>
      <div className="buttons">
        <button className="email">Email</button>
        <button className="linkedIn">LinkedIn</button>
      </div>
    </div>
  );
}

export default info;
