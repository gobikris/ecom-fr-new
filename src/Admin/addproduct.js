import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../auth.service/auth.service";
import toast from "react-hot-toast";




// Add  product
export function AddProduct() {

  // access token
  const adminToken = window.localStorage.getItem("AdminToken");
  const alogin = <h1 className="text-center fw-bold mt-5 text-danger">"Access Denied"</h1>

  const navigate = useNavigate();

  // image 
  // state management
  const [base64code, setbase64code] = useState("");
  const [img, setImg] = useState("");

  // image handle 
  const imghandleSubmit = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  // image to string converted function
  const onLoad = (fileString) => {
    setImg(fileString);
    setbase64code = fileString;
  };

  // Image file reader function
  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };


  // image 1
  // state management
  const [base64code1, setbase64code1] = useState("");
  const [img1, setImg1] = useState("");

  // image handle 
  const imghandleSubmit1 = (e) => {
    const files1 = e.target.files;
    const file1 = files1[0];
    getBase641(file1);
  };

  // image to string converted function
  const onLoad1 = (fileString1) => {
    setImg1(fileString1);
    setbase64code1 = fileString1;
  };

  // Image file reader function
  const getBase641 = (file1) => {
    let reader1 = new FileReader();
    reader1.readAsDataURL(file1);
    reader1.onload = () => {
      onLoad1(reader1.result);
    };
  };
  

  // image 2
  // state management
  const [base64code2, setbase64code2] = useState("");
  const [img2, setImg2] = useState("");

  // image handle function
  const imghandleSubmit2 = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase642(file);
  };

  // image to string converted function
  const onLoad2 = (fileString) => {
    setImg2(fileString);
    setbase64code2 = fileString;
  };

  // Image file reader function
  const getBase642 = (file) => {
    let reader2 = new FileReader();
    reader2.readAsDataURL(file);
    reader2.onload = () => {
      onLoad2(reader2.result);
    };
  };

  
  // schema 
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price,setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [offer, setOffer] = useState("");
  const [fit, setFit] = useState("");

  
  // form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const List = {
      name,
      img,
      img1,
      img2,
      desc,
      fit,
      price,
      rating,
      offer,
    }
    console.log(List);
    try {
      // api call
      await axios.post(`${API_URL}/products`, List);
      navigate("/productlist");
      toast.success("Product Added Successfully")
    } catch (error) {
      console.log(error.message);
    }
  };



  return (
    <div className="container">
      
      <div className="row ">
      
        <div className="col-lg-4 col-md-12  mt-5 mx-auto">
        <i className="fa size fa-arrow-left hand" aria-hidden="true" onClick={()=>navigate("/ahome")}></i>
        <img
            className="img-fluid mt-5"
            src="https://camo.githubusercontent.com/40165a147c3dcea0fa1db780bb533fc5f98546ccfb9d5d05ddb2f429277f5348/68747470733a2f2f616e616c7974696373696e6469616d61672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f31322f646576656c6f7065722d6472696262626c652e676966"
            alt="gif"
          />
        </div>
        {/* form */}
        <div className="col-sm-12 col-md-9 col-lg-4 p-3 rounded-3 order shadow-lg p-4 mx-auto mt-5">
        {adminToken && (
        <form
            className="d-flex flex-column gap-3 text-center"
            onSubmit={handleSubmit}
          >
            <h4 className="bg-warning rounded-pill p-2">Add Products</h4>
            {/* product name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                id="name"
                required
                className="form-control  p-2"
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            {/*  description */}
            <div>
              <input
                type="text"
                name="desc"
                className="form-control  p-2"
                placeholder="Description"
                id="desc"
                required
                onChange={(e)=>setDesc(e.target.value)}
              />
            </div>
          {/* dropdown */}

          <div class="btn-group mb-2">
                <button
                  type="button"
                  className="btn btn-outline-white bg-white border-0  p-2 text-start"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Images
                </button>

                <ul class="dropdown-menu p-3 text-center">
                  <li>
                  <div>
              <input
                type="file"
                className="form-control text-center border-0  mb-3 "
                required
                onChange={imghandleSubmit}
              />
            </div>
            {/* Image */}
            <div>
              {/* <input
                type="text"
                name="img"
                placeholder=""
                className="form-control text-center  mb-3"
                id="img"
                value={img}
                onChange={setList}
                required
              /> */}
            </div>
                  </li>
{/* Base64 1*/}
<div>
              <input
                type="file"
                className="form-control text-center mb-3"
                required
                onChange={imghandleSubmit1}
              />
            </div>
            {/* Image 1 */}
            <div>
              {/* <input
                type="text"
                name="img1"
                placeholder=""
                className="form-control text-center  mb-3"
                id="img1"
                value={img1}
                onChange={setList}
                required
              /> */}
            </div>

                  <li>
                     {/* Base64 2 */}
            <div>
              <input
                type="file"
                className="form-control text-center mb-3"
                required
                onChange={imghandleSubmit2}
              />
            </div>
            {/* Image 2*/}
            <div>
              {/* <input
                type="text"
                name="img2"
                placeholder=""
                className="form-control text-center  mb-3"
                id="img2"
                value={img2}
                onChange={setList}
                required
              /> */}
            </div>
                  </li>

                  <li>
                    
                  </li>
                </ul>
              </div>


            {/* fit */}
            <div className=" mb-2">
              <select
                className="form-control p-2 "
                aria-label="Default select example"
                placeholder="Fit"
                type="text"
                name="fit"
                onChange={(e)=>setFit(e.target.value)}
              >
                <option selected>--Select Fit--</option>
                <option type="text" name="fit" value="Regular Fit">
                  Regular Fit
                </option>
                <option type="text" name="fit" value="Slim Fit">
                  Slim Fit
                </option>
                <option type="text" name="fit" value="Tailored Fit">
                  Tailored Fit
                </option>
              </select>
            </div>

            {/* Price */}
            <div>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="form-control p-2"
                id="price"
                required
                onChange={(e)=>setPrice(e.target.value)}
              />
            </div>
            {/*  Rating */}
            <div>
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                className="form-control p-2"
                id="rating"
                required
                onChange={(e)=>setRating(e.target.value)}
              />
            </div>
            {/*  offer */}
            <div>
              <input
                type="number"
                name="offer"
                placeholder="offer"
                className="form-control p-2"
                id="offer"
                required
                onChange={(e)=>setOffer(e.target.value)}
              />
            </div>
            {/* submit Button */}
            <button
             
              type="submit"
              className="btn btn-danger  rounded-pill p-2 fw-bold"
            >
              Add Product
            </button>
          </form>)}
          {!adminToken && alogin}
        
        </div>
      </div>
      
    </div>
  
  );
}


