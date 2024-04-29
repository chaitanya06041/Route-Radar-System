import Map from './Map'
import Navbar from './Navbar'
import AddRoute from './AddRoute';
import TrendingRoutes from './TrendingRoutes';
import Info from './Info';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import TempMap from './TempMap';
import FAQ from './FAQ';
export default function App(){
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Map/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/addroute",
      element:<><Navbar/><AddRoute/></>
    },
    {
      path:"/info",
      element:<><Navbar/><FAQ/></>
    },
    {
      path:"/trendingroutes/:bus",
      element:<><Navbar/><TrendingRoutes/></>
    },
    {
      path:"tempmap",
      element: <TempMap />
    }
  ])
  return(
    <>
    <RouterProvider router={router}/>
    {/* <Map></Map> */}
  </>
  ) ;
}