import { useState } from 'react'
import {Button  } from "./stories/Button";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button size='small' type='primary' text='Button'/>
    </div>
  )
}

export default App
