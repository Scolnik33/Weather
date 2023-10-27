import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Weather from "./Components/Weather";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route path="/" element={<Weather />}/>
          <Route path="/:town" element={<Weather />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
