import { Outlet } from 'react-router-dom';
import React from 'react';

import Navbar from '../components/Navbar';
import Alert from '../components/Alert';

const Layout = ({ mode, toggleMode, alert }) => {
  return (
    <>
      <Navbar
        title='TextUtils'
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <Outlet />
    </>
  );
};

export default Layout;
