import React, { useContext } from 'react'
import { UserContext } from './UseContext'

const AboutScreen = () => {

  const { user } = useContext(UserContext)

  return (
    <div>
      <h1>About Screen</h1>
      <pre>
        {JSON.stringify(user,null,3)}
      </pre>
    </div>
  )
}

export default AboutScreen
