
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './layout/RootLayout'
import Elements from './pages/Elements'
import ElementLayout from './layout/ElementLayout'
import GetCode from './pages/GetCode'
import { menuItems } from './utils/utils'
import Create from './pages/Create'

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
          children : [ ...menuItems.map((item) => ({path : item.route, element :<Elements />})), 
            {
              path : "/:username/:elementId",
              element : <GetCode />
            },
          ]
        },
        {
          path: "/create",
          element : <Create />
        }
      ],
    },
   
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
