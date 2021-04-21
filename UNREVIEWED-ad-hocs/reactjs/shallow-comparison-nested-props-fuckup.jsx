import React from 'react';
import logo from './logo.svg';
import './App.css';
class MyComponent extends React.Component {
  render() {
    console.log('Inner component rendering');
    return (
      <>
        <div>
          {`Prop: ${this.props.prop}`}
        </div>
        <div>
          {`NestedProp: ${this.props.nestedProp.value}`}
        </div>
      </>
    );
  } 
}
class MyPureComponent extends React.PureComponent {
  render() {
    console.log('Inner pure component rendering');
    return (
      <>
        <div>
          {`Prop: ${this.props.prop}`}
        </div>
        <div>
          {`NestedProp: ${this.props.nestedProp.value}`}
        </div>
      </>
    );
  } 
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      componentProp: '',
      componentNestedProp: {
        value: ''
      },
      pureComponentProp: '',
      pureComponentNestedProp: {
        value: ''
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
          <label>
            Component prop
            <input onChange={(e) => this.setState((state) => {
              state.componentProp = e.target.value;
              return state;
            })}/>
          </label>
          <label>
            Component nested prop
            <input onChange={(e) => this.setState((state) => {
              state.componentNestedProp.value = e.target.value;
              return state;
            })}/>
          </label>
          <MyComponent
            prop={this.state.componentProp}
            nestedProp={this.state.componentNestedProp}
          />
          <label>
            Pure component prop
            <input onChange={(e) => this.setState((state) => {
              state.pureComponentProp = e.target.value;
              return state;
            })}/>
          </label>
          <label>
            Pure component nested prop
            <input onChange={(e) => this.setState((state) => {
              state.pureComponentNestedProp.value = e.target.value;
              return state;
            })}/>
          </label>
          <MyPureComponent
            prop={this.state.pureComponentProp}
            nestedProp={this.state.pureComponentNestedProp}
          />
        </header>
      </div>
    );
  }
}
export default App;
