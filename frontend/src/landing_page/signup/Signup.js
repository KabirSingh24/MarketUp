import React from 'react';

function Singup() {
    return (
        <div className='container mt-5 p-5'>
  <div className='row '>
    <div className='col-8 mt-5'>
      <img src='media/images/signup.png' style={{ width: "80%" }} alt="Signup Illustration" />
    </div>
    <div className='col-4 mt-5'>
      <h1 className="text-black landing-head" style={{fontSize:'30px'}}>Signup now</h1>
      <h5 className='text-muted mt-3' style={{fontSize:'20px'}}>Or track your existing application.</h5>

      <form role="form" className="signup-mobile-form">
        <div className="mb-3">
          <label className="form-label">Mobile number</label>
          <div className="input-group">
            <span className="input-group-text">+91</span>
            <input type="number" className="form-control" autoCorrect="off" autoCapitalize="none" />
          </div>
        </div>

        <p className="text-grey text-12">You will receive an OTP on your number</p>
        <button className="btn btn-primary rounded-0 px-5" style={{ fontSize: "14px" }}>Continue</button>

        <p className="text-12 mt-3">
          <a href='/' style={{ textDecoration: 'none' }}>Want to open an NRI account?</a>
        </p>
      </form>
    </div>

    <div className='row mt-5 text-center' style={{ fontSize: "0.80rem", lineHeight: "18px" }}>
      <p className='mb-5'>
        I authorize Zerodha to contact me even if my number is registered on DND. I authorize Zerodha to fetch my KYC information from the C-KYC registry with my PAN . Please visit < a href="#" style={{textDecoration:'none'}}>this article</a>  to know more.  
        <br /><br />
        By submitting your contact details, you authorize Zerodha to contact you even if you are registered on DND & conduct online KYC for trading & demat account opening as per KRA regulations and PMLA guidelines.
        <br /><br />
        If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <a href="#" style={{textDecoration:'none'}}> offline forms</a>. For help, <a href="#" style={{textDecoration:'none'}}>click here</a>.
      </p>
    </div>
  </div>
</div>

    );
}

export default Singup;