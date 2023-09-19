import React from 'react';
import MenuContainer from '../containers/MenuContainer';
import TerrainTypesContainer from '../containers/TerrainTypesContainer';
import MapContainer from '../containers/MapContainer';

const Map = () => {
  const [activeTerrainType, setActiveTerrainType] = React.useState(null)

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="left-sidebar">
        <MenuContainer />
      </div>
      <div className="spacer-content" style={{ flex: 1 }}>        
      </div>
      <div className="terrain-content" style={{ flex: 9 }}>
        <TerrainTypesContainer activeTerrainType={activeTerrainType} setActiveTerrainType={setActiveTerrainType} />
      </div>
      <div className="spacer-content" style={{ flex: 1 }}>        
      </div>
      <div className="main-content" style={{ flex: 88 }}>
        <MapContainer activeTerrainType={activeTerrainType} />
      </div>
    </div>
  );
};

export default Map;
