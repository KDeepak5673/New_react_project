import { useState } from 'react'
import './App.css'

function App() {

  const [counter , setCounter] = useState(5)

  const addValue = () => {
    if (counter <= 19){
      setCounter(counter + 1 );
    }
  }

  const removeValue = () => {
    if (counter >= 1){
      setCounter(counter - 1 );

    }
  }

  return (
    <>
      <h1 id='heading1'>Deepak Kumar</h1>
      <h2 id='heading2'>Counter value: {counter}</h2>

      <button id='button' onClick={addValue}>Add value</button>
      <br />
      <button id='button' onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
