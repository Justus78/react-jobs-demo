import React from 'react';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Components/Navbar';
import { ToastContainer } from 'react-toastify';

/**
 * MainLayout component serves as a layout wrapper for all pages that use it.
 * It includes the Navbar and an Outlet, which will dynamically render the 
 * child components based on the current route.
 */
const MainLayout = () => {
  return (
    <>
      {/* Navbar will always be displayed at the top of the layout */}
      <Navbar />

      {/* The Outlet component acts as a placeholder where child components 
      (depending on the route) will be rendered. */}      
      <Outlet />  
      <ToastContainer />    
    </>
  );
};

export default MainLayout;
