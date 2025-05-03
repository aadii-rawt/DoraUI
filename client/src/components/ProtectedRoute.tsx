import React from 'react'
import userContext from "../context/userContext";

const ProtectedRoute : React.FC = ({children}) => {
    const {user} = userContext()

  return (
    children
  )
}

export default  ProtectedRoute