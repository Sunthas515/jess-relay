import React, { Component, useState } from "react"
import "./App.css"

class LambdaDemo extends Component {
  render() {
    const [input, setInput] = useState('');

    return (
      <div className="App">
        <h1>CYA Cancer Baton</h1>
        <Input type="text" name="runnerNames" value={input} onInput={e => setInput(e.target.value)} />
        <h2>{input}</h2>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    )
  }
}

export default App
