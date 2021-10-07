import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  return (
    <div className="App">
      <h1>CYA Cancer Baton</h1>
      <input type="text" name="runnerNames" value={input} onInput={e => setInput(e.target.value)}/>
      <h2>{input}</h2>
    </div>
  );
}

export default App;
