import React from "react";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
// import NotFound from "../../Week2/app/src/Components/NotFound/NotFound";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Portfolio from "./Components/Portfolio/Portfolio";

export default function App() {

  let routers = createHashRouter([
    {path:"", element:<Layout/>, children:[
      {index:true, element: <Home/>},
      {path:'home', element: <Home/>},
      {path:'portfolio', element: <Portfolio/>},
      {path:'about', element: <About/>},
      {path:'contact', element: <Contact/>},
      // {path:'*', element: <NotFound/>}
    ]}
  ])

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}
