import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { token } from '../../../Helpers/helper'
import { apiUrl, getAllData } from '../../../Helpers/apiHelper'
import AddEntity from '../Components/AddEntity'

const Add = () => {
  const propertyNames = ["Name", "Price", "Raiting", "Image", "Description"]

  const [errorMessages, setErrorMessages] = useState({});
  const [formValues, setFormValues] = useState({});
  const [isTrending, setIsTrending] = useState([]);
  const [categoryId, setCategoryId] = useState([]);
  const [IsFeatured, setIsFeatured] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [characteristics, setCharacteristics] = useState([]);
  const [selectedCharacteristics, setSelectedCharacteristics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllData("Size", token, setSizes)
    getAllData("Color", token, setColors)
    getAllData("Tag", token, setTags)
    getAllData("Characteristic", token, setCharacteristics)
  }, [apiUrl])

  // useEffect(() => {
  //   propertyNames.map(property => (
  //     setFormValues(prevValues => ({ ...prevValues, [property.toLowerCase()]: "" }))
  //   ))
  // }, [apiUrl, propertyNames]);

  const imageExistence = Object.keys(formValues).some(key => key.toLowerCase().includes("image"));

  const handleInputChange = (property, value) => {
    setFormValues(prevValues => ({ ...prevValues, [property]: value }));
    console.log(formValues);
  };


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    if (!imageExistence) {
      headers['Content-Type'] = 'application/json';
    }

    if (imageExistence) {
      var data = new FormData();

      Object.entries(formValues).forEach(([property, value]) => {
        data.append(property, value);
        if (property === 'image') {
          data.append("ImagePath", 'file');
        }
        data.append("characteristics", selectedCharacteristics)
        data.append("tags", selectedTags)
        data.append("color", selectedColors)
        data.append("size", selectedSizes)
        data.append("categoryId", categoryId)
      });
    }

    const response = await fetch(`${apiUrl}/Product`, {
      method: 'POST',
      headers,
      body: imageExistence ? data : JSON.stringify(formValues),
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
        navigate(`/admin/product`);
      }
    } else {
      console.error(response);
    }
  };

  return (
    // <AddEntity entityName={"Product"} propertyNames={propertyNames} />
    <main>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header">
                <h3 className="text-center font-weight-light my-4">Add Product</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-12 w-100">
                      {propertyNames.map(property => (
                        property.toLowerCase().includes("image") ?
                          (
                            <div key={property} className="form-floating mb-3 mb-md-3">
                              <input
                                type="file"
                                className="form-control w-100"
                                id={property}
                                onChange={(e) => handleInputChange(property.charAt(0).toLowerCase() + property.slice(1), e.target.files[0])}
                              />
                              <label htmlFor={property} className="w-25">
                                {property}
                              </label>
                              <p className='text-danger'>{errorMessages[property]}</p>
                            </div>
                          )
                          :
                          (
                            <div key={property} className="form-floating mb-3 mb-md-3">
                              <input
                                type="text"
                                className="form-control w-100"
                                id={property}
                                placeholder={`Enter ${property}`}
                                onChange={(e) => handleInputChange(property.charAt(0).toLowerCase() + property.slice(1), e.target.value)}
                              />
                              <label htmlFor={property} className="w-25">
                                {property}
                              </label>
                              <p className='text-danger'>{errorMessages[property]}</p>
                            </div>
                          )
                      ))}
                      <div key={"IsTrending"} className="form-floating mb-3 mb-md-3">
                        <input type="checkbox" onChange={(e) => setIsTrending(e.target.checked)} />
                      </div>
                      <div key={"IsFeatured"} className="form-floating mb-3 mb-md-3">
                        <input type="checkbox" onChange={(e) => setIsFeatured(e.target.checked)} />
                      </div>
                      <div key={"CategoryId"} className="form-floating mb-3 mb-md-3">
                        <input type="number" onChange={(e) => setCategoryId(e.target.value)} />
                        <label htmlFor={categoryId} className="w-25">
                          {"CategoryId"}
                        </label>
                      </div>
                      <div key={"Sizes"} className="form-floating mb-3 mb-md-3">
                        <select>
                          <option value="">Select Sizes</option>
                          {
                            sizes.map(size => (
                              <option value={size.name} onClick={() => setSelectedSizes(prevValues => ({ ...prevValues, size }))}>{size.name}</option>
                            ))
                          }
                        </select>
                      </div>
                      <div key={"Colors"} className="form-floating mb-3 mb-md-3">
                        <select>
                          <option value="">Select Colors</option>
                          {
                            colors.map(color => (
                              <option value={color.name} onClick={() => setSelectedColors(prevValues => ({ ...prevValues, color }))}>{color.name}</option>
                            ))
                          }
                        </select>
                      </div>
                      <div key={"Tags"} className="form-floating mb-3 mb-md-3">
                        <select>
                          <option value="">Select Tags</option>
                          {
                            tags.map(tag => (
                              <option value={tag.name} onClick={() => setSelectedTags(prevValues => ({ ...prevValues, tag }))}>{tag.name}</option>
                            ))
                          }
                        </select>
                      </div>
                      <div key={"Characteristics"} className="form-floating mb-3 mb-md-3">
                        <select>
                          <option value="">Select Characteristics</option>
                          {
                            characteristics.map(characteristic => (
                              <option value={characteristic.name} onClick={() => setSelectedCharacteristics(prevValues => ({ ...prevValues, characteristic }))}>{characteristic.name}</option>
                            ))
                          }
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 mb-0 d-flex gap-5">
                    <button type="submit" className="btn btn-success w-50">Save</button>
                    <Link to={`/admin/product`} className='btn btn-danger w-50'>Cancel</Link>
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

export default Add;