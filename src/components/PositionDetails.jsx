import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './PositionDetails.css';

const PositionDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(id === 'new');
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        sowId: '',
        department: '',
        location: 'Onsite',
        rate: '',
        currency: 'USD',
        rateType: 'Hourly',
        startDate: '',
        endDate: '',
        status: 'Open',
        assignedResource: '',
        description: ''
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

    // Dummy resource data for the dropdown
    const resourceData = [
        {
            id: 'EMP001',
            name: 'John Smith'
        },
        {
            id: 'EMP002',
            name: 'Sarah Johnson'
        },
        {
            id: 'EMP003',
            name: 'Raj Patel'
        },
        {
            id: 'EMP004',
            name: 'Maria Garcia'
        }
    ];

    useEffect(() => {
        if (id && id !== 'new') {
            // Fetch position data based on ID
            // For now, using dummy data
            const dummyData = {
                id: 'POS001',
                name: 'Senior Software Developer',
                sowId: 'SOW001',
                department: 'Engineering',
                location: 'Onsite',
                rate: 85,
                currency: 'USD',
                rateType: 'Hourly',
                startDate: '2024-01-15',
                endDate: '2024-12-31',
                status: 'Open',
                assignedResource: 'EMP001',
                description: 'Senior developer role responsible for architecture and development of core features.'
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
                    endDate: selectedSow.endDate
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
        <div className="position-details-container">
            <div className="position-details-header">
                <h2>{id === 'new' ? 'Add New Position' : `Position Details - ${formData.id}`}</h2>
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
            <div className="position-form">
                <div className="form-columns">
                    <div className="form-column">
                        <div className="form-row">
                            <label>Position ID</label>
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
                            <label>Position Name</label>
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
                            <label>SOW</label>
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
                    </div>
                    <div className="form-column">
                        <div className="form-row">
                            <label>Rate</label>
                            <div className="input-container rate-container">
                                <select
                                    name="currency"
                                    value={formData.currency}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className="currency-select"
                                >
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                    <option value="INR">INR</option>
                                </select>
                                <input
                                    type="number"
                                    name="rate"
                                    value={formData.rate}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className="rate-input"
                                />
                                <select
                                    name="rateType"
                                    value={formData.rateType}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className="rate-type-select"
                                >
                                    <option value="Hourly">per hour</option>
                                    <option value="Daily">per day</option>
                                </select>
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
                            <label>End Date</label>
                            <div className="input-container">
                                <input
                                    type="date"
                                    name="endDate"
                                    value={formData.endDate}
                                    onChange={handleInputChange}
                                    disabled={!isEditing || formData.sowId}
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
                                    <option value="Open">Open</option>
                                    <option value="Filled">Filled</option>
                                    <option value="Pending Approval">Pending Approval</option>
                                    <option value="Closed">Closed</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Assigned Resource</label>
                            <div className="input-container">
                                <select
                                    name="assignedResource"
                                    value={formData.assignedResource}
                                    onChange={handleInputChange}
                                    disabled={!isEditing || formData.status !== 'Filled'}
                                >
                                    <option value="">Not Assigned</option>
                                    {resourceData.map(resource => (
                                        <option key={resource.id} value={resource.id}>
                                            {resource.id} - {resource.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-row description-row">
                    <label>Description</label>
                    <div className="input-container">
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            rows="4"
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PositionDetails; 