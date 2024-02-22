import React from "react";
import EditForm from "../Components/EditForm";

const Edit = () => {
    const edit=[
        {
            ResponsiveClasses: "form-floating mb-3 mb-md-3",
            Name: "ID",
            type: "text",
            disabled: true,
            FormClasses :"form-control w-100",   
            LabelClasses:"w-25",
        },
        {
            ResponsiveClasses: "form-floating mb-3 mb-md-3",
            Name: "Name",
            type: "text",
            FormClasses :"form-control w-100",   
            LabelClasses:"w-25",
        },
        {
            ResponsiveClasses: "form-floating mb-3 mb-md-3",
            Name: "Price",
            type: "number",
            FormClasses :"form-control w-100",
            LabelClasses:"w-25",
            
        },
        {
            ResponsiveClasses: "form-floating mb-3 mb-md-3",
            Name: "Rating",
            type: "number",
            FormClasses :"form-control w-100",  
            LabelClasses:"w-25",
        },
        {
            ResponsiveClasses: "d-flex align-items-center justify-content-start ms-1",
            Name: " IsTrending",
            type: "checkbox",
            FormClasses :"",  
            LabelClasses:"my-1 mx-2",
        },
        {
            ResponsiveClasses: "d-flex align-items-center justify-content-start ms-1",
            Name: " IsFeatured",
            type: "checkbox",
            FormClasses :"",  
            LabelClasses:"my-1 mx-2",
        },
        {
            ResponsiveClasses: "form-floating mb-5 mb-md-4",
            Name: "Image Path",
            type: "file",
            FormClasses :"form-control w-100",  
            LabelClasses:"w-25",
        },
        {
            ResponsiveClasses: "form-floating mt-3 mb-md-3",
            Name: "Description",
            type: "text",
            FormClasses :"form-control w-100", 
            LabelClasses:"w-25", 
        },

    ];
  return (
    <main>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="card shadow-lg border-0 rounded-lg mt-5">
              <div class="card-header">
                <h3 class="text-center font-weight-light my-4">Edit Product</h3>
              </div>
              <div class="card-body">
                <form method="post" enctype="multipart/form-data">
                  <div class="row mb-3">
                    <div class="col-md-12 w-100">
                    {edit.map((edit, index) => (
            <EditForm
              key={index}
              Name={edit.Name}
              type={edit.type}
              ResponsiveClasses={edit.ResponsiveClasses}
              FormClasses={edit.FormClasses}
              LabelClasses={edit.LabelClasses}    
              disabled={edit.disabled}     
            />
          ))}
                      <div class="form-floating mb-3 mb-md-3">
                        <input
                          asp-for="ID"
                          type="text"
                          disabled
                          class="form-control w-100"
                          id="PersonID"
                          placeholder="Enter ID"
                        />
                        <label for="ID" class="w-25">
                          ID
                        </label>
                      </div>
                      <div class="form-floating mb-3 mb-md-3">
                        <input
                          asp-for="FirstName"
                          type="text"
                          class="form-control w-100"
                          id="PersonFirstName"
                          placeholder="Enter FirstName"
                        />
                        <label for="FirstName" class="w-25">
                          Name
                        </label>
                        <span className="mt-1" style={{ color: "red" }}></span>
                      </div>
                      <div class="form-floating mb-3 mb-md-3">
                        <input
                          asp-for="Level"
                          type="number"
                          placeholder="skill detail level"
                          class="form-control w-100"
                          id="SkillDetailLevel"
                        />
                        <label for="SkillLevel" class="w-100">
                          Price
                        </label>
                        <span className="mt-1" style={{ color: "red" }}></span>
                      </div>
                      <div class="form-floating mb-3 mb-md-3">
                        <input
                          asp-for="Level"
                          type="number"
                          placeholder="skill detail level"
                          class="form-control w-100"
                          id="SkillDetailLevel"
                        />
                        <label for="SkillLevel" class="w-100">
                          Rating
                        </label>
                        <span className="mt-1" style={{ color: "red" }}></span>
                      </div>
                      <div class="d-flex align-items-center justify-content-start ms-1">
                      <input
                          asp-for="ShownOnPage"
                          type="checkbox"
                          class=""
                          id="ShownOnPageName"
                        />
                        <label for="TitileName" class="my-1 mx-2">
                          IsTrending
                        </label>
                        
                        <span className="mt-1" style={{ color: "red" }}></span>
                      </div>

                      <div class="d-flex align-items-center justify-content-start ms-1">
                        <input
                          asp-for="ShownOnPage"
                          type="checkbox"
                          class=""
                          id="ShownOnPageName"
                        />
                        <label for="TitileName" class="my-1 mx-2">
                          IsFeatured
                        </label>

                        <span className="mt-1" style={{ color: "red" }}></span>
                      </div>
                      <div class="form-floating mb-5 mb-md-4">
                        <input
                          asp-for="ImageFile"
                          type="file"
                          class="form-control w-100"
                          id="PersonImgPath"
                          placeholder="Enter ImgPath"
                        />
                        <label for="ImageFile" class="w-25">
                          Image Path
                        </label>
                        <span className="mt-1" style={{ color: "red" }}></span>
                      </div>

                      <div class="form-floating mt-3 mb-md-3">
                        <input
                          asp-for="Description"
                          type="text"
                          class="form-control w-100"
                          id="PersonDescription"
                          placeholder="Enter Description"
                        />
                        <label for="Description" class="w-25">
                          Description
                        </label>
                        <span className="mt-1" style={{ color: "red" }}></span>
                      </div>
                    </div>
                  </div>
                  <div class="mt-5 mb-0">
                    <button type="submit" class="btn btn-success w-100">
                      Save
                    </button>
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

export default Edit;
