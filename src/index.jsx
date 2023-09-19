import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Map from './routes/map';
import Items from './routes/items';
import Monsters from './routes/monsters';
import Quests from './routes/quests';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Map />} />
      <Route path="/map" element={<Map />} />
      <Route path="/items" element={<Items />} />
      <Route path="/monsters" element={<Monsters />} />
      <Route path="/quests" element={<Quests />} />
    </Routes>
</Router>
);