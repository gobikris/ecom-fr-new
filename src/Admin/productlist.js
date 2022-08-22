import axios from 'axios';
import React,{ useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast"
import { API_URL } from '../auth.service/auth.service';




export default function ProductList() {

    // access
    const adminToken = window.localStorage.getItem("AdminToken");
    const alogin = <h1 className="text-center fw-bold mt-5 text-danger">"Access Denied"</h1>

    // search state
    const [state,setState] = useState("");

    // navigate to page
    const navigate = useNavigate();

    // productlist state
    const [productList, setProductList] = useState([]);

    // loader state
    const [isLoading, setIsLoading] = useState(true);

    
    // get all productList
    const getProductList = async () =>{
        try {
            const {data} = await axios.get(`${API_URL}/products`);
            // api state
            setProductList(data);
            // loader
            setIsLoading(false);
        } catch (error) {
            console.log(error.message);
        }
    };

    // delete productList
    const deleteProductList = async ({name,_id})=>{
        if(window.confirm(`if you delete ${name}`)){
            try {
                await axios.delete(`${API_URL}/products/${_id}`,{_id});
                
                // toast
                toast.success("Products is deleted")

                // api function
                getProductList();
            } catch (error) {
                console.log(error.message);
            }
        }
    };

    // useEffect
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
        
        {isLoading && (
        <div className="mt-5">
          <div className="row mt-5">
            <div className="col text-center mt-5">

              {/* loader */}

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
      )}

     {adminToken &&(
      <div className="row table-responsive ">
      
        <table className="text-center table table-hover table-primary ">
          
          <thead className="">
            <tr>
              <th>S.No</th>
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
                    <td>{index+1}</td>
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
      </div>)}
      

      
      </div>
      {!adminToken && alogin}
    </div>
  );
}
