import React from 'react';
import Header from '../header/header';
import { Outlet } from 'react-router-dom';

function HeaderWrapper({ children }) {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default HeaderWrapper;
