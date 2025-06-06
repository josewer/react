import { useState, useEffect } from 'react'
import './App.css'


const FollowMouse = () => {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event
    setPosition({ x: clientX - 25, y: clientY - 25 })
  }


  useEffect(() => {
    if (enable) {
      document.body.classList.add('no-cursor')
      window.addEventListener('mousemove', handleMouseMove)
    }
  
    return () => {
      document.body.classList.remove('no-cursor')
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [enable])

  useEffect(() => {

    console.log('Montando el componente');

    if (enable) {
      window.addEventListener('mousemove', handleMouseMove)
    }

  
    return () => {
      // Lo que hace es eliminar el evento cuando el componente se desmonta
      // o cuando cambia el enable
      // Si no lo hacemos, se queda el evento y se ejecuta cada vez que se mueve el raton
      // Primero se ejecuta el return y luego el useEffect
      console.log('Desmontando el componente');
      window.removeEventListener('mousemove', handleMouseMove)
    }

  } , [enable])


  const handleClick = () => {
      setEnable(!enable)
  }


  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={handleClick}>{enable ? 'Desactivar' : 'Activar'} Seguir puntero</button>
    </>
  )
}



function App() {

  return (
    <main>
      <FollowMouse/>
    </main>
  )
}

export default App
