import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VendorsTable.css';

const VendorsTable = () => {
    const navigate = useNavigate();
    
    // Dummy data for vendors
    const vendorsData = [
        {
            id: 'VEN001',
            name: 'TechSolutions Inc.',
            contactName: 'Robert Johnson',
            contactNumber: '+1 (555) 123-4567',
            email: 'robert.johnson@techsolutions.com',
            commission: 10,
            location: 'US'
        },
        {
            id: 'VEN002',
            name: 'Global IT Services',
            contactName: 'Priya Sharma',
            contactNumber: '+91 98765 43210',
            email: 'priya.sharma@globalit.com',
            commission: 8,
            location: 'India'
        },
        {
            id: 'VEN003',
            name: 'Innovative Systems LLC',
            contactName: 'Michael Chen',
            contactNumber: '+1 (555) 987-6543',
            email: 'michael.chen@innovative.com',
            commission: 12,
            location: 'US'
        },
        {
            id: 'VEN004',
            name: 'DataTech Solutions',
            contactName: 'Anil Kumar',
            contactNumber: '+91 87654 32109',
            email: 'anil.kumar@datatech.com',
            commission: 7.5,
            location: 'India'
        },
        {
            id: 'VEN005',
            name: 'NextGen Consulting',
            contactName: 'Sarah Williams',
            contactNumber: '+1 (555) 456-7890',
            email: 'sarah.williams@nextgen.com',
            commission: 9,
            location: 'US'
        }
    ];

    const handleVendorClick = (vendorId) => {
        navigate(`/vendor/${vendorId}`);
    };

    return (
        <div className="vendors-container">
            <div className="vendors-header">
                <h2>Vendors</h2>
                <button className="add-vendor-btn" onClick={() => navigate('/vendor/new')}>+ Add Vendor</button>
            </div>
            <div className="table-container">
                <table className="vendors-table">
                    <thead>
                        <tr>
                            <th>Vendor ID</th>
                            <th>Vendor Name</th>
                            <th>Contact Name</th>
                            <th>Contact Number</th>
                            <th>Email</th>
                            <th>Commission (%)</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendorsData.map((vendor) => (
                            <tr key={vendor.id}>
                                <td>
                                    <button 
                                        className="table-link"
                                        onClick={() => handleVendorClick(vendor.id)}
                                    >
                                        {vendor.id}
                                    </button>
                                </td>
                                <td>
                                    <button 
                                        className="table-link"
                                        onClick={() => handleVendorClick(vendor.id)}
                                    >
                                        {vendor.name}
                                    </button>
                                </td>
                                <td>{vendor.contactName}</td>
                                <td>{vendor.contactNumber}</td>
                                <td>{vendor.email}</td>
                                <td>{vendor.commission}%</td>
                                <td>{vendor.location}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VendorsTable; 