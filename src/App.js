import React, {useState} from 'react';
import thereseLogo from './therese-log2.png';
import './App.css';

import Counter from './Counter';

// forsiden man starter med 
function App()  {

  return (
    <div className="App" >
      <header className="App-header">
        <h3>Velkommen </h3>
     
        <img src={thereseLogo} className="App-logo"  />
          <p>Therese sin React Count applikasjon</p>
          <Counter />
      </header>
    
    </div>
  );
}

export default App;
