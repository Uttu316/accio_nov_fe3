import { useState } from "react";
import styles from "./userForm.module.css";

const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = ({ name, email, message }) => {
  const errors = {};
  if (!name.trim()) {
    errors.name = "Name is required";
  } else if (name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }
  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(email.trim())) {
    errors.email = "Enter a valid email address";
  }
  if (!message.trim()) {
    errors.message = "Message is required";
  } else if (message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }
  return errors;
};

const UserForm = () => {
  const [user, setUser] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // Clear the field's error as soon as the user edits it
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
    setSubmitted(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(user);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }
    // Valid: store it or send it to a server here
    console.log(user);
    setErrors({});
    setUser(INITIAL_STATE);
    setSubmitted(true);
  };

  const fieldClass = (name) =>
    errors[name] ? `${styles.input} ${styles.inputError}` : styles.input;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Reach Me Out</h2>
      <p className={styles.subtitle}>
        Have a question or want to work together? Send a message.
      </p>
      <form className={styles.form} onSubmit={onSubmit} noValidate>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={fieldClass("name")}
            onChange={onChange}
            placeholder="Enter name"
            type="text"
            id="name"
            name="name"
            value={user.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span id="name-error" className={styles.error}>
              {errors.name}
            </span>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={fieldClass("email")}
            onChange={onChange}
            type="email"
            placeholder="Enter email"
            id="email"
            name="email"
            value={user.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span id="email-error" className={styles.error}>
              {errors.email}
            </span>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={`${fieldClass("message")} ${styles.textarea}`}
            onChange={onChange}
            id="message"
            name="message"
            rows={5}
            placeholder="Enter message here..."
            value={user.message}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          ></textarea>
          {errors.message && (
            <span id="message-error" className={styles.error}>
              {errors.message}
            </span>
          )}
        </div>
        <button className={styles.button} type="submit">
          Submit
        </button>
        {submitted && (
          <p className={styles.success} role="status">
            Thanks! Your message has been sent.
          </p>
        )}
      </form>
    </div>
  );
};
export default UserForm;
