import React from 'react';
import axios from "axios";
import DisplayMap from '../components/DisplayMap';
import constants from '../constants'; 

const MapContainer = (props) => {
  const { activeTerrainType } = props;
  const [mapTiles, setMapTiles] = React.useState([]);

  const mapId = 1;  

  React.useEffect(() => {
    redrawMap()
  }, []);

  const redrawMap = async () => {
    axios
      .post(`${constants.backendBaseUrl}/mapTiles/getAllMapTiles`, {
        mapId
      })
      .then((response) => setMapTiles(response.data));
  };

  return (
    <DisplayMap 
      mapViewPortWidthPx={1000} 
      mapViewPortHeightPx={800} 
      mapTiles={mapTiles} 
      activeTerrainType={activeTerrainType}
      redrawMap={redrawMap}/>
  );
}

export default MapContainer;
