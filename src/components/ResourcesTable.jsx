import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResourcesTable.css';

const ResourcesTable = () => {
    const navigate = useNavigate();
    
    // Dummy data for resources/employees
    const resourcesData = [
        {
            id: 'EMP001',
            name: 'John Smith',
            role: 'Software Developer',
            location: 'Onsite',
            department: 'Engineering',
            email: 'john.smith@example.com',
            phone: '+1 (555) 123-4567',
            startDate: '2023-01-15',
            sowId: 'SOW001',
            sowName: 'Project Alpha',
            tentativeEndDate: '2024-12-31',
            status: 'Active'
        },
        {
            id: 'EMP002',
            name: 'Sarah Johnson',
            role: 'Project Manager',
            location: 'Onsite',
            department: 'Management',
            email: 'sarah.johnson@example.com',
            phone: '+1 (555) 987-6543',
            startDate: '2022-11-01',
            sowId: 'SOW002',
            sowName: 'Project Beta',
            tentativeEndDate: '2024-11-30',
            status: 'Active'
        },
        {
            id: 'EMP003',
            name: 'Raj Patel',
            role: 'QA Engineer',
            location: 'Offshore',
            department: 'Quality Assurance',
            email: 'raj.patel@example.com',
            phone: '+91 98765 43210',
            startDate: '2023-03-10',
            sowId: 'SOW001',
            sowName: 'Project Alpha',
            tentativeEndDate: '2024-12-31',
            status: 'Active'
        },
        {
            id: 'EMP004',
            name: 'Maria Garcia',
            role: 'UX Designer',
            location: 'Offshore',
            department: 'Design',
            email: 'maria.garcia@example.com',
            phone: '+34 612 345 678',
            startDate: '2023-02-20',
            sowId: 'SOW003',
            sowName: 'Project Gamma',
            tentativeEndDate: '2025-06-30',
            status: 'Inactive'
        }
    ];

    const handleResourceClick = (resourceId) => {
        navigate(`/resource/${resourceId}`);
    };

    return (
        <div className="resources-container">
            <div className="resources-header">
                <h2>Resources</h2>
                <button className="add-resource-btn" onClick={() => navigate('/resource/new')}>+ Add Resource</button>
            </div>
            <div className="table-container">
                <table className="resources-table">
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Location</th>
                            <th>Department</th>
                            <th>Assigned SOW</th>
                            <th>Start Date</th>
                            <th>Tentative End Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resourcesData.map((resource) => (
                            <tr key={resource.id}>
                                <td>
                                    <button 
                                        className="table-link"
                                        onClick={() => handleResourceClick(resource.id)}
                                    >
                                        {resource.id}
                                    </button>
                                </td>
                                <td>
                                    <button 
                                        className="table-link"
                                        onClick={() => handleResourceClick(resource.id)}
                                    >
                                        {resource.name}
                                    </button>
                                </td>
                                <td>{resource.role}</td>
                                <td>{resource.location}</td>
                                <td>{resource.department}</td>
                                <td>{resource.sowId} - {resource.sowName}</td>
                                <td>{resource.startDate}</td>
                                <td>{resource.tentativeEndDate}</td>
                                <td>
                                    <span className={`status-badge ${resource.status.toLowerCase()}`}>
                                        {resource.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ResourcesTable; 