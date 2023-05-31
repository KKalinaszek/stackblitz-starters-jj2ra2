import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PersonForm = ({ addPerson }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    age: '',
    city: '',
    email: '',
  });

  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      age: Yup.number().required('Age is required'),
      city: Yup.string().required('City is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
    }),
    onSubmit: (values) => {
      addPerson(values);
      formik.resetForm();
      saveUserToJson(values);
    },
  });

  const saveUserToJson = async (person) => {
    try {
      const response = await fetch('/api/saveUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(person),
      });
      if (!response.ok) {
        throw new Error('Failed to save user');
      }
      // User saved successfully
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.age && formik.errors.age ? (
          <div>{formik.errors.age}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.city && formik.errors.city ? (
          <div>{formik.errors.city}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PersonForm;
