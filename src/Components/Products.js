import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";

import { API_URL } from "../auth.service/auth.service";
import Navbar from "./Navbar";

// this is the map for all products

export default function Products() {
  const [state,setState] = useState("");
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const getProducts = async () => {
    
    try {
      const authToken = window.localStorage.getItem("authToken");
      const { data } = await axios.get(`${API_URL}/products`,{
          headers: { Authorization: `Bearer${authToken}`}
      });

      setList(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <div className="container-fluid">
      <Navbar />
      <div className="d-flex justify-content-between mx-3 mt-4">
        <input
          type="text"
          className="form-control w-75 p-2 rounded-pill"
          placeholder="Search"
          onChange={(event) => setState(event.target.value)}
        />

        <button
          className="btn brand fw-bold ms-2"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>

      <div className="row text-center mt-2 ">
        <p className=" fw-bold mb-4">All Product</p>
        {isLoading && (
          <div className="text-center mt-5">
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
            <div class="spinner-grow text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-dark" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {list.filter((g)=>g.name.toLowerCase().includes(state)).map((p)=>{
          const {name,img,price,_id} = p
          return (
            <>
           
              <div className="col-lg-4 mb-4 ">
                <div className="card border-0 text-center  hand order rounded-3 shadow mt-2 mx-auto" style={{ width: "18rem" }}>
                <img src={img} className="img-fluid pro" alt={name} onClick={(()=> navigate("/shop/"+_id))}/>
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text bg-warning rounded-pill fw-bold">
                      Rs: {price}
                    </p>
                  </div>
                </div>
                </div>
            
            </>
          );

        })}
       
      </div>
    </div>
  );
}

