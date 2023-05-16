import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
      
      <Footer />
    </>
  );
};

export default Layout;
