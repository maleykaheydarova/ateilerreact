import React from 'react'
import AddEntity from '../Components/AddEntity'

const Add = () => {
  const properties = ["Name"]
  
  return (
    <AddEntity apiUrl={"https://localhost:44397/api"} entityName={"Category"} propertyNames={properties}/>
//     <main>
//     <div class="container">
//         <div class="row justify-content-center">
//             <div class="col-lg-7">
//                 <div class="card shadow-lg border-0 rounded-lg mt-5">
//                     <div class="card-header"><h3 class="text-center font-weight-light my-4">Add Category</h3></div>
//                     <div class="card-body">
//                         <form method="post" action="/admin/category/add" enctype="multipart/form-data">
//                             <div class="row mb-3">
//                                 <div class="col-md-12 w-100">
//                                     <div class="form-floating mb-3 mb-md-3">

//                                         <input asp-for="FirstName" type="text" class="form-control w-100" id="PersonFirstName" placeholder="Enter FirstName" />
//                                         <label for="FirstName" class="w-25">Name</label>
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

export default Add