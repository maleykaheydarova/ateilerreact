import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditEntity = ({ apiUrl, entityName, propertyNames }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formValues, setFormValues] = useState({});

    useEffect(() => {
        fetch(`${apiUrl}/${entityName}/id?id=${id}`)
            .then(response => response.json())
            .then(data => {
                setFormValues(data);
            })
            .catch(error => console.error(`Error fetching ${entityName} data:`, error));
    }, [apiUrl, entityName, id]);

    const handleInputChange = (property, value) => {
        setFormValues(prevValues => ({ ...prevValues, [property]: value }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${apiUrl}/${entityName}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            });

            if (response.ok) {
                console.log(`${entityName} data updated successfully`);
                console.log(formValues);
                navigate(`/admin/${entityName}`);
            } else {
                console.error(`Error updating ${entityName} data:`, response.statusText);
            }
        } catch (error) {
            console.error(`Error updating ${entityName} data:`, error);
        }
    };

    return (
        <main>
            <div className="container">
                <div className="row justify-content-center">
                    <div class="col-lg-7">
                        <div class="card shadow-lg border-0 rounded-lg mt-5">
                            <div class="card-header"><h3 class="text-center font-weight-light my-4">Edit {entityName}</h3></div>
                            <div class="card-body">
                                <form onSubmit={handleFormSubmit}>
                                    <div className="row mb-3">
                                        <div className="col-md-12 w-100">
                                            <div class="form-floating mb-3 mb-md-3">
                                                <input asp-for="ID" type="text" value={id} disabled class="form-control w-100" id="PersonID" placeholder="Enter ID" />
                                                <label for="ID" class="w-25">ID</label>
                                            </div>
                                            {propertyNames.map(property => (
                                                <div key={property} className="form-floating mb-3 mb-md-3">
                                                    <input
                                                        type="text"
                                                        value={formValues[property.toLowerCase()] || ''}
                                                        onChange={(e) => handleInputChange(property.toLowerCase(), e.target.value)}
                                                        className="form-control w-100"
                                                        id={property}
                                                        placeholder={`Enter ${property}`}
                                                    />
                                                    <label htmlFor={property} className="w-25">{property.charAt(0).toUpperCase() + property.slice(1)}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-5 mb-0">
                                        <button type="submit" className="btn btn-success w-100">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
};

export default EditEntity;