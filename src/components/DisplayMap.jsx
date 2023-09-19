import React, { useState } from 'react';
import DisplayMapTile from './DisplayMapTile';
import axios from 'axios';
import constants from '../constants'; 

const mapId = 1;

const mapWidth = 30;
const mapHeight = 20;

const DisplayMap = (props) => {
  const { mapViewPortWidthPx, mapViewPortHeightPx, mapTiles, activeTerrainType, redrawMap } = props;
  const [selectedTile, setSelectedTile] = useState(null);

  const handleTileClick = async (tile) => {
    if (activeTerrainType === null) {
      alert('Select a terrain type first');
      return;
    }

    if (tile.terrainTypeId === null) {
      await axios
        .post(`${constants.backendBaseUrl}/mapTiles/newMapTile`, {
          mapId,
          x: tile.x, 
          y: tile.y, 
          terrainTypeId: activeTerrainType
        });  
      redrawMap();
      return;
    }

    await axios
      .post(`${constants.backendBaseUrl}/mapTiles/updateMapTile`, {
        mapId,
        x: tile.x, 
        y: tile.y, 
        terrainTypeId: activeTerrainType
      });  

    redrawMap();
    // setSelectedTile({ tile.x, tile.y });    
  }

  const generateMapTiles = (mapTiles) => {
    const tiles = [];  
    for (let y = 0; y < mapHeight; y++) {
      for (let x = 0; x < mapWidth; x++) {
        const mapTile = mapTiles.find(tile => tile.x === x && tile.y === y);
        tiles.push(mapTile ? mapTile : { x, y, terrainTypeId: null });
      }
    }
    return tiles;
  }
  const allMapTiles = generateMapTiles(mapTiles);
  
  return (
    <div>
      <svg 
        width={mapViewPortWidthPx} 
        height={mapViewPortHeightPx} 
        viewBox={`0 0 ${mapViewPortWidthPx} ${mapViewPortHeightPx}`} 
        style={{ backgroundColor: '#FFCCCC', overflow: 'auto', position: 'relative' }}
      >
        {allMapTiles.map(tile => (
          <DisplayMapTile 
            x={tile.x} 
            y={tile.y} 
            terrainTypeId={tile.terrainTypeId} 
            onTileClick={()=>{
              handleTileClick(tile);
            }}/>
        ))}
      </svg>
    </div>
  );
}

export default DisplayMap;
