import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div class="container-fluid">
      <h1 class="h3 mb-2 text-gray-800 mt-4">Category</h1>

      <Link to={"add"} class="btn btn-primary">
        Add
      </Link>
      {/* <a href="/admin/category/add" class="btn btn-primary">Add</a> */}

      <div class="card shadow mb-4 mt-3 ">
        <div class="card-body ">
          <div class="table-responsive">
            <table
              class="table table-bordered table-striped"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
