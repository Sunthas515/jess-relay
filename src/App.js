class App extends Component {
  render() {
    rconst [input, setInput] = useState('');
    return (
      <div className="App">
        <h1>CYA Cancer Baton</h1>
        <Input type="text" name="runnerNames" value={input} onInput={e => setInput(e.target.value)}/>
        <h2>{input}</h2>
      </div>
    );
  }
}

export default App
