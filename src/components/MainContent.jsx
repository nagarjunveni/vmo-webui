import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SOWTable from './SOWTable';
import SOWDetails from './SOWDetails';

const MainContent = () => {
    return (
        <div className="main-content">
            <Routes>
                <Route path="/" element={<SOWTable />} />
                <Route path="/sow/new" element={<SOWDetails />} />
                <Route path="/sow/:id" element={<SOWDetails />} />
            </Routes>
        </div>
    );
};

export default MainContent; 