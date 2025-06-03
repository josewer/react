import { useState } from 'react'
import './App.css'
import { RutinaPrueba } from './Components/RutinaPrueba'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <RutinaPrueba />
      </main>
    </>
  )
}

export default App
