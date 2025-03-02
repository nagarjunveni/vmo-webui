import React from 'react';
import './SOWTable.css';

const SOWTable = () => {
    // Dummy data
    const sowData = [
        {
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
            totalAmount: 700000
        },
        {
            id: 'SOW002',
            name: 'Project Beta',
            lineManager: 'Jane Smith',
            startDate: '2024-02-01',
            endDate: '2024-11-30',
            status: 'Pending',
            totalPositions: 8,
            onsitePositions: 3,
            offshorePositions: 5,
            onsiteAmount: 350000,
            offshoreAmount: 250000,
            totalAmount: 600000
        },
        // Add more dummy records as needed
    ];

    // Calculate total sum
    const grandTotalSum = sowData.reduce((sum, sow) => sum + sow.totalAmount, 0);

    return (
        <div className="sow-container">
            <div className="sow-header">
                <h2>Statement of Work (SOW)</h2>
                <button className="add-sow-btn">+ Add SOW</button>
            </div>
            <div className="table-container">
                <table className="sow-table">
                    <thead>
                        <tr>
                            <th>SOW ID</th>
                            <th>SOW Name</th>
                            <th>Line Manager</th>
                            <th>Effective Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                            <th>No. of Positions</th>
                            <th>Onsite Positions</th>
                            <th>Offshore Positions</th>
                            <th>Total Onsite Amount</th>
                            <th>Total Offshore Amount</th>
                            <th>Grand Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sowData.map((sow) => (
                            <tr key={sow.id}>
                                <td><a href={`/sow/${sow.id}`} className="table-link">{sow.id}</a></td>
                                <td><a href={`/sow/${sow.id}`} className="table-link">{sow.name}</a></td>
                                <td>{sow.lineManager}</td>
                                <td>{sow.startDate}</td>
                                <td>{sow.endDate}</td>
                                <td>
                                    <span className={`status-badge ${sow.status.toLowerCase()}`}>
                                        {sow.status}
                                    </span>
                                </td>
                                <td>{sow.totalPositions}</td>
                                <td>{sow.onsitePositions}</td>
                                <td>{sow.offshorePositions}</td>
                                <td>${sow.onsiteAmount.toLocaleString()}</td>
                                <td>${sow.offshoreAmount.toLocaleString()}</td>
                                <td>${sow.totalAmount.toLocaleString()}</td>
                            </tr>
                        ))}
                        <tr className="summary-row">
                            <td colSpan="11" style={{ textAlign: 'right', fontWeight: 'bold' }}>Total:</td>
                            <td style={{ fontWeight: 'bold' }}>${grandTotalSum.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SOWTable; 