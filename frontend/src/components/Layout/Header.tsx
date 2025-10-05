import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const { logout } = useAuth();

  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-2xl text-primary font-bold">Contract Analysis Platform</h1>
      <nav>
        <a href="/dashboard" className="text-white mr-4">Dashboard</a>
        <a href="/upload" className="text-white mr-4">Upload Document</a>
        <button onClick={logout} className="bg-primary text-white px-4 py-2 rounded">Logout</button>
      </nav>
    </header>
  );
};

export default Header;
