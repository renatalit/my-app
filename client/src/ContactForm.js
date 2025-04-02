import React, { useState } from 'react';
import axios from 'axios';

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
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Display status message */}
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};

export default ContactForm;
