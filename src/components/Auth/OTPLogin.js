import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useSpring, animated } from 'react-spring';

const OTPLogin = () => {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [step, setStep] = useState('request');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleRequestOTP = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/otp-request/', { email });
      setStep('verify');
      setMessage('OTP sent to your email.');
      setError('');
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/otp-verify/', { email, otp });
      setMessage('OTP verified successfully. You are now logged in.');
      setError('');
      // Handle successful login (e.g., store token, redirect)
    } catch (err) {
      setError('Invalid OTP. Please try again.');
    }
  };

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 }
  });

  return (
    <animated.div style={props}>
      <h2>OTP Login</h2>
      {message && <Alert variant="success">{message}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      {step === 'request' ? (
        <Form onSubmit={handleRequestOTP}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          <Button variant="primary" type="submit">Request OTP</Button>
        </Form>
      ) : (
        <Form onSubmit={handleVerifyOTP}>
          <Form.Group>
            <Form.Label>OTP</Form.Label>
            <Form.Control type="text" value={otp} onChange={(e) => setOTP(e.target.value)} required />
          </Form.Group>
          <Button variant="primary" type="submit">Verify OTP</Button>
        </Form>
      )}
    </animated.div>
  );
};

export default OTPLogin;