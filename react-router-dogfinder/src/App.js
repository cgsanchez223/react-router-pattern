import React from "react";
import { BrowserRouter } from 'react-router-dom';
import DogFinder from './DogFinder';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <DogFinder />
      </BrowserRouter>
    </div>
  );
}

export default App;
