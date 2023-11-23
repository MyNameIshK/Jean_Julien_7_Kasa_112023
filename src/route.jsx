import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/HomePage/Home.jsx'
import Footer from "./components/Footer/Footer.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import About from './components/About/About.jsx'
import AppartementDescription from './components/AppartementDescription/AppartementDescription.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/AppartementDescription/:id',
    element: (
      <>
        <Navbar />
        <AppartementDescription />
        <Footer />
      </>
    )
  },
  {
    path: "/About",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    )
  },
  {
    path: '/errorPage',
    element: (
      <>
        <Navbar />
        <ErrorPage />
      </>
    )
  },
  {
    path: '*',
    element: (
      <>
        <Navbar />
        <ErrorPage />
      </>
    )
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
