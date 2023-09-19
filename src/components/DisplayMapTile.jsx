import React from 'react';

const hexWidth = 20.8;
const hexHeight = 36;  

function isEven(num) {
  return num % 2 === 0;
}

const DisplayMapTile = (props) => {
  const { x, y, onTileClick, terrainTypeId } = props;

  const translateX = ((3/2 * (x-1)) * hexWidth) ;
  const translateY = (y-1) * hexHeight + (isEven(x) ? hexHeight/2 : 0);

  // temp terrainTypeId colour coding
  let terrainColour;
  if (terrainTypeId === 1) {
    terrainColour = '#90EE90'; // grass - light green
  } else if (terrainTypeId === 2) {
    terrainColour = '#C4A484'; // hills - light brown
  } else if (terrainTypeId === 3) {
    terrainColour = '#006400'; // forest - dark green
  } else if (terrainTypeId === 4) {
    terrainColour = '#A52A2A'; // mountains - dark brown
  } else if (terrainTypeId === 5) {
    terrainColour = '#FFFFE0'; // desert - light yellow
  } else if (terrainTypeId === 6) {
    terrainColour = '#ADD8E6'; // shallow ocean - light blue
  } else if (terrainTypeId === 7) {
    terrainColour = '#00008B'; // deep ocean - dark blue
  }  else if (terrainTypeId === null) {
    terrainColour = '#DDDDDD'; // none - dark grey
  }

  return (
    <path
      onClick={onTileClick} 
      d="M10.0 2.68 L30.0 2.68 L40 20 L30 37.32 L10 37.32 L0 20 Z" 
      style={{ fill: `${terrainColour}`}}
      transform={`translate(${translateX} ${translateY})`}>
    </path>
  );
}

export default DisplayMapTile;
