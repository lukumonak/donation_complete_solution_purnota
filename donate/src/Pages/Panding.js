import React from 'react';
import { Link } from 'react-router-dom';
import panding_img from '../assets/pending.svg'
import './VerificationPendingPage.css'; // Import CSS file for styling

function  Panding() {
  return (
    <div className="verification-pending-container">
      <div className="verification-pending-content">
        <h1 className="verification-pending-title">Verification Pending</h1>
        <img src={panding_img} alt="Pending" className="verification-pending-image" />
        <p className="verification-pending-message">Your verification status is pending. Please wait for approval. </p>
      <Link style={{display:'flex',justifyContent:"center"}} to='/' >Back to Home</Link>
      </div>

    </div>
  );
};

export default Panding;
