
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './layout/RootLayout'
import Elements from './pages/Elements'
import ElementLayout from './layout/ElementLayout'
import GetCode from './pages/GetCode'
import { menuItems } from './utils/utils'
import Create from './pages/Create'
import { UserContextProvider } from './context/userContext';
import Profile from './pages/Profile'
import SettingLayout from './layout/SettingLayout'
import { ProfileSetting } from './pages/settings/ProfileSetting'
import EmailSetting from './pages/settings/EmailSetting'
import UserProfile from './pages/UserProfile'
function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "",
          element: <ElementLayout />,
          children: [...menuItems.map((item) => ({ path: item.route, element: <Elements /> })),
          {
            path: "/:username",
            element: <UserProfile />
          },
          {
            path: "/:username/:elementId",
            element: <GetCode />
          },
          {
            path: "/profile",
            element: <Profile />
          }
          ]
        },
        {
          path: "/create",
          element: <Create />
        },
        {
          path : "",
          element : <SettingLayout />,
          children : [
            {
              path : "/setting/profile",
              element : <ProfileSetting />
            },
            {
              path : "/setting/email",
              element : <EmailSetting />
            },
          ]
        }
      ],
    },

  ])
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  )
}

export default App
