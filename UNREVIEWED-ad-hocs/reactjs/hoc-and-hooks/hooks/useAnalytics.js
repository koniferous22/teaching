import { useEffect, useState } from 'react';

export function useAnalytics(componentName) {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [storeCode, setStoreCode] = useState(null);
  const logInAndLogIntoConsole = () => {
    setLoggedIn(true);
    window.alert('User Logged IN');
  }
  useEffect(() => {
    console.log(`Component ${componentName} mounted`);
  }, [])
  
  return {
    isLoggedIn,
    storeCode,
    logInAndLogIntoConsole
  }
}
