import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

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
