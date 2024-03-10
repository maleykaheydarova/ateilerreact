import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeBannerBody from './HomeBannerBody';
const HomeBanner = (ArrayBody) => {
  const [data, setData] = useState({});
  const [Update, setUpdate] = useState(0);

  const updateFunction = () => {
    setUpdate(Update + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://localhost:44397/api/HomeBanner"
        );
        const jsonData = await response.json();
        if (jsonData) {
          // Check if jsonData is truthy before updating the state
          setData(jsonData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [Update]);

  return (
    <div class="container-fluid">
      <h1 class="h3 mb-2 text-gray-800 mt-4">Home Banner</h1>

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
                  <th>Image Path</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              {data.length > 0 &&
                data.map((x) => {
                  return (
                    <HomeBannerBody x={x} updateFunction={updateFunction} />
                  );
                })}

            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner