import React from "react";
import { Link } from "react-router-dom";
import '../css/menu.css';

const MenuContainer = () => {
  return (
    <div>
      <ul>
        <li><Link to="/map">Map</Link></li>
        <li><Link to="/monsters">Monsters</Link></li>
        <li><Link to="/items">Items</Link></li>
        <li><Link to="/quests">Quests</Link></li>
      </ul>
    </div>
  );
};

export default MenuContainer;
