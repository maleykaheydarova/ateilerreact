import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateBoundary } from '../../../Helpers/helper'

const Add = () => {
  const navigate = useNavigate();

  const ImgPath = useRef(null);

  const addHomeBannerHandler = async (e) => {
    e.preventDefault();

    // const boundary = generateBoundary()


    // console.log(ImgPath.current.files[0]);

    // reader.onload = () => {
    //   const binaryString = ImgPath.current.files[0];
    // }
    // const model = {
    //   ImagePath: 'asd',
    //   image: ImgPath.current.files[0],
    // }
    // console.log(model);

    // const formData = new FormData();
    // formData.append("image", ImgPath.current.files[0]);
    // formData.append("ImagePath", ImgPath.current.files[0]);
    // console.log(formData);

    const file = ImgPath.current.files[0];
    const formData = new FormData();
    formData.append('ImagePath', 'file');
    formData.append('image', file);
    console.log(formData);

    try {
      const response = await fetch(
        "https://localhost:44397/api/HomeBanner",
        {
          method: "POST",
          // headers: {
          //   'Content-Type': `multipart/form-data`,
          // },
          body: formData,
        }
      );

      if (response.ok) {
        navigate("/admin/homebanner");
      } else {
        console.error(
          "Failed to add advertisement. Server responded with status:",
          response.status
        );
      }
    } catch (error) {
      console.error("error", error);
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
                <form method="POST" onSubmit={addHomeBannerHandler} encType="multipart/form-data">
                  <div class="row mb-3">
                    <div class="col-md-12 w-100">
                      <div class="form-floating mb-3 mb-md-3">
                        <input type="file" ref={ImgPath} className="form-control w-100" id="ImagePath" accept="image/*" />
                        <label htmlFor="ImagePath" class="w-25">Image Path</label>
                      </div>
                    </div>
                  </div>
                  <div class="mt-5 mb-0">
                    <button type="submit" class="btn btn-success w-100">Save</button>
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