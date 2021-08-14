import React, { useState } from 'react'
import { AppRouter } from '../../router/AppRouter'

import { UserContext } from './UseContext'
// hacer eso para que que la informacion que este en usercontext para que estes disponible en todos lados

const MainApp = () => {

  const [user, setUser] = useState({})
  return (
    <UserContext.Provider value={{
      user,
      setUser,
    }}>
      <AppRouter />
    </UserContext.Provider>

  )
}

export default MainApp
