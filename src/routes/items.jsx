import React from 'react';
import MenuContainer from '../containers/MenuContainer';
import ItemsContainer from '../containers/ItemsContainer';

const Items = () => {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="left-sidebar">
        <MenuContainer />
      </div>
      <div className="spacer-content" style={{ flex: 1 }}>        
      </div>
      <div className="main-content" style={{ flex: 100 }}>
        <ItemsContainer />
      </div>
    </div>
  );
};

export default Items;
