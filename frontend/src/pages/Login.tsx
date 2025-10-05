import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/Auth/AuthLayout';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/token', new URLSearchParams({
        username: username,
        password: password,
      }));
      login(response.data.access_token);
      navigate('/dashboard');
    } catch (error) {
      console.error("Login failed:", error);
      // TODO: Display error message to the user
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-8 text-center text-primary">Login</h2>
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
          <label className="block mb-2" htmlFor="password">Password</label>
          <input 
            className="w-full p-2 rounded bg-gray-700 border border-gray-600" 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-primary">Forgot password?</a>
        </div>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded w-full">Login</button>
        <p className="text-center mt-4">
          Don't have an account? <a href="/register" className="text-primary">Register</a>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;