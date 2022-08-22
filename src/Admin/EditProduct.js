import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../auth.service/auth.service";
import toast from "react-hot-toast";



// Edit Product

export function EditProduct() {
  // state management
  const { id } = useParams();
  const [Eproduct, setEproduct] = useState(null);

  // edit 
  const editPro = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/products/${id}`);
      setEproduct(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect use refresh data
  useEffect(() => {
    editPro();
  });

  return (
    <div className="container">
      {Eproduct ? (
        <EditForm pro={Eproduct} />
      ) : (
        <div className="mt-3">

          <div className="mt-5">
            <div className="row mt-5">

              {/* loader */}
              
              <div className="col text-center mt-5">
                <div class="spinner-grow text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-secondary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-success" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-danger" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-warning" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-info" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-light" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-dark" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

// Edit  function

export function EditForm({ pro }) {
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
  const [image1, setImage1] = useState("");

  // image handle function
  const imghandleSubmit1 = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase641(file);
  };

  // image file converted to string
  const onLoad1 = (fileString) => {
    setImage1(fileString);
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
  const [image2, setImage2] = useState("");

  // image handle function
  const imghandleSubmit2 = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase642(file);
  };

  // image file converted to string
  const onLoad2 = (fileString) => {
    setImage2(fileString);
    setbase64code2 = fileString;
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
  const [name, setName] = useState(pro.name);
  const [img, setImg] = useState(pro.img);
  const [img1, setImg1] = useState(pro.img1);
  const [img2, setImg2] = useState(pro.img2);
  const [fit, setFit] = useState(pro.fit);
  const [desc, setDesc] = useState(pro.desc);
  const [price, setPrice] = useState(pro.price);
  const [rating, setRating] = useState(pro.rating);
  const [offer, setOffer] = useState(pro.offer);


  // edit 
  const edit = () => {
    const update = {
      name: name,
      img: img,
      img1: img1,
      img2: img2,
      desc: desc,
      fit: fit,
      price: price,
      rating: rating,
      offer: offer,
    };
    fetch(`${API_URL}/products/${pro._id}`, {
      method: "PUT",
      body: JSON.stringify(update),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/productlist"));
    toast.success("Product Updated");
  };

  return (
    <div className="container">

      <div className="row justify-content-center m-2 mt-5 mx-auto gap-3">
        <div className="col-sm-4 col-md-6 col-lg-4 p-3 rounded-3 order shadow-lg p-4 mx-auto">
          <h5 className="text-center bg-warning rounded-5 p-2 fw-bold">EDIT PRODUCT </h5>
          {/* name */}
          <input
            className="mt-2 form-control rounded-pill"
            value={name}
            type="text"
            placeholder="Product Name"
            onChange={(event) => setName(event.target.value)} />

          {/* description */}

          <input
            className="mt-2 form-control rounded-pill"
            value={desc}
            type="text"
            placeholder="Description"
            onChange={(event) => setDesc(event.target.value)} />


          <div className="btn-group mb-2 mt-2 w-100">
            {/* dropdown btn  */}
            <button
              type="button"
              className="btn btn-outline-white bg-white border-0  rounded-pill p-2 text-start"
              data-bs-toggle="dropdown"
              aria-expanded="false"> Images
            </button>

            <ul className="dropdown-menu p-3">
              {/* image  */}
              {/* ----------------------------------------------------------- */}
              <li className="mb-4">
                {/* image file */}
                <input
                  className="mt-2 form-control rounded-pill "
                  type="file"
                  onChange={imghandleSubmit} />

                {/* iamge link */}

                <input
                  className="mt-2 form-control rounded-pill"
                  value={image}
                  type="text"
                  placeholder="Image"
                  onChange={(event) => setImg(event.target.value)} /></li>

              {/* end */}
              {/* ----------------------------------------------------------- */}
              {/* image file 1*/}
              <li className="mb-4">
                <input
                  className="mt-2 form-control rounded-pill"
                  type="file"
                  onChange={imghandleSubmit1} />

                {/* iamge link 1*/}

                <input
                  className="mt-2 form-control rounded-pill"
                  value={image1}
                  type="text"
                  placeholder="Image"
                  onChange={(event) => setImg1(event.target.value)} />
              </li>
              {/* ----------------------------------------------------------- */}
              <li className="mb-3">
                {/* image file 2*/}

                <input
                  className="mt-2 form-control rounded-pill"
                  type="file"
                  onChange={imghandleSubmit2} />

                {/* iamge link 2*/}

                <input
                  className="mt-2 form-control rounded-pill"
                  value={image2}
                  type="text"
                  placeholder="Image"
                  onChange={(event) => setImg2(event.target.value)} />
              </li>
            </ul>
          </div>


          {/* ----------------------------------------------------------- */}

          {/* fit */}
          <div className=" mb-2">
            <select
              className="form-control p-2 rounded-pill"
              aria-label="Default select example"
              placeholder="Fit"
              type="text"
              name="fit"
              onChange={(event) => setFit(event.target.value)}
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

          {/* price */}

          <input
            className="mt-2 form-control rounded-pill"
            value={price}
            type="number"
            placeholder="Price"
            onChange={(event) => setPrice(event.target.value)} />

          {/* rating */}

          <input
            className="mt-2 form-control rounded-pill"
            value={rating}
            type="number"
            placeholder="Rating"
            onChange={(event) => setRating(event.target.value)} />

          {/* offer */}

          <input
            className="mt-2 form-control rounded-pill"
            value={offer}
            type="number"
            placeholder="offer"
            onChange={(event) => setOffer(event.target.value)} />

          {/* submit button */}

          <button
            className="btn btn-danger rounded-pill fw-bold mt-2 form-control"
            onClick={edit}
          >
            UPDATE
          </button>
        </div>

      </div>
    </div>
  );
}
