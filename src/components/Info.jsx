import React from "react";

function Info() {
  return (
    <div className="info">
      <img
        className="info-image"
        src="src/assets/me.jpg"
        alt="Sebastian Lancheros, the person whose this business card belongs."
      />
      <div className="info-content">
        <h1 className="info-title">Sebastian Lancheros</h1>
        <p className="info-role">Frontend Developer</p>
        <a className="info-website" href="">
          sebastian-lancheros.website
        </a>
        <div className="info-buttons">
          <button>
            <span class="material-symbols-outlined">mail</span> Email
          </button>
          <button>Linkedin</button>
        </div>
      </div>
    </div>
  );
}

export default Info;
