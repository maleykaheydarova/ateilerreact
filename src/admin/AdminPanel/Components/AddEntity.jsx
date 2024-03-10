import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiUrl, token } from '../../../Helpers/helper'

const AddEntity = ({ entityName, propertyNames }) => {
    const [errorMessages, setErrorMessages] = useState({});
    const [formValues, setFormValues] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        propertyNames.map(property => (
            setFormValues(prevValues => ({ ...prevValues, [property.toLowerCase()]: "" }))
        ))
    }, [apiUrl, entityName, propertyNames]);

    const handleInputChange = (property, value) => {
        setFormValues(prevValues => ({ ...prevValues, [property]: value }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${apiUrl}/${entityName}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formValues),
            });
            if (response.ok) {
                const res = await response.json();
                if (!res.success) {
                    const updatedErrorMessages = {};
                    propertyNames.forEach(prop => {
                        const dataIndex = res.data.indexOf(prop);
                        if (dataIndex !== -1) {
                            updatedErrorMessages[prop] = res.messages[dataIndex];
                        }
                    });
                    setErrorMessages(prevValues => ({ ...prevValues, ...updatedErrorMessages }));
                }
                else {
                    navigate(`/admin/${entityName}`);
                    console.log('Data added successfully');
                }
            } else {
                console.error('Error adding data:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding data:', error);
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
                                            {propertyNames.map(property => (
                                                <div key={property} className="form-floating mb-3 mb-md-3">
                                                    <input
                                                        type="text"
                                                        className="form-control w-100"
                                                        id={property}
                                                        placeholder={`Enter ${property}`}
                                                        onChange={(e) => handleInputChange(property.toLowerCase(), e.target.value)}
                                                    />
                                                    <label htmlFor={property} className="w-25">
                                                        {property.charAt(0).toUpperCase() + property.slice(1)}
                                                    </label>
                                                    <p className='text-danger'>{errorMessages[property]}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-5 mb-0 d-flex gap-5">
                                        <button type="submit" className="btn btn-success w-50">Save</button>
                                        <Link to={`/admin/${entityName}`} className='btn btn-danger w-50'>Cancel</Link>
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
