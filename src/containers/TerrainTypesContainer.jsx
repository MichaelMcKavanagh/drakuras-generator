import React from 'react';
import axios from 'axios';
import constants from '../constants'; 
import '../css/terrainTypes.css';

const TerrainTypesContainer = (props) => {
  const { activeTerrainType, setActiveTerrainType } = props;
  const [terrainTypes, setTerrainTypes] = React.useState([]);  

  const moduleId = 1;  
  React.useEffect(() => {
    axios
      .get(`${constants.backendBaseUrl}/terrainTypes/module/${moduleId}`)
      .then((response) => setTerrainTypes(response.data));
  }, []);

  return (
    <div>
      <h4>Terrain</h4>
      <ul className="terrain-types-list">
        {terrainTypes.length ? (
          terrainTypes.map(terrainType => {
            return (
              <li 
                className={activeTerrainType === terrainType.id ? "terrain-type active" : "terrain-type"}
                key={terrainType.id}
                onClick={() => {
                  console.log(`Terrain selected: ${terrainType.name}`);
                  setActiveTerrainType(terrainType.id)
                }}
              >{terrainType.name}</li>
            )
          })
        ) : (
          <p>No terrain types found.</p>
        )}
      </ul>
    </div>
  );
}

export default TerrainTypesContainer;
