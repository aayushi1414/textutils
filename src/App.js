import React, { useEffect, useState } from 'react';
import AppRoute from './routes/AppRoute';

function App() {
  const [mode, setMode] = useState('light'); //Weather dark mode is Enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  };

  useEffect(() => {
    if (alert !== null) {
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
  }, [alert]);

  return (
    <AppRoute
      mode={mode}
      toggleMode={toggleMode}
      showAlert={showAlert}
      alert={alert}
    />
  );
}

export default App;
