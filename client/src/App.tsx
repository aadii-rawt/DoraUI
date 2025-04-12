
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './layout/RootLayout'
import Element from './pages/Element'
import ElementLayout from './layout/ElementLayout'

function App() {
  const router = createBrowserRouter([
    {
      path : "",
      element : <RootLayout />,
      children : [
        {
          path : "/",
          element: <Home />
        },
        {
          path : "element",
          element : <ElementLayout />,
          children : [
            {
              path : "",
              element : <Element />
            },
            {
              path : "button",
              element : ""
            },
          ]
        }
      ],
    },
   
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
