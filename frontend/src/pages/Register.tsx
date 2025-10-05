import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/Auth/AuthLayout';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await api.post('/auth/register', { username, email, password });
      login(response.data.access_token);
      navigate('/dashboard');
    } catch (error) {
      console.error("Registration failed:", error);
      // TODO: Display error message to the user
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-8 text-center text-primary">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="username">Username</label>
          <input 
            className="w-full p-2 rounded bg-gray-700 border border-gray-600" 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">Email</label>
          <input 
            className="w-full p-2 rounded bg-gray-700 border border-gray-600" 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="password">Password</label>
          <input 
            className="w-full p-2 rounded bg-gray-700 border border-gray-600" 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="confirm-password">Confirm Password</label>
          <input 
            className="w-full p-2 rounded bg-gray-700 border border-gray-600" 
            type="password" 
            id="confirm-password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            I agree to the <a href="#" className="text-primary">terms and conditions</a>
          </label>
        </div>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded w-full">Register</button>
        <p className="text-center mt-4">
          Already have an account? <a href="/login" className="text-primary">Login</a>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Register;
