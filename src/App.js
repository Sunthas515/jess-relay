import React, { Component, useState } from "react"
import "./App.css"

class LambdaDemo extends Component {
  render() {
    const [name, setInput] = useState('');

    return (
      <div className="App">
        <h1>CYA Cancer Baton</h1>
        <input type="text" name="runnerNames" value={name} onInput={e => setInput(e.target.value)} />
        <h2>{name}</h2>
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
