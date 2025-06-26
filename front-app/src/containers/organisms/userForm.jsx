import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Input from '../../components/atoms/input';
import LabeledInput from '../../components/molecules/LabeledInput';
import { Field } from "@chakra-ui/react"
import { axiosRequests } from '../../helpers/request';

const UserForm = (onFinish, onChange) => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    useEffect(() => {

    }, []);

     const handleChange = (e) => {
        console.log("handleChange", e);
        setForm({ ...form, [e.target.name]: e.target.value });
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axiosRequests.post("http://localhost:5000/users/auth/signup", {
                name: form.name,
                email: form.email,
                password: form.password
            }).then(response => {
                console.log("response", response);
                const { token } = response.data;
                localStorage.setItem('token', token);
            })
 
        } catch (error) {
            console.log("Error submitting form", error);
        }
    };

    return (
        <>
        <h1>FORM</h1>
        <form onSubmit={handleSubmit}>
                <LabeledInput label="Name:" name='name' type='texte' value={form.name} onChange={handleChange}/>
                {/* <label>Name:</label>
                <Input  
                    type="email"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                /> */}

            <LabeledInput label="Email:" name='email' type='email' value={form.email} onChange={handleChange}/>
            
            {/* <LabeledInput label="Password:" name='password' type='password' /> */}
            <LabeledInput label="Password:" name='password' type='password' value={form.password} onChange={handleChange}/>

            <button type="submit">Submit</button>
        </form>
        </>
    );
};

export default UserForm;