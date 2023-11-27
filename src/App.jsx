import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { Home } from './views/home/Home'
import { Coffes } from './views/coffes/Coffes'
import { Contact } from './views/contact/Contact'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    } ,
    {
      path: "/coffes",
      element: <Coffes></Coffes>
    } ,
    {
      path: "/contact",
      element: <Contact></Contact>
    }
  ])

  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
