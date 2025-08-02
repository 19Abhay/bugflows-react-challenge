import React, { useState } from 'react';
import '../styles/global.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    alert(`Logged in as ${username}`);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Login Form</h2>

      <div className="form-group">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="login-button">Login</button>
    </form>
  );
};

export default LoginForm;
