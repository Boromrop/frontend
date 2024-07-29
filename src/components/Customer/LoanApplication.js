import React, { useState } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import axios from 'axios';
import PersonalInfo from './PersonalInfo';
import LoanDetails from './LoanDetails';
import Review from './Review';
import Success from './Success';

const steps = ['Personal Information', 'Loan Details', 'Review', 'Success'];

const LoanApplication = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleSubmit = async (values) => {
    setFormData({ ...formData, ...values });
    if (currentStep < steps.length - 2) {
      nextStep();
    } else {
      try {
        const response = await axios.post('/api/loan_management/apply/', formData, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
        nextStep();
      } catch (error) {
        console.error('Error submitting loan application:', error);
        // Handle error (show error message to user)
      }
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfo onSubmit={handleSubmit} />;
      case 1:
        return <LoanDetails onSubmit={handleSubmit} />;
      case 2:
        return <Review formData={formData} onSubmit={handleSubmit} onBack={prevStep} />;
      case 3:
        return <Success />;
      default:
        return null;
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Loan Application</h2>
              <ProgressBar now={(currentStep / (steps.length - 1)) * 100} className="mb-4" />
              {renderStep()}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoanApplication;