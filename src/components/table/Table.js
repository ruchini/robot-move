import React, { useEffect, useState } from "react";
import robot from "../../assets/robot.png";

const Table = ({ position, onTeleport }) => {
  const n = 5;
  const m = 5;
  const [squreBoard, setSqureBoard] = useState([]);

  useEffect(() => {
    const result = [];

    for (let i = 0; i < n; i++) {
      const row = Array.from({ length: m });
      result.push(row);
    }

    setSqureBoard(result);
  }, []);

  const handleCellClick = (row, col) => {
    if (onTeleport) {
      onTeleport({ x: col, y: row });
    }
  };

  return (
    <>
      {squreBoard.length > 0 &&
        squreBoard.map((row, rIndex) => {
          return (
            <div className="row" key={rIndex}>
              {row.map((_, cIndex) => {
                return (
                  <div
                    className={`box ${
                      (rIndex + cIndex) % 2 === 0 ? "black" : "white"
                    }`}
                    key={cIndex}
                    onClick={() => handleCellClick(rIndex, cIndex)}
                    data-testid={`cell-${cIndex}-${rIndex}`}
                  >
                    {position.x === cIndex && position.y === rIndex && (
                      <img
                        src={robot} // replace with the actual path to your robot icon
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
    </>
  );
};

export default Table;
