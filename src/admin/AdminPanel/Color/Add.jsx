import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddEntity from '../Components/AddEntity';

const Add = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Create a JSON object to send the data
    const data = {
      name: name,
    };

    // Send a POST request to the API endpoint
    try {
      const response = await fetch('https://localhost:44397/api/color', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify the content type as JSON
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Data added successfully');
        navigate('/admin/Color');
      } else {
        console.error('Error adding data:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <AddEntity apiUrl={"https://localhost:44397/api/color"} entityName={"Color"} />
    // <main>
    //   <div className="container">
    //     <div className="row justify-content-center">
    //       <div className="col-lg-7">
    //         <div className="card shadow-lg border-0 rounded-lg mt-5">
    //           <div className="card-header">
    //             <h3 className="text-center font-weight-light my-4">Add Color</h3>
    //           </div>
    //           <div className="card-body">
    //             <form onSubmit={handleFormSubmit}>
    //               <div className="row mb-3">
    //                 <div className="col-md-12 w-100">
    //                   <div className="form-floating mb-3 mb-md-3">
    //                     <input
    //                       type="text"
    //                       className="form-control w-100"
    //                       id="name"
    //                       placeholder="Enter Name"
    //                       value={name}
    //                       onChange={handleNameChange}
    //                     />
    //                     <label htmlFor="name" className="w-25">
    //                       Name
    //                     </label>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="mt-5 mb-0">
    //                 <button type="submit" className="btn btn-success w-100">
    //                   Save
    //                 </button>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
};

export default Add;
