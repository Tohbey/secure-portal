import {
  BrowserRouter as Router,
  Navigate,
  Route, Routes,
} from "react-router-dom";
import React from 'react';
import Login from '../src/pages/auth/login';
import Signup from '../src/pages/auth/signup';
import Validation from '../src/pages/auth/validation';
import ForgotPassword from '../src/pages/auth/forgot-password';
import Verification from '../src/pages/auth/verification';


function App() {
  return (
    <Router>
      <Routes>
          <Route path='/login' exact element={<Login />} />
          <Route path='/signup' exact element={<Signup />} />
          <Route path='/validation' exact element={<Validation />} />
          <Route path='/verify' exact element={<Verification />} />
          <Route path='/forgot-Password' exact element={<ForgotPassword />} />
          <Route path='' element={<Navigate to="login" />} />
      </Routes>
    </Router>
  );
}

export default App;
