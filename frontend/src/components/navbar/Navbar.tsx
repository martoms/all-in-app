import React from 'react';
import MobileNav from './MobileNav';
import MainNavbar from './MainNavbar';

const Navbar: React.FC = () => {
  
  return (
    <>
    <MainNavbar />
    <MobileNav />
    </>
  );
};

export default Navbar;
