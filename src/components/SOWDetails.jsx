import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './SOWDetails.css';

const SOWDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        lineManager: '',
        startDate: '',
        endDate: '',
        status: 'Active',
        totalPositions: '',
        onsitePositions: '',
        offshorePositions: '',
        onsiteAmount: '',
        offshoreAmount: '',
        projectScope: ''
    });

    useEffect(() => {
        if (id && id !== 'new') {
            // Fetch SOW data based on ID
            // For now, using dummy data
            const dummyData = {
                id: 'SOW001',
                name: 'Project Alpha',
                lineManager: 'John Doe',
                startDate: '2024-01-01',
                endDate: '2024-12-31',
                status: 'Active',
                totalPositions: 10,
                onsitePositions: 4,
                offshorePositions: 6,
                onsiteAmount: 400000,
                offshoreAmount: 300000,
                projectScope: `This project involves the development of a custom enterprise resource planning (ERP) system. Key deliverables include:

- User authentication and role-based access control
- Financial management module with reporting capabilities
- Inventory management system with real-time tracking
- Human resources module with employee self-service portal
- Integration with existing CRM system
- Mobile-responsive interface
- Comprehensive documentation and training materials
- 3 months of post-deployment support`
            };
            setFormData(dummyData);
        }
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your save logic here
        setIsEditing(false);
        navigate('/');
    };

    return (
        <div className="sow-details-container">
            <div className="sow-details-header">
                <h2>{id === 'new' ? 'Create New SOW' : `SOW Details - ${formData.id}`}</h2>
                <div className="button-group">
                    <button className="cancel-btn" onClick={() => navigate('/')}>
                        Back
                    </button>
                    {id !== 'new' && !isEditing && (
                        <button className="edit-btn" onClick={() => setIsEditing(true)}>
                            Edit
                        </button>
                    )}
                    {(isEditing || id === 'new') && (
                        <button className="save-btn" onClick={handleSubmit}>
                            Save
                        </button>
                    )}
                </div>
            </div>
            <div className="sow-form">
                <div className="form-columns">
                    <div className="form-column">
                        <div className="form-row">
                            <label>SOW ID</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="id"
                                    value={formData.id}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>SOW Name</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Line Manager</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="lineManager"
                                    value={formData.lineManager}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Status</label>
                            <div className="input-container">
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Effective Start Date</label>
                            <div className="input-container">
                                <input
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>End Date</label>
                            <div className="input-container">
                                <input
                                    type="date"
                                    name="endDate"
                                    value={formData.endDate}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="form-row">
                            <label>Total Positions</label>
                            <div className="input-container">
                                <input
                                    type="number"
                                    name="totalPositions"
                                    value={formData.totalPositions}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Onsite Positions</label>
                            <div className="input-container">
                                <input
                                    type="number"
                                    name="onsitePositions"
                                    value={formData.onsitePositions}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Offshore Positions</label>
                            <div className="input-container">
                                <input
                                    type="number"
                                    name="offshorePositions"
                                    value={formData.offshorePositions}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Total Onsite Amount</label>
                            <div className="input-container">
                                <input
                                    type="number"
                                    name="onsiteAmount"
                                    value={formData.onsiteAmount}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Total Offshore Amount</label>
                            <div className="input-container">
                                <input
                                    type="number"
                                    name="offshoreAmount"
                                    value={formData.offshoreAmount}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Grand Total Amount</label>
                            <div className="input-container">
                                <input
                                    type="number"
                                    value={Number(formData.onsiteAmount || 0) + Number(formData.offshoreAmount || 0)}
                                    disabled
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="form-row project-scope">
                    <label>Project Scope</label>
                    <div className="input-container">
                        <textarea
                            name="projectScope"
                            value={formData.projectScope}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SOWDetails; 