import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import React from "react";

function Button(props) {
  return (
    <button>{props.label}</button>
  );
}
function App() {
  const [count, setCount] = useState(0)
    return (
    <div>
      <h2>Button Component</h2>

      <Button label="Save" />
      <Button label="Edit" />
      <Button label="Delete" />
    </div>
  );
}

export default App
