import React from "react";
import AddForm from "../Components/AddForm"
const Add = () => {
  const add = [
    {
      ResponsiveClasses: "form-floating mb-3 mb-md-3",
      Name: "Name",
      type: "text",
      FormClasses: "form-control w-100",
      LabelClasses: "w-25",
    },
    {
      ResponsiveClasses: "form-floating mb-3 mb-md-3",
      Name: "Price",
      type: "number",
      FormClasses: "form-control w-100",
      LabelClasses: "w-25",

    },
    {
      ResponsiveClasses: "form-floating mb-3 mb-md-3",
      Name: "Rating",
      type: "number",
      FormClasses: "form-control w-100",
      LabelClasses: "w-25",
    },
    {
      ResponsiveClasses: "d-flex align-items-center justify-content-start ms-1",
      Name: " IsTrending",
      type: "checkbox",
      FormClasses: "",
      LabelClasses: "my-1 mx-2",
    },
    {
      ResponsiveClasses: "d-flex align-items-center justify-content-start ms-1",
      Name: " IsFeatured",
      type: "checkbox",
      FormClasses: "",
      LabelClasses: "my-1 mx-2",
    },
    {
      ResponsiveClasses: "form-floating mb-5 mb-md-4",
      Name: "Image Path",
      type: "file",
      FormClasses: "form-control w-100",
      LabelClasses: "w-25",
    },
    {
      ResponsiveClasses: "form-floating mt-3 mb-md-3",
      Name: "Description",
      type: "text",
      FormClasses: "form-control w-100",
      LabelClasses: "w-25",
    },

  ];
  return (

    <main>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="card shadow-lg border-0 rounded-lg mt-5">
              <div class="card-header">
                <h3 class="text-center font-weight-light my-4">Add Product</h3>
              </div>
              <div class="card-body">
                <form
                  method="post"
                  action="/admin/product/add"
                  enctype="multipart/form-data"
                >
                  <div class="row mb-3">
                    <div class="col-md-12 w-100">
                      {add.map((add, index) => (
                        <AddForm
                          key={index}
                          Name={add.Name}
                          type={add.type}
                          ResponsiveClasses={add.ResponsiveClasses}
                          FormClasses={add.FormClasses}
                          LabelClasses={add.LabelClasses}
                        />
                      ))}
                      {/* <div class="form-floating mb-3 mb-md-3">
                        <input
                          asp-for="Name"
                          type="text"
                          class="form-control w-100"
                          id="PersonFirstName"
                          placeholder="Enter FirstName"
                        />
                        <label for="Name" class="w-25">
                          Name
                        </label>
                      </div>
                      <div class="form-floating mb-3 mb-md-3">
                        <input
                          asp-for="Price"
                          type="number"
                          class="form-control w-100"
                          id="Price"
                          placeholder="Enter LastName"
                        />
                        <label for="Price" class="w-25">
                          Price
                        </label>
                      </div>
                      <div class="form-floating mb-3 mb-md-3">
                        <input
                          asp-for="Price"
                          type="number"
                          class="form-control w-100"
                          id="Rating"
                          placeholder="Enter LastName"
                        />
                        <label for="Price" class="w-25">
                          Rating
                        </label>
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
                        <span asp-validation-for="ImgPath"></span>
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
                        <span asp-validation-for="Description"></span>
                      </div> */}
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

export default Add;
