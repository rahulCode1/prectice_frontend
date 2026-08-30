
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import AddUser from './pages/AddUser';
import RootLayout from './layout/RootLayout';
import Login from "./pages/Login.jsx"
import { UserProvider } from './contaxt/userContext.jsx';
import Users from "./pages/Users.jsx"
import UserDetails, {loader as userDetailsLoader } from "./pages/UserDetails.jsx"

const router = createBrowserRouter([
  {
    path: "/", element: <RootLayout />,
    children: [
      {
        index: true,
        element: <h1>Home page </h1>
      },
      {
        path: "users",

        children: [
          {
            index: true,
            element: <Users />
          },
          {
            path: ":id",
            loader: userDetailsLoader, 
            element: <UserDetails />
          }
        ]
      },
      {
        path: "addUser",
        element: <AddUser />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
])

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
