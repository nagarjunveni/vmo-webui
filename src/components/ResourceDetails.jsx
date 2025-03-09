import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ResourceDetails.css';

const ResourceDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(id === 'new');
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        role: '',
        location: 'Onsite',
        department: '',
        email: '',
        phone: '',
        startDate: '',
        sowId: '',
        tentativeEndDate: '',
        status: 'Active'
    });

    // Dummy SOW data for the dropdown
    const sowData = [
        {
            id: 'SOW001',
            name: 'Project Alpha',
            endDate: '2024-12-31'
        },
        {
            id: 'SOW002',
            name: 'Project Beta',
            endDate: '2024-11-30'
        },
        {
            id: 'SOW003',
            name: 'Project Gamma',
            endDate: '2025-06-30'
        }
    ];

    useEffect(() => {
        if (id && id !== 'new') {
            // Fetch resource data based on ID
            // For now, using dummy data
            const dummyData = {
                id: 'EMP001',
                name: 'John Smith',
                role: 'Software Developer',
                location: 'Onsite',
                department: 'Engineering',
                email: 'john.smith@example.com',
                phone: '+1 (555) 123-4567',
                startDate: '2023-01-15',
                sowId: 'SOW001',
                tentativeEndDate: '2024-12-31',
                status: 'Active'
            };
            setFormData(dummyData);
        }
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'sowId' && value) {
            // Find the selected SOW and get its end date
            const selectedSow = sowData.find(sow => sow.id === value);
            if (selectedSow) {
                setFormData(prev => ({
                    ...prev,
                    [name]: value,
                    tentativeEndDate: selectedSow.endDate
                }));
                return;
            }
        }
        
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
        <div className="resource-details-container">
            <div className="resource-details-header">
                <h2>{id === 'new' ? 'Add New Resource' : `Resource Details - ${formData.id}`}</h2>
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
            <div className="resource-form">
                <div className="form-columns">
                    <div className="form-column">
                        <div className="form-row">
                            <label>Employee ID</label>
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
                            <label>Name</label>
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
                            <label>Role</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Department</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Assigned SOW</label>
                            <div className="input-container">
                                <select
                                    name="sowId"
                                    value={formData.sowId}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                >
                                    <option value="">Select SOW</option>
                                    {sowData.map(sow => (
                                        <option key={sow.id} value={sow.id}>
                                            {sow.id} - {sow.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="form-row">
                            <label>Location</label>
                            <div className="input-container">
                                <select
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                >
                                    <option value="Onsite">Onsite</option>
                                    <option value="Offshore">Offshore</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Email</label>
                            <div className="input-container">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Phone</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Start Date</label>
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
                            <label>Tentative End Date</label>
                            <div className="input-container">
                                <input
                                    type="date"
                                    name="tentativeEndDate"
                                    value={formData.tentativeEndDate}
                                    onChange={handleInputChange}
                                    disabled={!isEditing || formData.sowId} // Disable if SOW is selected
                                    title={formData.sowId ? "End date is derived from the selected SOW" : ""}
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
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourceDetails; 