import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from "react-hot-toast"
import { API_URL } from '../auth.service/auth.service';


export default function ProductList() {

    const [state,setState] = useState("");

    const navigate = useNavigate();

    const [productList, setProductList] = useState([]);

    // get all productList
    const getProductList = async () =>{
        try {
            const {data} = await axios.get(`${API_URL}/products`);
            setProductList(data);
           console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    // delete productList
    const deleteProductList = async ({name,_id})=>{
        if(window.confirm(`if you delete ${name}`)){
            try {
                await axios.delete(`${API_URL}/products/${_id}`,{_id});
                toast.success("Products is deleted")
                getProductList();
            } catch (error) {
                console.log(error.message);
            }
        }
    };
    useEffect(()=>{
        getProductList();
       
    },[]);


  return (
    <div>
      <div className="container mt-2">
      <h1 className="text-center text-primary fw-bold mx-auto mb-3">
            Product List
          </h1>
      <div className="d-flex gap-5 justify-content-center mb-2 ">
        <i className="fa fa-2x fa-arrow-left hand mt-2" aria-hidden="true" onClick={()=>navigate("/ahome")}></i>

          <input
            type="text"
            className="form-control  rounded-pill w-75 p-2  px-4 mb-3"
            placeholder="Search Order"
            onChange={(event) => setState(event.target.value)}
          />
          <p className="text-center text-danger fw-bold mx-auto">
           
          </p>
        </div>
        
        
     
      <div className="row table-responsive ">
        <table className="text-center table table-hover table-primary ">
          <thead className="">
            <tr>
              <th>Image</th>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Offer</th>
              <th>FIT</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="bg-light">
            {productList
              .filter((g) => g.name.toLowerCase().includes(state))
              .map((p, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={p.img} alt={p.name} className="img-fluid" style={{width:"80px"}} />
                    </td>
                    <td>{p._id}</td>
                    <td >{p.name}</td>
                    <td>{p.price}</td>
                    <td>{p.rating}</td>
                    <td>{p.offer}</td>
                    <td>{p.fit}</td>
                    <td><small>{p.desc} </small></td>
                    <td>
                      
                      <div className="d-flex gap-3 justify-content-between">
                      <i className="fa fa-2x fa-pencil text-primary hand" aria-hidden="true" onClick={() => navigate("/editproduct/"+p._id)}></i>
                      <i className="fa fa-2x fa-trash text-danger hand" aria-hidden="true" onClick={() => deleteProductList(p)}></i>
                      </div>
                      
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}
