import React from "react";
import '../App.css';

const NavigatorButtons = ({ onMove }) => {
  return (
    <div data-testid="navigator-buttons" className="navigator">
        <h3>Navigation</h3>
      <div className="joystick-box">
        <button className="nav-button" onClick={() => onMove("S")}>
          <span role="img" aria-label="up-arrow">
            &#9650;
          </span>
        </button>
        <div className="horizontal-buttons">
          <button className="nav-button" onClick={() => onMove("W")}>
            <span role="img" aria-label="left-arrow">
              &#9664;
            </span>
          </button>
          <button className="nav-button" onClick={() => onMove("E")}>
            <span role="img" aria-label="right-arrow">
              &#9654;
            </span>
          </button>
        </div>
        <button className="nav-button" onClick={() => onMove("N")}>
          <span role="img" aria-label="down-arrow">
            &#9660;
          </span>
        </button>
      </div>
    </div>
  );
};

export default NavigatorButtons;
