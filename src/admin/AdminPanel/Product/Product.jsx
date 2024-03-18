import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { token } from '../../../Helpers/helper'
import { getAllData, handleDelete } from '../../../Helpers/apiHelper'
import EntityTable from '../Components/EntityTable'

const Product = () => {
  const propertyNames = ["Name", "Price", "Rating", "IsTrending", "IsFeatured", "Image", "Description"]

  const [entities, setEntities] = useState([]);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    getAllData("Product", token, setEntities)
  }, [update]);
  return (
    // <EntityTable entityName={"Product"} propertyNames={propertyNames}/>
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800 mt-4">Product Table</h1>
      <Link to={'add'} className="btn btn-primary">
        Add
      </Link>
      <div className="card shadow mb-4 mt-3">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered table-striped table-centered"
              id="dataTable"
              width={"25%"}
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
                      propertyName.toLowerCase().includes("image") ? (
                        <td key={propertyName} width={"250px"}><img src={item["imagePath"]} className='img-fluid' /></td>
                      ) : (
                        <td key={propertyName}>{item[propertyName.toLowerCase()]}</td>
                      )
                    ))}
                    <td className='text-center'>
                      <Link to={`edit/${item.id}`} className="btn btn-primary">
                        Edit
                      </Link>
                    </td>
                    <td className='text-center'>
                      <button
                        onClick={() => handleDelete(item.id, () => setUpdate(update + 1), "Product", token)}
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

export default Product;
