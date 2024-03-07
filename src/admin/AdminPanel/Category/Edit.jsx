import React from 'react'
import EditEntity from '../Components/EditEntity'
import Helper from '../../../Helpers/helper'

const Edit = () => {
    const properties = ["Name"]
    return (
        <EditEntity apiUrl={Helper} entityName="Category" propertyNames={properties} />
        // <main>
        //     <div class="container">
        //         <div class="row justify-content-center">
        //             <div class="col-lg-7">
        //                 <div class="card shadow-lg border-0 rounded-lg mt-5">
        //                     <div class="card-header"><h3 class="text-center font-weight-light my-4">Edit Category</h3></div>
        //                     <div class="card-body">
        //                         <form method="post" enctype="multipart/form-data">
        //                             <div class="row mb-3">
        //                                 <div class="col-md-12 w-100">
        //                                     <div class="form-floating mb-3 mb-md-3">

        //                                         <input asp-for="ID" type="text" disabled class="form-control w-100" id="PersonID" placeholder="Enter ID" />
        //                                         <label for="ID" class="w-25">ID</label>

        //                                     </div>
        //                                     <div class="form-floating mb-3 mb-md-3">

        //                                         <input asp-for="Name" type="text" class="form-control w-100" id="PersonFirstName" placeholder="Enter FirstName" />
        //                                         <label for="Name" class="w-25">Name</label>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div class="mt-5 mb-0">
        //                                 <button type="submit" class="btn btn-success w-100">Save</button>
        //                             </div>
        //                         </form>

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </main>
    )
}

export default Edit