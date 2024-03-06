import React from 'react';
import AddEntity from '../Components/AddEntity';

const Add = () => {
  const properties = ["Name"]
  return (
    <AddEntity apiUrl={"https://localhost:44397/api"} entityName={"Color"} propertyNames={properties}/>
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
