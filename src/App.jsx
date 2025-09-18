import Button from '@samcurteis/design-system-poc/src/components/button/Button';
import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [theme, setTheme] = useState('light');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      alert(`Logged in!\nEmail: ${email}\nPassword: ${password}`);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome Back</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button type="submit" className="primary" isLoading={isLoading}>
          Log In
        </Button>
      </form>

      <div className="theme-toggle">
        <button
          className="button button--secondary"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          disabled={isLoading}
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
}

export default App;
