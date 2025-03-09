import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SOWTable from './SOWTable';
import SOWDetails from './SOWDetails';
import ResourcesTable from './ResourcesTable';
import ResourceDetails from './ResourceDetails';
import PositionsTable from './PositionsTable';
import PositionDetails from './PositionDetails';
import VendorsTable from './VendorsTable';
import VendorDetails from './VendorDetails';

const MainContent = ({ activeMenu }) => {
    return (
        <div className="main-content">
            {activeMenu === "SOWs" && (
                <Routes>
                    <Route path="/" element={<SOWTable />} />
                    <Route path="/sow/new" element={<SOWDetails />} />
                    <Route path="/sow/:id" element={<SOWDetails />} />
                </Routes>
            )}
            
            {activeMenu === "Resources" && (
                <Routes>
                    <Route path="/" element={<ResourcesTable />} />
                    <Route path="/resource/new" element={<ResourceDetails />} />
                    <Route path="/resource/:id" element={<ResourceDetails />} />
                </Routes>
            )}
            
            {activeMenu === "Positions" && (
                <Routes>
                    <Route path="/" element={<PositionsTable />} />
                    <Route path="/position/new" element={<PositionDetails />} />
                    <Route path="/position/:id" element={<PositionDetails />} />
                </Routes>
            )}
            
            {activeMenu === "Vendors" && (
                <Routes>
                    <Route path="/" element={<VendorsTable />} />
                    <Route path="/vendor/new" element={<VendorDetails />} />
                    <Route path="/vendor/:id" element={<VendorDetails />} />
                </Routes>
            )}
        </div>
    );
};

export default MainContent; 