// src/components/Login.jsx
import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!credentials.username || !credentials.password) {
      setError('Please enter both username and password.');
      return;
    }
    setError('');
    console.log('Pretend login with', credentials);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 p-4">
      <form 
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-md p-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-pink-400">
          Sign In
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <label className="block text-gray-700 mb-2" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          className="w-full border-2 border-amber-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="Your username"
        />

        <label className="block text-gray-700 mb-2" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          className="w-full border-2 border-amber-300 rounded-lg px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="••••••••"
        />

        <button
          type="submit"
          className="w-full py-2 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
