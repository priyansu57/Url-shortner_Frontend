import React, { useState } from 'react';
import axios from 'axios';
import { Register } from '../../server/Register';
import { Link, useNavigate } from 'react-router-dom';

function RegisterForm({ setLoading }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/login'); // Redirect to login page after registration
    try {
      // Send to your backend
      await Register({ name: form.name, email: form.email, password: form.password });
      console.log("Form submitted:", form);
      setMessage("✅ Registered successfully!");
      setForm({ name: '', email: '', password: '' });
    } catch (err) {
      setMessage("❌ Registration failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg transition-all duration-300 hover:shadow-blue-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">📝 Create an Account</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Enter a strong password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 rounded-xl transition-transform transform hover:scale-105"
          >
            Register
          </button>

          {/* Message */}
          {message && (
            <p className={`text-center font-medium ${message.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </form>
        
        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account? <span className="text-blue-600 hover:underline cursor-pointer" onClick={() => setLoading(true)}> <Link to="/login">Login</Link></span>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
