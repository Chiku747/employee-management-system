import React, { useState } from "react";
import { useContext,createContext } from "react";

import { LoggedInUserContext } from "./loggedInUserContext.js";
  
const LoggedInUserProvider = ({ children }) =>{
  const [loggedInUser,setLoggedInUser] = useState(null);
  


  return(
    <LoggedInUserContext.Provider value={ {loggedInUser, setLoggedInUser }} >
      {children}
    </LoggedInUserContext.Provider>
  )
}

export default LoggedInUserProvider 