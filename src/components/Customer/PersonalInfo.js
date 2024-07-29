import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Form as BootstrapForm } from 'react-bootstrap';

const PersonalInfoSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
});

const PersonalInfo = ({ onSubmit }) => (
  <Formik
    initialValues={{ firstName: '', lastName: '', email: '', phone: '' }}
    validationSchema={PersonalInfoSchema}
    onSubmit={onSubmit}
  >
    {({ errors, touched }) => (
      <Form>
        <BootstrapForm.Group className="mb-3">
          <BootstrapForm.Label>First Name</BootstrapForm.Label>
          <Field name="firstName" as={BootstrapForm.Control} isInvalid={touched.firstName && errors.firstName} />
          <BootstrapForm.Control.Feedback type="invalid">{errors.firstName}</BootstrapForm.Control.Feedback>
        </BootstrapForm.Group>

        <BootstrapForm.Group className="mb-3">
          <BootstrapForm.Label>Last Name</BootstrapForm.Label>
          <Field name="lastName" as={BootstrapForm.Control} isInvalid={touched.lastName && errors.lastName} />
          <BootstrapForm.Control.Feedback type="invalid">{errors.lastName}</BootstrapForm.Control.Feedback>
        </BootstrapForm.Group>

        <BootstrapForm.Group className="mb-3">
          <BootstrapForm.Label>Email</BootstrapForm.Label>
          <Field name="email" type="email" as={BootstrapForm.Control} isInvalid={touched.email && errors.email} />
          <BootstrapForm.Control.Feedback type="invalid">{errors.email}</BootstrapForm.Control.Feedback>
        </BootstrapForm.Group>

        <BootstrapForm.Group className="mb-3">
          <BootstrapForm.Label>Phone</BootstrapForm.Label>
          <Field name="phone" as={BootstrapForm.Control} isInvalid={touched.phone && errors.phone} />
          <BootstrapForm.Control.Feedback type="invalid">{errors.phone}</BootstrapForm.Control.Feedback>
        </BootstrapForm.Group>

        <Button variant="primary" type="submit">Next</Button>
      </Form>
    )}
  </Formik>
);

export default PersonalInfo;