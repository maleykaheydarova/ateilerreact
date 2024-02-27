import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEntity = ({ apiUrl, entityName, initialData }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialData || {});

    const handleInputChange = (property, value) => {
        setFormData(prevData => ({ ...prevData, [property]: value }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log(`Data added successfully for ${entityName}`);
                navigate(`/admin/${entityName}`);
            } else {
                console.error(`Error adding data for ${entityName}:`, response.statusText);
            }
        } catch (error) {
            console.error(`Error adding data for ${entityName}:`, error);
        }
    };

    return (
        <main>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header">
                                <h3 className="text-center font-weight-light my-4">Add {entityName}</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleFormSubmit}>
                                    <div className="row mb-3">
                                        <div className="col-md-12 w-100">
                                            {Object.keys(formData).map(property => (
                                                <div key={property} className="form-floating mb-3 mb-md-3">
                                                    <input
                                                        type="text"
                                                        className="form-control w-100"
                                                        id={property}
                                                        placeholder={`Enter ${property}`}
                                                        value={formData[property] || ''}
                                                        onChange={(e) => handleInputChange(property, e.target.value)}
                                                    />
                                                    <label htmlFor={property} className="w-25">
                                                        {property}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-5 mb-0">
                                        <button type="submit" className="btn btn-success w-100">
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AddEntity;
