import React, { useState, createContext} from 'react';
import { ThemeProvider } from 'styled-components';
export const LoggedInContext = createContext(null);
const theme = {
  mainColor: 'blue',
  linkColor: 'purple'
}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
export const AppContext = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <LoggedInContext.Provider value={{
      isLoggedIn: loggedIn,
      changeLogIn: () => setLoggedIn((prevLoggedIn) => !prevLoggedIn)
    }}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          {
            children
          }
        </ErrorBoundary>
      </ThemeProvider>
    </LoggedInContext.Provider>
  )
}
