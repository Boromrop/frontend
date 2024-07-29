import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useSpring, animated } from 'react-spring';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    user_type: 'customer'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/register/', formData);
      console.log('Registration successful:', response.data);
      setSuccess('Registration successful!');
      setError('');
    } catch (err) {
      setError('Registration failed. Please try again.');
      setSuccess('');
    }
  };

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 }
  });

  return (
    <animated.div style={props}>
      <h2>Register</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>User Type</Form.Label>
          <Form.Control as="select" name="user_type" onChange={handleChange}>
            <option value="customer">Customer</option>
            <option value="lender">Lender</option>
            <option value="admin">Admin</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">Register</Button>
      </Form>
    </animated.div>
  );
};

export default Register;