import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LenderDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/api/loan_management/lender/applications/');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <Container className="mt-5">
      <h2>Pending Loan Applications</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Purpose</th>
            <th>Term</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.id}</td>
              <td>{app.customer_name}</td>
              <td>${app.amount}</td>
              <td>{app.purpose}</td>
              <td>{app.term} months</td>
              <td>
                <Link to={`/lender/applications/${app.id}`}>
                  <Button variant="primary">Review</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default LenderDashboard;