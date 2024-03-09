import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar'; 

const Layout = ({ children }) => {
  return (

    <>
    <Sidebar />
    <Outlet />
  </>
  );
};

export default Layout;