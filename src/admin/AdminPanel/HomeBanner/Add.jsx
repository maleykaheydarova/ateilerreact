import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Add = () => {
    
  const ImgPath = useRef(null);

  const navigate = useNavigate();

  const addHomeBannerHandler = async () => {
    const model = {
      ImgPath: ImgPath.current.value,
    };

 try {
    const response = await fetch(
      "https://localhost:7074/api/HomeBanner", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(model),
      }
    );
  
    if (response.ok) {
      const jsonData = await response.json();
      console.log(jsonData);
    } else {
      console.error(
        "Failed to add advertisement. Server responded with status:",
        response.status
      );
    }
     navigate("/admin/homebanner");
  } catch (error) {
  console.error("error" , error);
  }
  };
  return (
    <>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Add HomeBanner</h3></div>
                    <div class="card-body">
                        <form method="post" enctype="multipart/form-data">
                            <div class="row mb-3">
                                <div class="col-md-12 w-100">
                                    <div class="form-floating mb-3 mb-md-3">

                                        <input asp-for="FirstName" type="file" ref={ImgPath} class="form-control w-100" id="imgPath" />
                                        <label for="FirstName" class="w-25">Image Path</label>
                                    </div> 
                                </div>
                            </div>
                            <div class="mt-5 mb-0">
                                <button onClick={addHomeBannerHandler} class="btn btn-success w-100">Save</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Add