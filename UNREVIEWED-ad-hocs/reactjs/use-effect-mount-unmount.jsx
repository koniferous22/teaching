import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
function CustomComponent() {
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component will unmount');
    };
  }, [])
  return (
    <div>
      This is custom component
    </div>
  );
}
function App() {
  const [
    shouldDisplayComponent,
    setShouldDisplayComponent
  ] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {
            shouldDisplayComponent && (
              <CustomComponent />
            )
          }
        </div>
        <button onClick={() => setShouldDisplayComponent((prevState) => !prevState)}>
          Toggle visibility
        </button>
      </header>
    </div>
  );
}
export default App;
