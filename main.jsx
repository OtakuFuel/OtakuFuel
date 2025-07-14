import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <img src="/assets/logo.png" alt="OtakuFuel Logo" className="logo" />
        <h1>OtakuFuel</h1>
        <p className="tagline">Wear Your Power</p>
      </header>
      <main>
        <h2>Welcome to the world where style meets anime.</h2>
      </main>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
