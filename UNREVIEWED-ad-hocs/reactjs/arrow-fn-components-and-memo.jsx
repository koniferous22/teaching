import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const MyComponent = ({ prop, nestedProp }) => {
  console.log('Functional component render');
  return (
    <>
      <div>
        {`prop: ${prop}`}
      </div>
      <div>
        {`nestedProp: ${nestedProp.value}`}
      </div>
    </>
  )
};

const MyMemoComponent = React.memo(({ prop, nestedProp }) => {
  console.log('Memo component render');
  return (
    <>
      <div>
        {`prop: ${prop}`}
      </div>
      <div>
        {`nestedProp: ${nestedProp.value}`}
      </div>
    </>
  )
});

const App = () =>  {
  const [fnComponentProp, setFnComponentProp ] = useState('');
  const [fnComponentNestedProp, setFnComponentNestedProp] = useState({
    value: ''
  });
  const [memoProp, setMemoProp ] = useState('');
  const [memoNestedProp, setMemoNestedProp] = useState({
    value: ''
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <label>
          FN Component prop
          <input onChange={(e) => setFnComponentProp(e.target.value)}/>
        </label>
        <label>
          FN Component nested prop
          <input onChange={(e) => setFnComponentNestedProp({
            value: e.target.value
          })}/>
        </label>
        <MyComponent
          prop={fnComponentProp}
          nestedProp={fnComponentNestedProp}
        />
        <label>
          Memo component prop
          <input onChange={(e) => setMemoProp(e.target.value)}/>
        </label>
        <label>
          Memo component nested prop
          <input onChange={(e) => setMemoNestedProp({
            value: e.target.value
          })}/>
        </label>
        <MyMemoComponent
          prop={memoProp}
          nestedProp={memoNestedProp}
        />
      </header>
    </div>
  );
}

export default App;
