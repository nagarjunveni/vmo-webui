import React from "react";
import { BrowserRouter } from 'react-router-dom';
import "./Dashboard.css"; // Import external CSS file
import MainContent from "./components/MainContent";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <h1 className="dashboard-title">Work Order Management</h1>
        <nav>
          <ul className="menu">
            <li><a href="#">SOWs</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Positions</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Main Content */}
      <main className="content">
        <BrowserRouter>
          <MainContent />
        </BrowserRouter>
      </main>
      
      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;