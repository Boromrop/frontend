import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useSpring, animated } from 'react-spring';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/password-reset/', { email });
      setMessage('Password reset email sent. Please check your inbox.');
      setError('');
    } catch (err) {
      setError('Failed to send password reset email. Please try again.');
      setMessage('');
    }
  };

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 }
  });

  return (
    <animated.div style={props}>
      <h2>Password Reset</h2>
      {message && <Alert variant="success">{message}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit">Reset Password</Button>
      </Form>
    </animated.div>
  );
};

export default PasswordReset;