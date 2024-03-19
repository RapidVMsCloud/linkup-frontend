"use client"
import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:1337/api/auth/local/register', formData);
      console.log(response.data); // Assuming you want to log the response data
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="h-screen bg-indigo-100 flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-lg min-w-full">
          <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Formregister</h1>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="username">Username</label>
            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="username" onChange={handleChange} />
          </div>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="email">Email</label>
            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email" placeholder="@email" onChange={handleChange} />
          </div>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="password">Password</label>
            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="password" name="password" id="password" placeholder="password" onChange={handleChange} />
          </div>
          <button type="submit" className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Register</button>
          <button type="submit" className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">Login</button>
        </form>
      </div>
    </div>
  );
}
