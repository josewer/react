import { useState } from 'react'
import './App.css'
import { RutinaPrueba } from './Components/RutinaPrueba'
import Login from './Components/Login'



function App() {

  const [user , setUser] = useState()

  const logout = () => (setUser(null)) 

  return (
    <>
      <main>

        {
          user 
              ? <RutinaPrueba user={user} logout={logout}/>
              : <Login setUser={setUser} />
        }

      </main>
    </>
  )
}

export default App
