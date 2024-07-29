import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PasswordReset from './components/Auth/PasswordReset';
import OTPLogin from './components/Auth/OTPLogin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/otp-login" element={<OTPLogin />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;