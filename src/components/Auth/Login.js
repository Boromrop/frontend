import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useSpring, animated } from 'react-spring';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login/', formData);
      // Handle successful login (e.g., store token, redirect)
      console.log('Login successful:', response.data);
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 }
  });

  return (
    <animated.div style={props}>
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </animated.div>
  );
};

export default Login;