import React from 'react';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Success = () => (
  <Alert variant="success">
    <Alert.Heading>
      <FontAwesomeIcon icon={faCheckCircle} className="mr-2" /> Application Submitted Successfully!
    </Alert.Heading>
    <p>
      Thank you for submitting your loan application. We have received your information and will review it shortly. 
      You will be notified of the next steps via email.
    </p>
  </Alert>
);

export default Success;