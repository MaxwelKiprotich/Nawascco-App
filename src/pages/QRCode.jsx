import React from 'react';

const QRCode = ({ user }) => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>QR Code Payment</h1>
      </header>
      
      <div className="content-card">
        <div className="qr-container">
          <div className="qr-placeholder">
            {/* In real app, generate actual QR code */}
            <div className="qr-code">QR CODE</div>
            <p>Scan to pay with your mobile money</p>
          </div>
        </div>
        
        <div className="payment-info">
          <h3>How to Pay:</h3>
          <ol>
            <li>Open your mobile money app</li>
            <li>Tap on 'Pay Bill' or 'Scan QR'</li>
            <li>Scan the QR code above</li>
            <li>Enter your PIN to complete payment</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default QRCode;