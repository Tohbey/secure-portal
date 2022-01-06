import {
  BrowserRouter as Router,
  Route, Routes, 
} from "react-router-dom";
import React from 'react';
import Login from '../src/pages/auth/login';
import Signup from '../src/pages/auth/signup';
import Validation from '../src/pages/auth/validation';
import ForgotPassword from '../src/pages/auth/forgot-password';


function App() {
  return (
    <Router>
      <Routes>
          <Route path='/login' exact element={<Login />} />
          <Route path='/signup' exact element={<Signup />} />
          <Route path='/validation' exact element={<Validation />} />
          <Route path='/forgot-Password' exact element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
