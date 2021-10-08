import React from "react";
import Tile from "../tile/Tile";

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map(tile => {
        return (
          <Tile 
            key={tile.id}
            tile={tile}
          />
        )
      })}
    </div>
  );
};

export default TileList;
