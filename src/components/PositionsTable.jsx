import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PositionsTable.css';

const PositionsTable = () => {
    const navigate = useNavigate();
    
    // Dummy data for positions
    const positionsData = [
        {
            id: 'POS001',
            name: 'Senior Software Developer',
            sowId: 'SOW001',
            sowName: 'Project Alpha',
            department: 'Engineering',
            location: 'Onsite',
            rate: 85,
            currency: 'USD',
            rateType: 'Hourly',
            startDate: '2024-01-15',
            endDate: '2024-12-31',
            status: 'Open',
            assignedResource: 'EMP001',
            resourceName: 'John Smith'
        },
        {
            id: 'POS002',
            name: 'Project Manager',
            sowId: 'SOW002',
            sowName: 'Project Beta',
            department: 'Management',
            location: 'Onsite',
            rate: 95,
            currency: 'USD',
            rateType: 'Hourly',
            startDate: '2024-02-01',
            endDate: '2024-11-30',
            status: 'Filled',
            assignedResource: 'EMP002',
            resourceName: 'Sarah Johnson'
        },
        {
            id: 'POS003',
            name: 'QA Engineer',
            sowId: 'SOW001',
            sowName: 'Project Alpha',
            department: 'Quality Assurance',
            location: 'Offshore',
            rate: 45,
            currency: 'USD',
            rateType: 'Hourly',
            startDate: '2024-01-15',
            endDate: '2024-12-31',
            status: 'Filled',
            assignedResource: 'EMP003',
            resourceName: 'Raj Patel'
        },
        {
            id: 'POS004',
            name: 'UX Designer',
            sowId: 'SOW003',
            sowName: 'Project Gamma',
            department: 'Design',
            location: 'Offshore',
            rate: 50,
            currency: 'USD',
            rateType: 'Hourly',
            startDate: '2024-03-01',
            endDate: '2025-06-30',
            status: 'Open',
            assignedResource: null,
            resourceName: null
        },
        {
            id: 'POS005',
            name: 'DevOps Engineer',
            sowId: 'SOW002',
            sowName: 'Project Beta',
            department: 'Operations',
            location: 'Onsite',
            rate: 90,
            currency: 'USD',
            rateType: 'Hourly',
            startDate: '2024-02-15',
            endDate: '2024-11-30',
            status: 'Pending Approval',
            assignedResource: null,
            resourceName: null
        }
    ];

    const handlePositionClick = (positionId) => {
        navigate(`/position/${positionId}`);
    };

    return (
        <div className="positions-container">
            <div className="positions-header">
                <h2>Positions</h2>
                <button className="add-position-btn" onClick={() => navigate('/position/new')}>+ Add Position</button>
            </div>
            <div className="table-container">
                <table className="positions-table">
                    <thead>
                        <tr>
                            <th>Position ID</th>
                            <th>Position Name</th>
                            <th>SOW</th>
                            <th>Department</th>
                            <th>Location</th>
                            <th>Rate</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                            <th>Assigned Resource</th>
                        </tr>
                    </thead>
                    <tbody>
                        {positionsData.map((position) => (
                            <tr key={position.id}>
                                <td>
                                    <button 
                                        className="table-link"
                                        onClick={() => handlePositionClick(position.id)}
                                    >
                                        {position.id}
                                    </button>
                                </td>
                                <td>
                                    <button 
                                        className="table-link"
                                        onClick={() => handlePositionClick(position.id)}
                                    >
                                        {position.name}
                                    </button>
                                </td>
                                <td>{position.sowId} - {position.sowName}</td>
                                <td>{position.department}</td>
                                <td>{position.location}</td>
                                <td>{position.currency} {position.rate}/{position.rateType === 'Hourly' ? 'hr' : 'day'}</td>
                                <td>{position.startDate}</td>
                                <td>{position.endDate}</td>
                                <td>
                                    <span className={`status-badge ${position.status.toLowerCase().replace(/\s+/g, '-')}`}>
                                        {position.status}
                                    </span>
                                </td>
                                <td>{position.resourceName || 'Not Assigned'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PositionsTable; 