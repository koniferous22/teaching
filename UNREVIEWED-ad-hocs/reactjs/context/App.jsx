import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { LoggedInContext } from './AppContext';

const Nav = styled.nav`
  display: flex;
  div {
    ${(props) => css`
      color: ${props.theme.mainColor};
    `}
    margin-right: 20px;
  }
`;

function Header() {
  const { isLoggedIn, changeLogIn}  = useContext(LoggedInContext);
  return (
    <Nav>
      <div>
        Home
      </div>
      <div>
        Search
      </div>
      {
        isLoggedIn && (
          <div>
            Private stuff here
          </div>
        )
      }
      <button onClick={changeLogIn}>
        {
          isLoggedIn
            ? 'Log out'
            : 'Log in'
        }
      </button>
    </Nav>
  )
}

function Content() {
  const { isLoggedIn } = useContext(LoggedInContext);
  return (
    isLoggedIn
      ? (
        <div className="App-header">
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
        </div>
      )
    : (
      <div>
        Unauthorized users cannot access content
      </div>
    )
  )
}

function App() {
  return (
    <>
      <div>
        <div className="App">
          <Header/>
        </div>
      </div>
      <Content />
    </>
  );
}

export default App;
