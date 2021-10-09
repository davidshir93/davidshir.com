import React from "react";

export const Tile = ({ tile }) => {
  const values = Object.values(tile);
  return (
    <div className="tile-container">
      {values.map(key => {
         return <p 
                  className="tile"
                  key={key}
                >
                  {key}
                </p> 
      })}
    </div>
  );
};

export default Tile;
