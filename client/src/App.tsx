
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './layout/RootLayout'
import Elements from './pages/Elements'
import ElementLayout from './layout/ElementLayout'
import GetCode from './pages/GetCode'

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
          path : "",
          element : <ElementLayout />,
          children : [
            {
              path : "elements",
              element : <Elements />
            },
            {
              path : "button",
              element : <Elements />
            },
            {
              path : "checbox",
              element : <Elements />
            },
            {
              path : "toggle",
              element : <Elements />
            },
            {
              path : "/:username/:elementId",
              element : <GetCode />
            },
          
          ]
        },
      ],
    },
   
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
