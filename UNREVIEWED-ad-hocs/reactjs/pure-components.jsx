import React from 'react';
import logo from './logo.svg';
import './App.css';

// class MyComponent extends React.Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     return false;
//   }
//   render() {
//     console.log('Inner component rendering');
//     return (
//       <div>
//         Inner component
//       </div>
//     );
//   } 
// }
// class MyComponent2 extends React.Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     return true;
//   }
//   render() {
//     console.log('Inner component rendering');
//     return (
//       <div>
//         Inner component
//       </div>
//     );
//   } 
// }

class MyPureComponent extends React.PureComponent {
  shouldComponentUpdate(nextProps) {
    return Object.keys(this.props).some((key) =>
      nextProps[key] !== this.props[key]
    )
  }
  render() {
    console.log('Inner pure component rendering');
    return (
      <div>
        Inner component
      </div>
    );
  } 
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      style: {
      }
    }
  }

  render() {
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
          <div style={this.state.style}>
            <MyPureComponent />
          </div>
          <button onClick={() => this.setState((state) => ({
            style: {
              color: 'green'
            }
          }))}>
            Click to change color
          </button>
        </header>
      </div>
    );
  }
}
export default App;
