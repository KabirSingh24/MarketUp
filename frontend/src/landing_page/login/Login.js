// import React, { useState, useEffect } from 'react';

// // Helper function to generate random captcha text
// function generateRandomText(length = 6) {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let text = '';
//   for (let i = 0; i < length; i++) {
//     text += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return text;
// }

// const LoginPage = () => {
//   const [captchaText, setCaptchaText] = useState('');
//   const [captchaInput, setCaptchaInput] = useState('');
//   const [captchaVerified, setCaptchaVerified] = useState(false);
//   const [resultMessage, setResultMessage] = useState('');

//   // Function to draw the captcha on the canvas
//   const drawCaptcha = () => {
//     const newCaptchaText = generateRandomText(6);
//     setCaptchaText(newCaptchaText);
    
//     const canvas = document.getElementById('captchaCanvas');
//     const ctx = canvas.getContext('2d');

//     // Clear canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Fill background with a light color
//     ctx.fillStyle = '#f2f2f2';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     // Draw random noise lines
//     for (let i = 0; i < 5; i++) {
//       ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
//       ctx.beginPath();
//       ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
//       ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
//       ctx.stroke();
//     }

//     // Set text properties
//     ctx.font = 'bold 24px Arial';
//     ctx.fillStyle = '#000';
//     ctx.textBaseline = 'middle';

//     // Calculate spacing and draw each character with a slight rotation
//     const charSpacing = canvas.width / captchaText.length;
//     for (let i = 0; i < captchaText.length; i++) {
//       const char = captchaText.charAt(i);
//       const x = i * charSpacing + (charSpacing / 4);
//       const y = canvas.height / 2;
//       const angle = Math.random() * 0.3 - 0.15; // random rotation between -0.15 and 0.15 radians

//       ctx.save();
//       ctx.translate(x, y);
//       ctx.rotate(angle);
//       ctx.fillText(char, 0, 0);
//       ctx.restore();
//     }
//   };

//   useEffect(() => {
//     drawCaptcha();
//   }, []); // Run once on page load

//   const handleCaptchaVerify = () => {
//     if (captchaInput === captchaText) {
//       setResultMessage('Captcha verified successfully!');
//       setCaptchaVerified(true);
//     } else {
//       setResultMessage('Captcha does not match. Please try again.');
//       setCaptchaVerified(false);
//     }
//   };

//   const handleRefreshCaptcha = () => {
//     setCaptchaInput('');
//     setResultMessage('');
//     drawCaptcha();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!captchaVerified) {
//       alert('Please verify CAPTCHA before logging in.');
//       return;
//     }
//     // Implement login logic here, e.g., API call to authenticate the user
//     alert('Login submitted');
//   };

//   return (
//     <div className="container">
//       <img src="/media/images/logo.png" alt="Logo" />
//       <h1>Login to Kite</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Phone or User ID" required />
//         <input type="password" placeholder="Password" required />
        
//         <div id="captcha">
//           <h2>CAPTCHA Verification</h2>
//           <canvas id="captchaCanvas" width="200" height="50"></canvas>
//           <br />
//           <button type="button" onClick={handleRefreshCaptcha}>
//             Refresh Captcha
//           </button>
//           <br />
//           <input
//             type="text"
//             id="captchaInput"
//             value={captchaInput}
//             onChange={(e) => setCaptchaInput(e.target.value)}
//             placeholder="Enter Captcha"
//             required
//           />
//           <button type="button" onClick={handleCaptchaVerify}>
//             Verify
//           </button>
//           <p id="result">{resultMessage}</p>
//         </div>
//         <button type="submit" className="login-btn" disabled={!captchaVerified}>
//           Login
//         </button>
//         <p style={{ textAlign: 'center', marginTop: 15 }}>
//           <a href="#">Forgot user ID or password?</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';


// // Helper function to generate random captcha text
// function generateRandomText(length = 6) {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let text = '';
//   for (let i = 0; i < length; i++) {
//     text += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return text;
// }

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [captchaText, setCaptchaText] = useState('');
//   const [captchaInput, setCaptchaInput] = useState('');
//   const [captchaVerified, setCaptchaVerified] = useState(false);
//   const [resultMessage, setResultMessage] = useState('');

//   // Button style objects
//   const buttonStyle = {
//     padding: '8px 12px',
//     backgroundColor: '	#ff4000	',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease'
//   };

//   const loginButtonStyle = {
//     width: '100%',
//     padding: '12px',
//     fontSize: '16px',
//     backgroundColor: '	#ff4000',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease'
//   };

//   // Function to draw the captcha on the canvas
//   const drawCaptcha = () => {
//     const newCaptchaText = generateRandomText(6);
//     setCaptchaText(newCaptchaText);
    
//     const canvas = document.getElementById('captchaCanvas');
//     if (!canvas) return; // Ensure canvas exists
//     const ctx = canvas.getContext('2d');

//     // Clear canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Fill background with a light color
//     ctx.fillStyle = '#f2f2f2';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     // Draw random noise lines
//     for (let i = 0; i < 5; i++) {
//       ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
//       ctx.beginPath();
//       ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
//       ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
//       ctx.stroke();
//     }

//     // Set text properties
//     ctx.font = 'bold 24px Arial';
//     ctx.fillStyle = '#000';
//     ctx.textBaseline = 'middle';

//     // Calculate spacing and draw each character with a slight rotation
//     const charSpacing = canvas.width / newCaptchaText.length;
//     for (let i = 0; i < newCaptchaText.length; i++) {
//       const char = newCaptchaText.charAt(i);
//       const x = i * charSpacing + (charSpacing / 4);
//       const y = canvas.height / 2;
//       const angle = Math.random() * 0.3 - 0.15; // random rotation between -0.15 and 0.15 radians

//       ctx.save();
//       ctx.translate(x, y);
//       ctx.rotate(angle);
//       ctx.fillText(char, 0, 0);
//       ctx.restore();
//     }
//   };

//   useEffect(() => {
//     drawCaptcha();
//   }, []); // Run once on page load

//   const handleCaptchaVerify = () => {
//     if (captchaInput === captchaText) {
//       setResultMessage('Captcha verified successfully!');
//       setCaptchaVerified(true);
//     } else {
//       setResultMessage('Captcha does not match. Please try again.');
//       setCaptchaVerified(false);
//     }
//   };

//   const handleRefreshCaptcha = () => {
//     setCaptchaInput('');
//     setResultMessage('');
//     drawCaptcha();
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (!captchaVerified) {
//   //     alert('Please verify CAPTCHA before logging in.');
//   //     return;
//   //   }
//   //   // Implement login logic here, e.g., API call to authenticate the user
//   //   alert('Login submitted');
//   // };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (!captchaVerified) {
//     alert('Please verify CAPTCHA before logging in.');
//     return;
//   }
//   axios.post('http://localhost:3002/login', { email, password })
//     .then(result => {
//       if (result.data === "success") {
//         navigate('/about');
//       } else {
//         alert(result.data);
//       }
//     })
//     .catch(err => console.log(err));
// };

//   return (
//     <div
//       style={{
//         backgroundColor: 'white',
//         border: '2px solid #ccc',
//         borderRadius: '8px',
//         padding: '20px',
//         maxWidth: '400px',
//         margin: '50px auto',
//         textAlign: 'center'
//       }}
//     >
//       <img
//         src="/media/images/logo.png"
//         alt="Logo"
//         style={{
//           width: '100px',
//           marginBottom: '20px',
//           display: 'block',
//           marginLeft: 'auto',
//           marginRight: 'auto'
//         }}
//       />
//       <h3 style={{ marginBottom: '20px' }}>Login to Kite</h3>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '10px' }}>
//           <input
//             type="text"
//             placeholder="Phone or User ID"
//             value={email}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             style={{
//               width: '90%',
//               padding: '10px',
//               marginBottom: '10px',
//               fontSize: '12px'
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: '10px' }}>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             style={{
//               width: '90%',
//               padding: '10px',
//               marginBottom: '10px',
//               fontSize: '12px'
//             }}
//           />
//         </div>
        
//         <div id="captcha" style={{ marginBottom: '20px' }}>
//           <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>CAPTCHA Verification</h2>
//           <canvas
//             id="captchaCanvas"
//             width="200"
//             height="50"
//             style={{ border: '1px solid #ccc', marginBottom: '10px' }}
//           ></canvas>
//           <br />
//           <button
//             type="button"
//             onClick={handleRefreshCaptcha}
//             style={{ ...buttonStyle, marginBottom: '10px' }}
//           >
//             Refresh Captcha
//           </button>
//           <br />
//           <input
//             type="text"
//             id="captchaInput"
//             value={captchaInput}
//             onChange={(e) => setCaptchaInput(e.target.value)}
//             placeholder="Enter Captcha"
//             required
//             style={{
//               width: '100%',
//               padding: '10px',
//               marginBottom: '10px',
//               fontSize: '16px'
//             }}
//           />
//           <button
//             type="button"
//             onClick={handleCaptchaVerify}
//             style={buttonStyle}
//           >
//             Verify
//           </button>
//           <p style={{ fontSize: '14px', marginTop: '10px' }}>{resultMessage}</p>
//         </div>
//         <button
//           type="submit"
//           disabled={!captchaVerified}
//           style={loginButtonStyle}
//         >
//           Login
//         </button>
//         <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px' }}>
//           <a href="#" style={{ color: '#1e96f2', textDecoration: 'none' }}>
//             Forgot user ID or password?
//           </a>
//         </p>
//       </form>
//       <p className='text-muted' style={{fontSize:"10px"}}>MarketUp Broking Limited: Member of NSE, BSE ‐ SEBI Reg. no. INZ000031633, CDSL ‐ SEBI Reg. no. IN-DP-431-2019 | Zerodha Commodities Pvt. Ltd.: MCX ‐ SEBI Reg. no. INZ000038238 | Smart Online Dispute Resolution | SEBI SCORES

// v3.0.0</p>
//     </div>
//   );
// };

// export default LoginPage;












import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Helper function to generate random captcha text
function generateRandomText(length = 6) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let text = '';
  for (let i = 0; i < length; i++) {
    text += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return text;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaText, setCaptchaText] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  // Button style objects
  const buttonStyle = {
    padding: '8px 12px',
    backgroundColor: '#ff4000',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const loginButtonStyle = {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#ff4000',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  // Function to draw the captcha on the canvas
  const drawCaptcha = () => {
    const newCaptchaText = generateRandomText(6);
    setCaptchaText(newCaptchaText);

    const canvas = document.getElementById('captchaCanvas');
    if (!canvas) return; // Ensure canvas exists
    const ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Fill background with a light color
    ctx.fillStyle = '#f2f2f2';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw random noise lines
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    // Set text properties
    ctx.font = 'bold 24px Arial';
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'middle';

    // Calculate spacing and draw each character with a slight rotation
    const charSpacing = canvas.width / newCaptchaText.length;
    for (let i = 0; i < newCaptchaText.length; i++) {
      const char = newCaptchaText.charAt(i);
      const x = i * charSpacing + (charSpacing / 4);
      const y = canvas.height / 2;
      const angle = Math.random() * 0.3 - 0.15; // random rotation between -0.15 and 0.15 radians

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillText(char, 0, 0);
      ctx.restore();
    }
  };

  useEffect(() => {
    drawCaptcha();
  }, []); // Run once on page load

  const handleCaptchaVerify = () => {
    if (captchaInput === captchaText) {
      setResultMessage('Captcha verified successfully!');
      setCaptchaVerified(true);
    } else {
      setResultMessage('Captcha does not match. Please try again.');
      setCaptchaVerified(false);
    }
  };

  const handleRefreshCaptcha = () => {
    setCaptchaInput('');
    setResultMessage('');
    drawCaptcha();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert('Please verify CAPTCHA before logging in.');
      return;
    }
    axios.post('http://localhost:3002/login', { email, password })
      .then(result => {
        if (result.data === "success") {
          navigate('/');
        } else {
          alert(result.data);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        border: '2px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '400px',
        margin: '50px auto',
        textAlign: 'center'
      }}
    >
      <img
        src="/media/images/logo.png"
        alt="Logo"
        style={{
          width: '100px',
          marginBottom: '20px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      />
      <h3 style={{ marginBottom: '20px' }}>Login to Kite</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Phone or User ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '90%',
              padding: '10px',
              marginBottom: '10px',
              fontSize: '12px'
            }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '90%',
              padding: '10px',
              marginBottom: '10px',
              fontSize: '12px'
            }}
          />
        </div>
        
        <div id="captcha" style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>CAPTCHA Verification</h2>
          <canvas
            id="captchaCanvas"
            width="200"
            height="50"
            style={{ border: '1px solid #ccc', marginBottom: '10px' }}
          ></canvas>
          <br />
          <button
            type="button"
            onClick={handleRefreshCaptcha}
            style={{ ...buttonStyle, marginBottom: '10px' }}
          >
            Refresh Captcha
          </button>
          <br />
          <input
            type="text"
            id="captchaInput"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            placeholder="Enter Captcha"
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              fontSize: '16px'
            }}
          />
          <button
            type="button"
            onClick={handleCaptchaVerify}
            style={buttonStyle}
          >
            Verify
          </button>
          <p style={{ fontSize: '14px', marginTop: '10px' }}>{resultMessage}</p>
        </div>
        <button
          type="submit"
          disabled={!captchaVerified}
          style={loginButtonStyle}
        >
          Login
        </button>
        <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px' }}>
          <a href="#" style={{ color: '#1e96f2', textDecoration: 'none' }}>
            Forgot user ID or password?
          </a>
        </p>
      </form>
      <p className='text-muted' style={{ fontSize: "10px" }}>
        MarketUp Broking Limited: Member of NSE, BSE ‐ SEBI Reg. no. INZ000031633, CDSL ‐ SEBI Reg. no. IN-DP-431-2019 | Zerodha Commodities Pvt. Ltd.: MCX ‐ SEBI Reg. no. INZ000038238 | Smart Online Dispute Resolution | SEBI SCORES
        v3.0.0
      </p>
    </div>
  );
};

export default LoginPage;













































// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [captchaText, setCaptchaText] = useState('');
//   const [captchaInput, setCaptchaInput] = useState('');
//   const [captchaVerified, setCaptchaVerified] = useState(false);
//   const [resultMessage, setResultMessage] = useState('');

//   // Function to generate random text for CAPTCHA
//   const generateRandomText = (length = 6) => {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let text = '';
//     for (let i = 0; i < length; i++) {
//       text += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return text;
//   };

//   // Function to draw CAPTCHA
//   const drawCaptcha = () => {
//     const newCaptchaText = generateRandomText(6);
//     setCaptchaText(newCaptchaText);
    
//     const canvas = document.getElementById('captchaCanvas');
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
    
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = '#f2f2f2';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
    
//     ctx.font = 'bold 24px Arial';
//     ctx.fillStyle = '#000';
//     ctx.textBaseline = 'middle';
    
//     const charSpacing = canvas.width / newCaptchaText.length;
//     for (let i = 0; i < newCaptchaText.length; i++) {
//       const char = newCaptchaText.charAt(i);
//       const x = i * charSpacing + (charSpacing / 4);
//       const y = canvas.height / 2;
//       ctx.fillText(char, x, y);
//     }
//   };

//   useEffect(() => {
//     drawCaptcha();
//   }, []);

//   const handleCaptchaVerify = () => {
//     if (captchaInput === captchaText) {
//       setResultMessage('Captcha verified successfully!');
//       setCaptchaVerified(true);
//     } else {
//       setResultMessage('Captcha does not match. Please try again.');
//       setCaptchaVerified(false);
//     }
//   };

//   const handleRefreshCaptcha = () => {
//     setCaptchaInput('');
//     setResultMessage('');
//     drawCaptcha();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!captchaVerified) {
//       alert('Please verify CAPTCHA before logging in.');
//       return;
//     }
//     axios.post('http://localhost:3002/login', { email, password })
//       .then(result => {
//         if (result.data === "success") {
//           navigate('/about');
//         } else {
//           alert(result.data);
//         }
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div>
//       <h3>Login</h3>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        
//         <div>
//           <canvas id="captchaCanvas" width="200" height="50" style={{ border: '1px solid #ccc' }}></canvas>
//           <button type="button" onClick={handleRefreshCaptcha}>Refresh Captcha</button>
//           <input type="text" value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} placeholder="Enter Captcha" required />
//           <button type="button" onClick={handleCaptchaVerify}>Verify</button>
//           <p>{resultMessage}</p>
//         </div>

//         <button type="submit" disabled={!captchaVerified}>Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;







