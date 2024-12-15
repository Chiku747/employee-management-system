import React from 'react'
import { useState,useEffect } from 'react'
import { UserContext } from './UserContext'
import { LoggedInUserContext } from '../loggedInUserContext'


const UserProvider = ({children}) => {

    const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider