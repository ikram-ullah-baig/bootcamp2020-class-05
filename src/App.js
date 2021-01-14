import { useState } from 'react';
import './App.css';
import Parent from "./Parent";
import ValueContext from "./ValueContext";

function App() {
  let value = useState(48);
  return (
     <ValueContext.Provider value = {value}>
        <div>
          Hello World!
          <Parent />
        </div>
      </ValueContext.Provider>
  );
}

export default App;