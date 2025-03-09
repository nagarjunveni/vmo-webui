import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './VendorDetails.css';

const VendorDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(id === 'new');
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        contactName: '',
        contactNumber: '',
        email: '',
        commission: '',
        location: 'US',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        notes: ''
    });

    useEffect(() => {
        if (id && id !== 'new') {
            // Fetch vendor data based on ID
            // For now, using dummy data
            const dummyData = {
                id: 'VEN001',
                name: 'TechSolutions Inc.',
                contactName: 'Robert Johnson',
                contactNumber: '+1 (555) 123-4567',
                email: 'robert.johnson@techsolutions.com',
                commission: 10,
                location: 'US',
                address: '123 Tech Blvd',
                city: 'San Francisco',
                state: 'CA',
                zipCode: '94105',
                country: 'United States',
                notes: 'Preferred vendor for software development resources.'
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
        <div className="vendor-details-container">
            <div className="vendor-details-header">
                <h2>{id === 'new' ? 'Add New Vendor' : `Vendor Details - ${formData.id}`}</h2>
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
            <div className="vendor-form">
                <div className="form-columns">
                    <div className="form-column">
                        <div className="form-row">
                            <label>Vendor ID</label>
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
                            <label>Vendor Name</label>
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
                            <label>Contact Name</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="contactName"
                                    value={formData.contactName}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Contact Number</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
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
                            <label>Commission (%)</label>
                            <div className="input-container">
                                <input
                                    type="number"
                                    name="commission"
                                    value={formData.commission}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    step="0.1"
                                    min="0"
                                    max="100"
                                />
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
                                    <option value="US">US</option>
                                    <option value="India">India</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Address</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>City</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>State/Province</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Zip/Postal Code</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Country</label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-row notes-row">
                    <label>Notes</label>
                    <div className="input-container">
                        <textarea
                            name="notes"
                            value={formData.notes}
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

export default VendorDetails; 