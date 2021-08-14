import React, { useContext } from 'react'
import { UserContext } from './UseContext'

const LoginScreen = () => {
  const {setUser} = useContext(UserContext)

  return (
    <div>
      <h1>LoginScreen</h1>
      <button
        onClick={()=>setUser({
          id:1234,
          name:"adrian"
        })}      
      >
        login
      </button>
    </div>
  )
}

export default LoginScreen
