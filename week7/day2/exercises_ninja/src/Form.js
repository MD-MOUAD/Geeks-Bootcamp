import React, { useState } from "react";
import Input from "./Input";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const validateField = (name, value) => {
    let error = "";

    if (!value.trim()) {
      error = `${name} is required`;
    } else {
      switch (name) {
        case "phone":
          if (!/^\d{10}$/.test(value)) {
            error = "Phone must be 10 digits";
          }
          break;
        case "email":
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = "Invalid email format";
          }
          break;
        default:
          break;
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = {};

    for (const field in formData) {
      const error = validateField(field, formData[field]);
      newErrors[field] = error;
      if (error) isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="form-container">
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />

        <Input
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />

        <Input
          name="phone"
          label="Phone"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          type="tel"
        />

        <Input
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          type="email"
        />

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
