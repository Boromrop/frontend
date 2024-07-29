import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Form as BootstrapForm } from 'react-bootstrap';

const LoanDetailsSchema = Yup.object().shape({
  amount: Yup.number().positive('Must be positive').required('Required'),
  purpose: Yup.string().required('Required'),
  term: Yup.number().positive('Must be positive').integer('Must be an integer').required('Required'),
});

const LoanDetails = ({ onSubmit }) => (
  <Formik
    initialValues={{ amount: '', purpose: '', term: '' }}
    validationSchema={LoanDetailsSchema}
    onSubmit={onSubmit}
  >
    {({ errors, touched }) => (
      <Form>
        <BootstrapForm.Group className="mb-3">
          <BootstrapForm.Label>Loan Amount ($)</BootstrapForm.Label>
          <Field name="amount" type="number" as={BootstrapForm.Control} isInvalid={touched.amount && errors.amount} />
          <BootstrapForm.Control.Feedback type="invalid">{errors.amount}</BootstrapForm.Control.Feedback>
        </BootstrapForm.Group>

        <BootstrapForm.Group className="mb-3">
          <BootstrapForm.Label>Loan Purpose</BootstrapForm.Label>
          <Field name="purpose" as="select" className="form-control" isInvalid={touched.purpose && errors.purpose}>
            <option value="">Select a purpose</option>
            <option value="home">Home Improvement</option>
            <option value="business">Business</option>
            <option value="education">Education</option>
            <option value="other">Other</option>
          </Field>
          <BootstrapForm.Control.Feedback type="invalid">{errors.purpose}</BootstrapForm.Control.Feedback>
        </BootstrapForm.Group>

        <BootstrapForm.Group className="mb-3">
          <BootstrapForm.Label>Loan Term (months)</BootstrapForm.Label>
          <Field name="term" type="number" as={BootstrapForm.Control} isInvalid={touched.term && errors.term} />
          <BootstrapForm.Control.Feedback type="invalid">{errors.term}</BootstrapForm.Control.Feedback>
        </BootstrapForm.Group>

        <Button variant="primary" type="submit">Next</Button>
      </Form>
    )}
  </Formik>
);

export default LoanDetails;