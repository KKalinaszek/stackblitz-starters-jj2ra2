import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PersonForm = ({ addPerson }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    
    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            age: '',
            city: '',
            email: '',
        },
        validationSchema: Yup.object({}),
        onSubmit: (values) => {
            addPerson(values);
            formik.resetForm();
        },
    });

    return (
        <p> </p>
    );
};

export default PersonForm;