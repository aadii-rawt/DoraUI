import React from 'react'
import { Outlet } from 'react-router-dom'

function ElementLayout() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default ElementLayout
