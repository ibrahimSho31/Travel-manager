import { useState } from 'react';
import styles from '../Login/login.css';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset error flags
    setEmailError(false);
    setPasswordError(false);

    // Validate email and password
    if (!email.trim()) {
      setEmailError(true);
    }
    if (!password.trim()) {
      setPasswordError(true);
    }

    if (email && password) {
      navigate("/workspace")
    }
  };

  return (
    <div className='login-body'>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className='form-header'>
          <div>
            <h1>Login</h1>
            <p>Login to your account</p>
          </div>

          <div>
            <img src='images/logo.png' alt='Logo' />
          </div>
        </div>

        <div className='form-body'>
          <p>Email</p>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p>Please fill this.</p>}

          <p>Password</p>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && <p>Please fill this.</p>}
        </div>

        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
