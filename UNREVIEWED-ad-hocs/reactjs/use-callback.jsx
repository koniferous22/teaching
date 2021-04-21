function App() {

  const [secretToken, setSecretToken] = useState({ value: 0});
  const [number2, setNumber2] = useState({ value: 0});
  const [number3, setNumber3] = useState({ value: 0});

  const callback = useCallback(() => {
    window.alert('some event happened');
  }, [number2])

  useEffect(() => {
    console.log('callback has changed');
  }, [callback])

  const memoizedProduct = useMemo(() => {
    return secretToken.value * number2.value;
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
          Number 1
          <input type="number" onChange={(e) => setSecretToken({
            value: e.target.value
          })} />
        </label>
        <label>
          Number 2
          <input type="number" onChange={(e) => setNumber2({
            value: e.target.value
          })} />
        </label>
        <div>
          {
            memoizedProduct
          }
        </div>
        {/* <div>
          {
            memoizedSum
          }
        </div> */}
        <button onClick={callback} />
        
      </header>
    </div>
  );
}

export default App;
