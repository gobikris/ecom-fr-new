// import React, { useEffect, useReducer, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { formReducer } from "../store/form.service";
// import { toast } from "react-hot-toast";
// import { API_URL } from "../auth.service/auth.service";

// export function AddProduct() {
//   const navigate = useNavigate();

//   const [data, setData] = useReducer(formReducer, {
//     name: "",
//     img: "",
//     img1: "",
//     img2: "",
//     fit: "",
//     desc: "",
//     price: "",
//     rating: "",
//     offer: "",
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post(`${API_URL}/products`, data);
//       navigate("/productlist");

//       toast.success("Products Added Successfully");
//     } catch (error) {
//       console.log(error.message);
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         {/* this for gif */}

//         <div className="col-lg-5 col-md-12 col-12">
//           <span>
//             <i
//               class="fa fa-2x fa-arrow-left cur"
//               aria-hidden="true"
//               onClick={() => navigate("/ahome")}
//             ></i>
//           </span>
          // <img
          //   className="img-fluid mt-5"
          //   src="https://camo.githubusercontent.com/40165a147c3dcea0fa1db780bb533fc5f98546ccfb9d5d05ddb2f429277f5348/68747470733a2f2f616e616c7974696373696e6469616d61672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f31322f646576656c6f7065722d6472696262626c652e676966"
          //   alt="gif"
          // />
//         </div>

//         {/* this add form  */}
//         <div className="col-lg-5 col-md-12 col-12 mx-auto shadow p-4 rounded-4 order">
//           <div className="container">
//             <form onSubmit={handleSubmit} className="d-flex flex-column ">
//               {/* name */}
//               <div className="form-floating mb-3">
//                 <input
//                   type="text"
//                   className="form-control text-center border-0  rounded-pill"
//                   name="name"
//                   onChange={setData}
//                   placeholder="name"
//                 />
//                 <label for="floatingInput">Product Name</label>
//               </div>

//               {/* this is dropdown */}
              // <div class="btn-group mb-3">
              //   <button
              //     type="button"
              //     className="btn btn-outline-white bg-white border-0  rounded-pill p-3 text-start"
              //     data-bs-toggle="dropdown"
              //     aria-expanded="false"
              //   >
              //     Images
              //   </button>

              //   <ul class="dropdown-menu p-3 text-center">
              //     <li>
              //       <div className="form-floating mb-3">
              //         <input
              //           type="text"
              //           name="img"
              //           className="form-control text-center border-0  rounded-pill"
              //           onChange={setData}
              //           placeholder="img"
              //         />
              //         <label for="floatingInput">Image </label>
              //       </div>
              //     </li>

              //     <li>
              //       <div className="form-floating mb-3">
              //         <input
              //           type="text"
              //           name="img1"
              //           className="form-control text-center border-0  rounded-pill"
              //           onChange={setData}
              //           placeholder="img1"
              //         />
              //         <label for="floatingInput">Image 1</label>
              //       </div>
              //     </li>

              //     <li>
              //       <div className="form-floating mb-3">
              //         <input
              //           type="text"
              //           name="img2"
              //           className="form-control text-center border-0  rounded-pill"
              //           onChange={setData}
              //           placeholder="img2"
              //         />
              //         <label for="floatingInput">Image 2</label>
              //       </div>
              //     </li>
              //   </ul>
              // </div>

//               {/* desc */}
//               <div className="form-floating mb-3">
//                 <input
//                   type="text"
//                   name="desc"
//                   className="form-control text-center border-0  rounded-pill"
//                   onChange={setData}
//                   placeholder="desc"
//                 />
//                 <label for="floatingInput">Description</label>
//               </div>

//               {/* fit */}
//               <div className=" mb-3">
                
//                 <select
//                   class="form-control p-3 rounded-pill"
//                   aria-label="Default select example"
//                   placeholder="Fit"
//                   type="text"
//                   name="fit"
//                   onChange={setData}
//                 >
//                   <option selected>--Select Fit--</option>
//                   <option type="text" name="fit" value="Regular Fit">
//                     Regular Fit
//                   </option>
//                   <option type="text" name="fit" value="Slim Fit">
//                     Slim Fit
//                   </option>
//                   <option type="text" name="fit" value="Tailored Fit">
//                     Tailored Fit
//                   </option>
//                 </select>
//               </div>

//               {/* price */}
//               <div className="form-floating mb-3">
//                 <input
//                   type="number"
//                   name="price"
//                   className="form-control text-center border-0  rounded-pill"
//                   onChange={setData}
//                   placeholder="price"
//                 />
//                 <label for="floatingInput">Price</label>
//               </div>

//               {/* rating */}
//               <div className="form-floating mb-3">
//                 <input
//                   type="number"
//                   name="rating"
//                   className="form-control text-center border-0  rounded-pill"
//                   onChange={setData}
//                   placeholder="rating"
//                 />
//                 <label for="floatingInput">Rating</label>
//               </div>

//               {/* offer */}
//               <div className="form-floating mb-3">
//                 <input
//                   type="number"
//                   name="offer"
//                   className="form-control text-center border-0  rounded-pill"
//                   onChange={setData}
//                   placeholder="offer"
//                 />
//                 <label for="floatingInput">Offer</label>
//               </div>
//               {/* Add btn */}
//               <div className="d-flex justify-content-between">
//                 <button type="submit" className="btn btn-success rounded-pill">
//                   Add Product
//                 </button>
//                 <button
//                   className="btn btn-dark rounded-pill "
//                   onClick={() => navigate("/productlist")}
//                 >
//                   View List
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // // Edit Product
// export function EditFoodList() {
//   // state management
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   // edit food api call
//   const editFood = async () => {
//     try {
//       const { data } = await axios.get(`${API_URL}/products/${id}`);
//       setProduct(data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   // useEffect use refresh data
//   useEffect(() => {
//     editFood();
//   });

//   return (
//     <div className="container">
//       {product ? (
//         <EditFoodForm food={product} />
//       ) : (
//         <div className="progress mt-3">
//           <div
//             className="progress-bar progress-bar-striped progress-bar-animated"
//             role="progressbar"
//             aria-valuenow="75"
//             aria-valuemin="0"
//             aria-valuemax="100"
//             style={{ width: "75%" }}
//           ></div>
//         </div>
//       )}
//     </div>
//   );
// }

// // // Edit Food list form function
// export function EditFoodForm({ food }) {
//   // navigate to page
//   const navigate = useNavigate();
//   // state management
//   const [base64code, setbase64code] = useState("");
//   const [image, setImage] = useState("");

//   // image handle function
//   const imghandleSubmit = (e) => {
//     const files = e.target.files;
//     const file = files[0];
//     getBase64(file);
//   };

//   // image file converted to string
//   const onLoad = (fileString) => {
//     setImage(fileString);
//     setbase64code = fileString;
//   };

//   // image file reader
//   const getBase64 = (file) => {
//     let reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       onLoad(reader.result);
//     };
//   };

//    // state management
//   const [name, setName] = useState(food.name);
//   const [img, setImg] = useState(food.img);
//   const [img1, setImg1] = useState(food.img1);
//   const [img2, setImg2] = useState(food.img2);
//   const [desc, setDesc] = useState(food.desc);
//   const [price, setPrice] = useState(food.price);
//   const [rating, setRating] = useState(food.rating);
//   const [offer, setOffer] = useState(food.offer);
//   const [fit, setFit] = useState(food.fit);

//  // edit food update form and api call
//   const editfood = () => {
//     const updateFood = {
//       name: name,
//       img: img,
//       img1: img1,
//       img2: img2,
//       desc: desc,
//       fit: fit,
//       price: price,
//       rating: rating,
//       offer: offer,
//     };
//     fetch(`${API_URL}/products/${food._id}`, {
//       method: "PUT",
//       body: JSON.stringify(updateFood),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then(() => navigate("/foodList"));
//   };

//   return (
//     <div className="container">
    
//       <div className="row justify-content-center m-2 mt-5 mx-auto gap-3">
//         <div className="col-sm-4 col-md-6 col-lg-4 p-3 rounded-5 shadow-lg p-4 mx-auto">
//           <h5 className="text-center MainContent_Text">Edit Food List</h5>
//           {/* name */}
//           <input
//             className="mt-2 form-control"
//             value={name}
//             type="text"
//             placeholder="name"
//             onChange={(event) => setName(event.target.value)}
//           />
//           {/* image file */}
//           <input
//             className="mt-2 form-control"
//             type="file"
//             onChange={imghandleSubmit}
//           />
//           {/* image link */}
//           <input
//             className="mt-2 form-control"
//             value={image}
//             type="text"
//             placeholder="Image"
//             onChange={(event) => setImg(event.target.value)}
//           />
//           {/* description */}
//           <input
//             className="mt-2 form-control"
//             value={desc}
//             type="text"
//             placeholder="Description"
//             onChange={(event) => setDesc(event.target.value)}
//           />
//           {/* price */}
//           <input
//             className="mt-2 form-control"
//             value={price}
//             type="number"
//             placeholder="Price"
//             onChange={(event) => setPrice(event.target.value)}
//           />
//           {/* rating */}
//           <input
//             className="mt-2 form-control"
//             value={rating}
//             type="number"
//             placeholder="Rating"
//             onChange={(event) => setRating(event.target.value)}
//           />
//           {/* offer */}
//           <input
//             className="mt-2 form-control"
//             value={offer}
//             type="number"
//             placeholder="offer"
//             onChange={(event) => setOffer(event.target.value)}
//           />
//           {/* submit button */}
//           <button
//             className="btn btn-outline-success fw-bold mt-2 form-control"
//             onClick={editfood}
//           >
//             UPDATE
//           </button>
//         </div>
//         <div className="col-sm-4 col-md-6 col-lg-6 mx-auto">
//           <img
//             src="https://www.excelsisdeo.com/images/AlphaTestersAnimation_60.gif"
//             className="w-100"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


// import files
import React from "react";
import axios from "axios";
import { useEffect,useReducer,useState } from "react";
import { formReducer } from "../store/form.service";
import { useParams,useNavigate } from "react-router-dom";
import { API_URL } from "../auth.service/auth.service";
import toast from "react-hot-toast";




// Add Food function
export function AddProduct() {
  // navigate to page
  const navigate = useNavigate();
  // image 
  // state management
  const [base64code, setbase64code] = useState("");
  const [img, setImg] = useState("");

  // image handle function
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

  // image handle function
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

  
  // form initialValues
  const [food, setFood] = useReducer(formReducer, {
    name:"",
    img:img,
    img1:img1,
    img2:img2,
    fit:"",
    desc:"",
    price:"",
    rating:"",
    offer:"",
  });

  // form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // api call
      await axios.post(`${API_URL}/products`, food);
      navigate("/productlist");
      toast.success("Product Added Successfully")
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      
      <div className="row ">
      
        <div className="col-lg-5 col-md-12 col-12 mt-5">
        <i class="fa size fa-arrow-left hand" aria-hidden="true" onClick={()=>navigate("/ahome")}></i>
        <img
            className="img-fluid mt-5"
            src="https://camo.githubusercontent.com/40165a147c3dcea0fa1db780bb533fc5f98546ccfb9d5d05ddb2f429277f5348/68747470733a2f2f616e616c7974696373696e6469616d61672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f31322f646576656c6f7065722d6472696262626c652e676966"
            alt="gif"
          />
        </div>
        {/* form */}
        <div className="col-lg-5 col-md-12 col-12 shadow-lg p-5 rounded-5 order mt-5 mx-auto">
        <form
            className="d-flex flex-column gap-3 text-center"
            onSubmit={handleSubmit}
          >
            <h4 className="bg-warning rounded-pill p-2">Add Products</h4>
            {/* Food name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                id="name"
                required
                className="form-control rounded-pill p-2"
                onChange={setFood}
              />
            </div>
            {/*  description */}
            <div>
              <input
                type="text"
                name="desc"
                className="form-control rounded-pill p-2"
                placeholder="Description"
                id="desc"
                required
                onChange={setFood}
              />
            </div>
          {/* dropdown */}

          <div class="btn-group mb-2">
                <button
                  type="button"
                  className="btn btn-outline-white bg-white border-0  rounded-pill p-2 text-start"
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
                className="form-control text-center border-0  rounded-pill mb-3 "
                required
                onChange={imghandleSubmit}
              />
            </div>
            {/* Image */}
            <div>
              <input
                type="text"
                name="img"
                placeholder=""
                className="form-control text-center  rounded-pill mb-3"
                id="img"
                value={img}
                onChange={setFood}
                required
              />
            </div>
                  </li>
{/* Base64 1*/}
<div>
              <input
                type="file"
                className="form-control text-center  rounded-pill mb-3"
                required
                onChange={imghandleSubmit1}
              />
            </div>
            {/* Image 1 */}
            <div>
              <input
                type="text"
                name="img1"
                placeholder=""
                className="form-control text-center   rounded-pill mb-3"
                id="img1"
                value={img1}
                onChange={setFood}
                required
              />
            </div>

                  <li>
                     {/* Base64 2 */}
            <div>
              <input
                type="file"
                className="form-control text-center   rounded-pill mb-3"
                required
                onChange={imghandleSubmit2}
              />
            </div>
            {/* Image 2*/}
            <div>
              <input
                type="text"
                name="img2"
                placeholder=""
                className="form-control text-center   rounded-pill mb-3"
                id="img2"
                value={img2}
                onChange={setFood}
                required
              />
            </div>
                  </li>

                  <li>
                    
                  </li>
                </ul>
              </div>


            {/* fit */}
            <div className=" mb-2">
              <select
                className="form-control p-2 rounded-pill"
                aria-label="Default select example"
                placeholder="Fit"
                type="text"
                name="fit"
                onChange={setFood}
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
                className="form-control rounded-pill"
                id="price"
                required
                onChange={setFood}
              />
            </div>
            {/*  Rating */}
            <div>
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                className="form-control rounded-pill"
                id="rating"
                required
                onChange={setFood}
              />
            </div>
            {/*  offer */}
            <div>
              <input
                type="number"
                name="offer"
                placeholder="offer"
                className="form-control rounded-pill p-2"
                id="offer"
                required
                onChange={setFood}
              />
            </div>
            {/* submit Button */}
            <button
              type="submit"
              className="btn btn-danger   rounded-pill p-2 fw-bold"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Edit FoodList function
export function EditProduct() {
  // state management
  const { id } = useParams();
  const [food, setFood] = useState(null);

  // edit food api call
  const editFood = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/products/${id}`);
      setFood(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect use refresh data
  useEffect(() => {
    editFood();
  });

  return (
    <div className="container">
      {food ? (
        <EditFoodForm food={food} />
      ) : (
        <div className="progress mt-3">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "75%" }}
          ></div>
        </div>
      )}
    </div>
  );
}

// Edit Food list form function
export function EditFoodForm({ food }) {
  // navigate to page
  const navigate = useNavigate();
  
  // image
  // state management
  const [base64code, setbase64code] = useState("");
  const [image, setImage] = useState("");

  // image handle function
  const imghandleSubmit = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  // image file converted to string
  const onLoad = (fileString) => {
    setImage(fileString);
    setbase64code = fileString;
  };

  // image file reader
  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };


  // image1
  // state management
  const [base64code1, setbase64code1] = useState("");
  const [img1, setImg1] = useState("");

  // image handle function
  const imghandleSubmit1 = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  // image file converted to string
  const onLoad1 = (fileString) => {
    setImg1(fileString);
    setbase64code1 = fileString;
  };

  // image file reader
  const getBase641 = (file) => {
    let reader1 = new FileReader();
    reader1.readAsDataURL(file);
    reader1.onload = () => {
      onLoad1(reader1.result);
    };
  };


  // image2
  // state management
  const [base64code2, setbase64code2] = useState("");
  const [img2, setImg2] = useState("");

  // image handle function
  const imghandleSubmit2 = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  // image file converted to string
  const onLoad2 = (fileString) => {
    setImg2(fileString);
    setbase64code = fileString;
  };

  // image file reader
  const getBase642 = (file) => {
    let reader2 = new FileReader();
    reader2.readAsDataURL(file);
    reader2.onload = () => {
      onLoad2(reader2.result);
    };
  };

  // state management
  const [name, setName] = useState(food.name);
  const [img, setImg] = useState(food.img);
  const [fit,setFit]  = useState(food.fit);
  const [desc, setDesc] = useState(food.desc);
  const [price, setPrice] = useState(food.price);
  const [rating, setRating] = useState(food.rating);
  const [offer, setOffer] = useState(food.offer);
  const [img3, setImg3] = useState(food.img3);
  const [img4, setImg4] = useState(food.img4);

  // edit food update form and api call
  const edit = () => {
    const update = {
      name: name,
      img: img,
      img1: img3,
      img2: img4,
      desc: desc,
      fit: fit,
      price: price,
      rating: rating,
      offer: offer,
    };
    fetch(`${API_URL}/products/${food._id}`, {
      method: "PUT",
      body: JSON.stringify(update),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/productlist"));
  };

  return (
    <div className="container">
  
      <div className="row justify-content-center m-2 mt-5 mx-auto gap-3">
        <div className="col-sm-4 col-md-6 col-lg-4 p-3 rounded-3 shadow-lg p-4 mx-auto">
          <h5 className="text-center bg-warning rounded-5 p-2">Edit </h5>
          {/* name */}
          <input
            className="mt-2 form-control rounded-pill"
            value={name}
            type="text"
            placeholder="name"
            onChange={(event) => setName(event.target.value)}
          />
          {/* image file */}
          <input
            className="mt-2 form-control rounded-pill"
            type="file"
            onChange={imghandleSubmit}
          />
          {/* iamge link */}
          <input
            className="mt-2 form-control rounded-pill"
            value={image}
            type="text"
            placeholder="Image"
            onChange={(event) => setImg(event.target.value)}
          />
          {/* description */}
          <input
            className="mt-2 form-control rounded-pill"
            value={desc}
            type="text"
            placeholder="Description"
            onChange={(event) => setDesc(event.target.value)}
          />
          {/* price */}
          <input
            className="mt-2 form-control rounded-pill"
            value={price}
            type="number"
            placeholder="Price"
            onChange={(event) => setPrice(event.target.value)}
          />
          {/* rating */}
          <input
            className="mt-2 form-control rounded-pill"
            value={rating}
            type="number"
            placeholder="Rating"
            onChange={(event) => setRating(event.target.value)}
          />
          {/* offer */}
          <input
            className="mt-2 form-control rounded-pill"
            value={offer}
            type="number"
            placeholder="offer"
            onChange={(event) => setOffer(event.target.value)}
          />
          {/* submit button */}
          <button
            className="btn btn-danger rounded-pill fw-bold mt-2 form-control"
            onClick={edit}
          >
            UPDATE
          </button>
        </div>
        <div className="col-sm-4 col-md-6 col-lg-6 mx-auto">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/dfe73269796077.5b8e2a3fc5deb.gif"
            className="w-100"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}