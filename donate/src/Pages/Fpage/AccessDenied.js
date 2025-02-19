import React from 'react';
import { Link } from 'react-router-dom';
// import panding_img from '../assets/pending.svg'
import access_denied from '../../assets/access_denied.svg'
import '../VerificationPendingPage.css'; // Import CSS file for styling

function  AccessDenied() {
  return (
    <div className="verification-pending-container">
      <div className="verification-pending-content">
        <h1 className="verification-pending-title">You're not Approved</h1>
        <img src={access_denied} alt="Pending" className="verification-pending-image" />
        <p className="verification-pending-message">we are sorry &#128579; you can,t access this page </p>
      <Link style={{display:'flex',justifyContent:"center"}} to='/' >Back to Home</Link>
      </div>

    </div>
  );
};

export default AccessDenied;
