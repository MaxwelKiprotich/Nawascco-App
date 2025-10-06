import React, { useState } from 'react';

const MerchantTill = ({ user }) => {
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('mpesa');

  const handlePayment = (e) => {
    e.preventDefault();
    if (!paymentAmount || paymentAmount <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    
    // Simulate payment processing
    alert(`Payment of KSh ${paymentAmount} initiated via ${paymentMethod.toUpperCase()}`);
    
    // Reset form
    setPaymentAmount('');
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Merchant Till Payment</h1>
      </header>
      
      <div className="content-card">
        <div className="payment-instructions">
          <h3>Make a Payment</h3>
          <p>Pay directly to NAWASSCO merchant till number</p>
          
          <div className="till-info">
            <div className="till-card">
              <h4>PayBill Number</h4>
              <div className="till-number">123456</div>
              <p>Account Number: {user?.username || 'YourUsername'}</p>
            </div>
          </div>
        </div>
        
        <form onSubmit={handlePayment} className="payment-form">
          <div className="form-group">
            <label>Amount to Pay (KSh)</label>
            <input
              type="number"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              placeholder="Enter amount"
              min="1"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Payment Method</label>
            <select 
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="mpesa">M-Pesa</option>
              <option value="airtel">Airtel Money</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>
          
          <div className="payment-steps">
            <h4>Payment Steps:</h4>
            <ol>
              <li>Enter the amount you wish to pay</li>
              <li>Select your preferred payment method</li>
              <li>Click "Make Payment"</li>
              <li>Follow the prompts on your phone</li>
              <li>Enter your PIN when prompted</li>
            </ol>
          </div>
          
          <button type="submit" className="payment-button">
            Make Payment
          </button>
        </form>
        
        <div className="security-notice">
          <p>🔒 Your payment is secure and encrypted</p>
        </div>
      </div>
    </div>
  );
};

export default MerchantTill;