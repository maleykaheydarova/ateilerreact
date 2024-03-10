import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Edit = () => {

  // Get the ID parameter from the URL
  const { id } = useParams();

  const navigate = useNavigate();


  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://localhost:44397/api/HomeBanner/id?id=${id}`
        );

        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error(
            "Failed to fetch advertisement. Server responded with status:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error fetching advertisement:", error);
      }
    };

    fetchData();
  }, [id]);

  const ImgPath = useRef(null);

  const addHomeBannerHandler = async (e) => {
    e.preventDefault();

    const file = ImgPath.current.files[0];
    const formData = new FormData();
    formData.append('ID', `${id}`);
    formData.append('ImagePath', 'file');
    formData.append('image', file);
    console.log(formData);

    try {
      const response = await fetch(
        `https://localhost:44397/api/HomeBanner`,
        {
          method: "PUT",
          // headers: {
          //   "Content-Type": `multipart/formdata`,
          // },
          body: formData,
        }
      );

      if (response.ok) {
        navigate("/admin/homebanner");
      }
      else {
        console.error(
          "Failed to add advertisement. Server responded with status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error adding advertisement:", error);
    }
  };


  return (
    <main>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="card shadow-lg border-0 rounded-lg mt-5">
              <div class="card-header"><h3 class="text-center font-weight-light my-4">Edit HomeBanner</h3></div>
              <div class="card-body">
                <form onSubmit={addHomeBannerHandler} enctype="multipart/form-data">
                  <div class="row mb-3">
                    <div class="col-md-12 w-100">
                      <div class="form-floating mb-3 mb-md-3">

                        <input type="file" ref={ImgPath} class="form-control w-100" id="image" />
                        <label htmlFor="image" class="w-25">Image Path</label>
                      </div>
                    </div>
                  </div>
                  <div class="mt-5 mb-0">
                    <button type="submit" className="btn btn-success w-100">Save</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Edit