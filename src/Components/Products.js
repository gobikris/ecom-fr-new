import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
import { API_URL } from "../auth.service/auth.service";
import InfoNav from "./InfoNav";






export default function Products() {

  // access 
  const authToken = window.localStorage.getItem("authToken");

  // search state
  const [state,setState] = useState("");

  // api state
  const [list, setList] = useState([]);

  // loader state
  const [isLoading, setIsLoading] = useState(true);

  // navigation state
  const navigate = useNavigate();

  // api call
  const getProducts = async () => {
    
    try {
      
      const { data } = await axios.get(`${API_URL}/products`,{
          headers: { Authorization: `Bearer${authToken}`}
      });

      setList(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
//  useEffect
  useEffect(() => {
    getProducts();
  }, []);


  return (
    <div className="container-fluid">
      <InfoNav/>
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

            {/* loader */}
            <div className="spinner-grow text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {list.map && list.filter((g)=>g.name.toLowerCase().includes(state)).map((p)=>{
          const {name,img,price,_id} = p
          return (
            <>
           
              <div className="col-lg-4 mb-4 ">
                <div className="card border-0 text-center  hand  rounded-3 shadow-lg  mt-2 mx-auto" style={{ width: "18rem" }}>
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

