import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/Wallet.css';

const Wallet = ({ user }) => {
  const [selectedYear, setSelectedYear] = useState(2024);

  // Sample data
  const walletData = {
    totalBilled: 15450,
    monthlyBilled: 2450,
    totalPaid: 13000,
    remainingBalance: 2450
  };

  const monthlyData = [
    { month: 'Jan', billed: 2200, paid: 2200 },
    { month: 'Feb', billed: 2350, paid: 2350 },
    { month: 'Mar', billed: 2400, paid: 2400 },
    { month: 'Apr', billed: 2450, paid: 2450 },
    { month: 'May', billed: 2500, paid: 2000 },
    { month: 'Jun', billed: 2450, paid: 2450 },
    { month: 'Jul', billed: 2400, paid: 2400 },
    { month: 'Aug', billed: 2350, paid: 2350 },
    { month: 'Sep', billed: 2300, paid: 2300 },
    { month: 'Oct', billed: 2250, paid: 2250 },
    { month: 'Nov', billed: 2200, paid: 2200 },
    { month: 'Dec', billed: 2450, paid: 0 },
  ];

  const paymentHistory = [
    { date: '2024-11-15', amount: 2200, method: 'Mpesa', status: 'Completed' },
    { date: '2024-10-15', amount: 2250, method: 'Mpesa', status: 'Completed' },
    { date: '2024-09-15', amount: 2300, method: 'Airtel', status: 'Completed' },
    { date: '2024-08-15', amount: 2350, method: 'Bank', status: 'Completed' },
  ];

  return (
    <div className="wallet-page">
      <header className="page-header">
        <h1>Wallet & Billing</h1>
      </header>

      {/* Balance Overview */}
      <div className="balance-overview">
        <div className="balance-card total-billed">
          <h3>Total Billed</h3>
          <p className="amount">KSh {walletData.totalBilled.toLocaleString()}</p>
        </div>
        
        <div className="balance-card monthly-billed">
          <h3>Monthly Billed</h3>
          <p className="amount">KSh {walletData.monthlyBilled.toLocaleString()}</p>
        </div>
        
        <div className="balance-card total-paid">
          <h3>Total Paid</h3>
          <p className="amount">KSh {walletData.totalPaid.toLocaleString()}</p>
        </div>
        
        <div className="balance-card remaining-balance">
          <h3>Remaining Balance</h3>
          <p className="amount">KSh {walletData.remainingBalance.toLocaleString()}</p>
        </div>
      </div>

      {/* Payment Graph */}
      <div className="graph-section">
        <div className="graph-header">
          <h2>Billing & Payment History</h2>
          <select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            className="year-selector"
          >
            <option value={2023}>2023</option>
            <option value={2024}>2024</option>
            <option value={2025}>2025</option>
            <option value={2026}>2026</option>
          </select>
        </div>
        
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="billed" fill="#87CEEB" name="Amount Billed" />
              <Bar dataKey="paid" fill="#4CAF50" name="Amount Paid" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="payment-methods">
        <h3>Mode of Payment</h3>
        <div className="methods-grid">
          <div className="method-card mpesa">
            <div className="method-icon">📱</div>
            <span>Mpesa</span>
          </div>
          <div className="method-card airtel">
            <div className="method-icon">📞</div>
            <span>Airtel</span>
          </div>
          <div className="method-card bank">
            <div className="method-icon">🏦</div>
            <span>Bank</span>
          </div>
        </div>
      </div>

      {/* Account History */}
      <div className="account-history">
        <h3>Account History</h3>
        <div className="history-table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment, index) => (
                <tr key={index}>
                  <td>{payment.date}</td>
                  <td>KSh {payment.amount.toLocaleString()}</td>
                  <td>{payment.method}</td>
                  <td className={`status ${payment.status.toLowerCase()}`}>
                    {payment.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wallet;