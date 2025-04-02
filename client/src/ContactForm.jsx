import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State for handling errors or success message
  const [statusMessage, setStatusMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to backend (Express server)
      const response = await axios.post('http://localhost:5000/contact', formData);

      // If form submission is successful
      if (response.data.success) {
        setStatusMessage('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }
    } catch (error) {
      // Handle error if the request fails
      setStatusMessage('Failed to submit the form. Please try again later.');
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" style={{ maxWidth: '500px' }} controlId="formName">
          <Form.Label>
            Name <span style={{ color: 'red' }}>*</span>
          </Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
        </Form.Group>
      
        <Form.Group className="mb-3" style={{ maxWidth: '500px' }} controlId="formEmail">
          <Form.Label>
            Email <span style={{ color: 'red' }}>*</span>
          </Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
        </Form.Group>
      
        <Form.Group className="mb-3" style={{ maxWidth: '500px' }} controlId="formMessage">
          <Form.Label>
            Message <span style={{ color: 'red' }}>*</span>
          </Form.Label>
          <Form.Control as="textarea" name="message" rows={3} value={formData.message} onChange={handleChange} required />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {/* Display status message */}
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};

export default ContactForm;
