import logo from './logo.svg';
import './App.css';
import { withAnalytics } from './hoc/withAnalytics';
import { useAnalytics } from './hooks/useAnalytics';

function Component1 () {
  const { isLoggedIn } = useAnalytics('Component1');
  return (
    <div>
      Component1
    </div>
  )
}

function Component2 () {
  return (
    <div>
      Component2
    </div>
  )
}

function Component3 () {
  useAnalytics('Component3');
  return (
    <div>
      Component3
    </div>
  )
}
// const Component1 = withAnalytics(BaseComponent1);
// const Component2 = BaseComponent2;
// const Component3 = withAnalytics(BaseComponent3);
function App() {
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
      </header>
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

export default App;
