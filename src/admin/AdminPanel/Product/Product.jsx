import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div class="container-fluid">
      <h1 class="h3 mb-2 text-gray-800 mt-4">Product</h1>

      <Link to={"add"} class="btn btn-primary">
        Add
      </Link>

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
                  <th>Price</th>
                  <th>Rating</th>
                  <th>IsTrending</th>
                  <th>IsFeatured</th>
                  <th>Image Path</th>
                  <th>Description</th>  
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

export default Product;
