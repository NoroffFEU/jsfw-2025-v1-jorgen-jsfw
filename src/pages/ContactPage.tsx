// src/pages/ContactPage.tsx

import { useState, useEffect } from 'react';
import type { ContactFormData, ContactFormErrors } from '../types/contact';
import Layout from '../components/Layout';
import styles from './ContactPage.module.css';
import BackToHome from '../components/BackToHome';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Us'; // browser tab text
  }, []);

  // Setup State for form fields
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    subject: '',
    email: '',
    message: '',
  });

  // Setup State for errors
  const [errors, setErrors] = useState<ContactFormErrors>({});

  // show 'message has been sent' text
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setSubmitted(false); // hide success message when user types again

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
      setSubmitted(true); // show success message after clicking 'send button'
      setErrors({}); // clear errors

      // reset form
      setFormData({
        fullName: '',
        subject: '',
        email: '',
        message: '',
      });
    }
  }

  return (
    <Layout>
      <BackToHome />

      <h1 className={styles.header}>Contact Us</h1>

      {submitted && (
        <p className={styles.success}>Your message has been sent!</p>
      )}

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
          {errors.fullName && (
            <p className={styles.fullname}>&#11205;{errors.fullName}</p>
          )}
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
          {errors.subject && (
            <p className={styles.subject}>&#11205;{errors.subject}</p>
          )}
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
          {errors.email && (
            <p className={styles.email}>&#11205;{errors.email}</p>
          )}
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
          {errors.message && (
            <p className={styles.message}>&#11205;{errors.message}</p>
          )}
        </div>

        <button className={styles.contactFormButton} type="submit">
          Send
        </button>
      </form>
    </Layout>
  );
}
