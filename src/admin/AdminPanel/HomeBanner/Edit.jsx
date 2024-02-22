import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
const Edit = () => {

     // Get the ID parameter from the URL
  const { id } = useParams();

  // State to manage form data
  const [formData, setFormData] = useState({
    companyName: "",
    entryDate: "",
    leaveDate: "",
    description: "",
  });

  const navigate = useNavigate();

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation logic here
    console.log("Form submitted:", formData);
    // You can also add logic to send the form data to the server
  };
  const [data, setData] = useState({});
  const ImgPath = useRef(null);


  const addHomeBannerHandler = async () => {
    const model = {
      
      ImgPath: ImgPath.current.value,
    
    };

    try {
      const response = await fetch(
        `https://localhost:7046/api/AdvertisementBanner/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(model),
        }
      );

      if (response.ok) {
        const jsonData = await response.json();
        console.log(jsonData); // Optionally, do something with the response data
      } else {
        console.error(
          "Failed to add advertisement. Server responded with status:",
          response.status
        );
      }
      navigate("/admin/homebanner");
    } catch (error) {
      console.error("Error adding advertisement:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://localhost:7046/api/AdvertisementBanner/${id}`
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
  }, [id]); // Include 'id' as a dependency
  return (
    <main>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Edit HomeBanner</h3></div>
                    <div class="card-body">
                        <form method="post" enctype="multipart/form-data">
                            <div class="row mb-3">
                                <div class="col-md-12 w-100">
                                    <div class="form-floating mb-3 mb-md-3">

                                        <input asp-for="FirstName" type="file" ref={ImgPath} class="form-control w-100" id="PersonFirstName" placeholder="Enter FirstName" />
                                        <label for="FirstName" class="w-25">Image Path</label>
                                    </div> 
                                </div>
                            </div>
                            <div class="mt-5 mb-0">
                                <button  onClick={addHomeBannerHandler} className="btn btn-success w-100">Save</button>
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