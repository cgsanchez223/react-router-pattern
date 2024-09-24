import React from "react";
import { BrowserRouter } from 'react-router-dom';
import ColorFactory from './ColorFactory';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <ColorFactory />
      </BrowserRouter>
    </div>
  );
}

export default App;
