import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Add = () => {
  const navigate = useNavigate();

  const ImgPath = useRef(null);


  const addHomeBannerHandler = (e) => {
    e.preventDefault();
    var data = new FormData();
    console.log(ImgPath.current);

    var imagedata = ImgPath.current.files[0];

    data.append("test", imagedata, imagedata.name);
    console.log(data);
    // const model = {
    //   imagePath: ImgPath.current.value,
    // };
    // try {
    //   const response = await fetch(
    //     "https://localhost:44397/api/HomeBanner",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //         // "Accept": "application/json"
    //       },
    //       body: JSON.stringify(model),
    //     }
    //   );

    //   if (response.ok) {
    //     const jsonData = await response.json();
    //     console.log("response: " + jsonData);
    //     navigate("/admin/homebanner");
    //   } else {
    //     console.error(
    //       "Failed to add advertisement. Server responded with status:",
    //       response.status
    //     );
    //     console.log(model);
    //   }
    // } catch (error) {
    //   console.error("error", error);
    // }
  };

  // const addHomeBannerHandler = async () => {
  //   const selectedFile = ImgPath.current.value;
  //   console.log("value: " + selectedFile);
  //   if (selectedFile) {
  //     const model = {
  //       imagePath: ImgPath.current.value,
  //     }
  //     console.log("model: " + model);
  //     // const formData = new FormData();
  //     // formData.append("imagePath", selectedFile);
  //     // console.log("formdata: " + formData);
  //     // try {
  //     //   const response = await fetch("https://localhost:44397/api/homebanner", {
  //     //     method: "POST",
  //     //     body: formData,
  //     //   });

  //     //   if (response.ok) {
  //     //     const jsonData = await response.json();
  //     //     console.log(jsonData);
  //     //     navigate("/admin/homebanner");
  //     //   } else {
  //     //     console.error(
  //     //       "Failed to add advertisement. Server responded with status:",
  //     //       response.status
  //     //     );
  //     //   }
  //     // } catch (error) {
  //     //   console.error("Error:", error);
  //     // }
  //   } else {
  //     console.error("No file selected");
  //   }
  // };
  return (
    <>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="card shadow-lg border-0 rounded-lg mt-5">
              <div class="card-header"><h3 class="text-center font-weight-light my-4">Add HomeBanner</h3></div>
              <div class="card-body">
                <form method="POST" onSubmit={addHomeBannerHandler} encType="multipart/form-data">
                  <div class="row mb-3">
                    <div class="col-md-12 w-100">
                      <div class="form-floating mb-3 mb-md-3">
                        <input type="file" ref={ImgPath} className="form-control w-100" id="ImgPath" accept="image/*" />
                        <label htmlFor="ImgPath" class="w-25">Image Path</label>
                      </div>
                    </div>
                  </div>
                  <div class="mt-5 mb-0">
                    <button class="btn btn-success w-100">Save</button>
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