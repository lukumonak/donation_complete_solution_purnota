import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Login from './Pages/Login';
import SpecialAccess from './Pages/SpecialAccess';
import { AuthContextProvider } from './context/AuthContext'
import Panding from './Pages/Panding';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);

