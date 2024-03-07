import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EntityTable = ({ apiUrl, entityName, propertyNames }) => {
    const [entities, setsetEntities] = useState([]);
    const [update, setUpdate] = useState(0);

    useEffect(() => {
        fetch(`${apiUrl}/${entityName}`)
            .then(response => response.json())
            .then(data => {
                setsetEntities(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [update]);

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('token')
            const response = await fetch(`${apiUrl}/${entityName}?id=${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log(`Color with ID ${id} deleted successfully`);
                setUpdate(update + 1);
            } else {
                console.error(`Error deleting color with ID ${id}:`, response.statusText);
            }
        } catch (error) {
            console.error('Error deleting color:', error);
        }
    };

    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800 mt-4">{entityName} Table</h1>
            <Link to={'add'} className="btn btn-primary">
                Add
            </Link>
            <div className="card shadow mb-4 mt-3">
                <div className="card-body">
                    <div className="table-responsive">
                        <table
                            className="table table-bordered table-striped"
                            id="dataTable"
                            width="100%"
                            cellSpacing="0"
                        >
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    {propertyNames.map((propertyName) => (
                                        <th key={propertyName}>{propertyName}</th>
                                    ))}
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {entities.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        {propertyNames.map((propertyName) => (
                                            <td key={propertyName}>{item[propertyName.toLowerCase()]}</td>
                                        ))}
                                        <td className='text-center'>
                                            <Link to={`edit/${item.id}`} className="btn btn-primary">
                                                Edit
                                            </Link>
                                        </td>
                                        <td className='text-center'>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="btn btn-danger"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EntityTable;