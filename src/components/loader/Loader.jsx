import React from "react";
import "./Loader.css";

const Loader = ({ isExiting = false }) => {
  const [animationId] = React.useState(() => Date.now());

  return (
    <div
      className={`sijilmassa-loader-screen${isExiting ? " is-exiting" : ""}`}
      aria-hidden={isExiting}
    >
      <div className="sijilmassa-glass-stage">
        <img
          src={`${import.meta.env.BASE_URL}icons/sijilmassa-mecca-loader.svg?animation=${animationId}`}
          alt="Sijilmassa Travels"
          width="460"
        />
      </div>
    </div>
  );
};

export default Loader;