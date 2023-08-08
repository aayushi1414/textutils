import React from 'react';
import { Route, Routes } from 'react-router-dom';

import TextForm from '../components/TextForm';
import About from '../components/About';
import Layout from '../layout/Layout';

const AppRoute = ({ mode, toggleMode, showAlert, alert }) => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout
            toggleMode={toggleMode}
            alert={alert}
            mode={mode}
          />
        }
      >
        <Route
          index
          element={
            <TextForm
              showAlert={showAlert}
              heading='Enter the text to analyze'
              mode={mode}
            />
          }
        />
        <Route
          path='/about'
          element={<About />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoute;
