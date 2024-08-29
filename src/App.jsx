import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers'; // Correct import
import EmptyPage from './EmptyPage'; // Ensure this file exists
import './style.css'; // Import your CSS

// Import the image
import robotImage from './robo.svg'; // Adjust the path as needed

const HomePage = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Create a provider from MetaMask
        const provider = new ethers.BrowserProvider(window.ethereum);
        // Request account access
        await provider.send('eth_requestAccounts', []);
        // Navigate to EmptyPage on success
        navigate('/empty');
      } catch (error) {
        console.error('User rejected the request or error occurred:', error);
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this feature.');
    }
  };

  return (
    <div id="main">
      <div id="nav">
        <h3>movessage.</h3>
        
        <button id="learn-more-button" onClick={() => window.location.href = 'https://movementlabs.xyz/about/'}>
  Learn More
  <span className="arrow"></span>
</button>

      </div>
      <div id="page">
        <div id="loop">
          <h1>
            <b>MOVESSAGE</b> is an <b><i></i></b> <span>AI</span> based <span><i>platform.</i></span>
          </h1>
          <h1>
            <b>MOVESSAGE</b> is an <b><i></i></b> <span>AI</span> based <span><i>platform.</i></span>
          </h1>
          <h1>
            <b>MOVESSAGE</b> is an <b><i></i></b> <span>AI</span> based <span><i>platform.</i></span>
          </h1>
        </div>
        <h3>to easily write Smart Contracts in MOVE language.</h3>
        <h4>...SCROLL TO READ</h4>
        <canvas></canvas>
      </div>

      {/* New section added here */}
      <section className="discover-section">
        <div className="discover-card">
          <img src={robotImage} alt="robot" />
          <div className="discover-card-details">
            <p className="big-text">
              WORK <br />
              <span className="gradient-text"> MOVE </span>
              <br />
              SMARTER
            </p>
            <p className="discover-description">
              So, what are you waiting for let's get started.
            </p>
            <div className="discover-card-details-btn" onClick={connectWallet}>
              CONNECT WALLET
            </div>
          </div>
        </div>
      </section>

      <div id="page1">
        <div id="right-text">
          <h3>MovementLabs / Smart Contract</h3>
          <h1>Secure smart contract creation<br />Flexible and efficient management<br />Advanced security and precision</h1>
        </div>
        <div id="left-text">
          <h1>सुरक्षित स्मार्ट अनुबंध निर्माण<br />लचीला और प्रभावी प्रबंधन
          <br /> उन्नत सुरक्षा और परिशुद्धता</h1>
          <h3>...आपकी निर्देशों पर</h3>
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/empty" element={<EmptyPage />} />
    </Routes>
  </Router>
);

export default App;
