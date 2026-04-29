// src/pages/ContactPage.tsx

import { useState } from 'react';
import type { ContactFormData, ContactFormErrors } from '../types/contact';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  // Setup State for form fields
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    subject: '',
    email: '',
    message: '',
  });

  // Setup State for errors
  const [errors, setErrors] = useState<ContactFormErrors>({});

  // Handle input changes
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Validation Logic
  function validate(): ContactFormErrors {
    const newErrors: ContactFormErrors = {};

    if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters';
    }

    if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  }

  // submit handler
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData); // just for checking, need to remove this after.
      // reset form here if we want that
    }
  }

  return (
    <Layout>
      <Link to="/" style={{ display: 'block', marginBottom: '1rem' }}>
        &larr; Back to Home
      </Link>
      <h1>Contact Us</h1>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        {/* Full name */}
        <label>Full Name</label>
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p>{errors.fullName}</p>}
        </div>

        {/* subject */}
        <label>Subject</label>
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <p>{errors.subject}</p>}
        </div>

        {/* email */}
        <label>Email</label>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        {/* message */}
        <label>Message</label>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>

        <button className={styles.contactFormButton} type="submit">
          Send
        </button>
      </form>
    </Layout>
  );
}
