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
import Home from '../src/pages/home/home';
import Profile from '../src/pages/profile';
import SharedDocuments from '../src/pages/shared';
import ShareDocuments from '../src/pages/share';
import UploadedDocuments from '../src/pages/uploaded';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/login' exact element={<Login />} />
          <Route path='/validation' exact element={<Validation />} />
          <Route path='/signup' exact element={<Signup />} />
          <Route path='/verify' exact element={<Verification />} />
          <Route path='/forgot-Password' exact element={<ForgotPassword />} />
          <Route path='/forgot-Password/:email/:token' exact element={<ForgotPassword />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/profile' exact element={<Profile />} />
          <Route path='/share' exact element={<ShareDocuments />} />
          <Route path='/shared-document' exact element={<SharedDocuments />} />
          <Route path='/uploaded' exact element={<UploadedDocuments />} />
          <Route path='' element={<Navigate to="login" />} />
      </Routes>
    </Router>
  );
}

export default App;
