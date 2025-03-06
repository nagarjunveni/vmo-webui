import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import "./Dashboard.css"; // Import external CSS file
import MainContent from "./components/MainContent";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("SOWs");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <h1 className="dashboard-title">Work Order Management</h1>
        <nav>
          <ul className="menu">
            <li>
              <a 
                href="#" 
                className={activeMenu === "SOWs" ? "active" : ""}
                onClick={() => handleMenuClick("SOWs")}
              >
                SOWs
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={activeMenu === "Resources" ? "active" : ""}
                onClick={() => handleMenuClick("Resources")}
              >
                Resources
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={activeMenu === "Positions" ? "active" : ""}
                onClick={() => handleMenuClick("Positions")}
              >
                Positions
              </a>
            </li>
          </ul>
        </nav>
      </header>
      
      {/* Main Content */}
      <main className="content">
        <BrowserRouter>
          <MainContent  activeMenu={activeMenu}  />
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