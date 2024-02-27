import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CommonTable = ({ data, onDelete, entityName }) => {
    const [propertyNames, setPropertyNames] = useState([]);

    useEffect(() => {
        if (data.length > 0) {
            setPropertyNames(Object.keys(data[0]).filter(name => name != 'id'));
        }
    }, [data]);

    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800 mt-4">{entityName}</h1>

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
                                        <th key={propertyName}>{propertyName.toUpperCase()}</th>
                                    ))}
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        {propertyNames.map((propertyName) => (
                                            <td key={propertyName}>{item[propertyName]}</td>
                                        ))}
                                        <td className='text-center'>
                                            <Link to={`edit/${item.id}`} className="btn btn-primary">
                                                Edit
                                            </Link>
                                        </td>
                                        <td className='text-center'>
                                            <button
                                                onClick={() => onDelete(item.id)}
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

export default CommonTable;