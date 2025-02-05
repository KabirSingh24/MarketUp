import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // Success state to conditionally render success message

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/signup', { name, email, password })
    .then(result => console.log(result))
    .catch(err=> console.log(err))

    // Simple validation
    if (!name || !email || !password) {
      setError('All fields are required.');
      return;
    }

    // Clear previous messages
    setError('');
    setSuccess(false);

    // Simulate a successful signup (replace with your API call)
    console.log('Submitting signup data:', { name, email, password });

    // Simulate success message
    setSuccess(true);
    
    // Reset the form (optional)
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container mt-5 p-5">
      {success ? (
        // Show success message with congratulations
        <div className="text-center p-5">
          <img 
            src="media/images/congratulate.svg" 
            alt="Congratulations" 
            style={{ width: "400px", marginBottom: "30px" }} // Increased image size
          />
          <h1 className="text-success">Congratulations!</h1>
          <p>Your account has been created successfully.</p>
          <p>
            Login to{' '}
            <a href="/login" style={{ textDecoration: 'none' }}>
              Kite
            </a>{' '}
            with your client ID TJN706. You would have received the login credentials in your e-mail.
          </p>
          <button 
            className="btn btn-primary" 
            onClick={() => navigate('/login')}
          >
            Go to Login
          </button>
        </div>
      ) : (
        // Show the signup form
        <div className="row">
          <div className="col-md-8 mt-5">
            <img 
              src="media/images/signup.png" 
              style={{ width: '80%' }} 
              alt="Signup Illustration" 
            />
          </div>

          <div className="col-md-4 mt-5">
            <h1 className="text-black landing-head" style={{ fontSize: '30px' }}>
              Signup Now
            </h1>
            <h5 className="text-muted mt-3" style={{ fontSize: '20px' }}>
              Create your account
            </h5>

            <form onSubmit={handleSubmit} className="signup-form mt-4">
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  value={name}
                  onChange={(e) => setUsername(e.target.value)}
                  autoCorrect="off"
                  autoCapitalize="none"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoCorrect="off"
                  autoCapitalize="none"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && <p className="text-danger">{error}</p>}
              {success && <p className="text-success">Signup successful! Please login to continue.</p>}

              <button
                type="submit"
                className="btn btn-primary rounded-0 px-5"
                style={{ fontSize: '14px' }}
              >
                Signup
              </button>
            </form>

            <p className="mt-3">
              Already have an account?{' '}
              <a href="/login" style={{ textDecoration: 'none' }}>
                Login here
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Footer/Disclaimer */}
      <div
        className="row mt-5 text-center"
        style={{ fontSize: '0.80rem', lineHeight: '18px' }}
      >
        <p>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit <a href='' style={{textDecoration:"none"}}>this article</a> to know more.<br></br><br></br>By submitting your contact details, you authorize Zerodha to contact you even if you are registered on DND & conduct online KYC for trading & demat account opening as per KRA regulations and PMLA guidelines.<br></br><br></br>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <a href='' style={{textDecoration:"none"}}>offline forms</a>. For help, <a href='' style={{textDecoration:"none"}}>click here.</a>.</p>
        <p className="mb-5">
          By signing up, you agree to our Terms & Conditions and Privacy Policy.
          <br />
          For any queries, please contact our support.
        </p>
      </div>
    </div>
  );
}

export default Signup;







