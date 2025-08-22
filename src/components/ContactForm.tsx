import React, { useState } from "react";
import styles from "../styles/ContactForm.module.css";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add submit logic here
    alert("Contact form submitted!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className={styles.input}
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className={styles.input}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        className={styles.textarea}
        rows={4}
      />
      <button type="submit" className={styles.button}>Send</button>
    </form>
  );
};

export default ContactForm;
