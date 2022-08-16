import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export default function Ahome() {
  const SignOut = () => {
    
    window.localStorage.clear();
    
    navigate("/");
    
    toast.success("Admin SignOut Successfully");
  };


  const navigate = useNavigate();
  
  return (
    <div className="container my-2 pt-2 mt-3">
      <h5 className="text-center fw-bold bg-warning p-2 rounded-3 ">DASHBOARD</h5>
      <div className='d-flex justify-content-end'><button className='btn btn-primary' onClick={SignOut}>SignOut</button></div>
      
     
      <div className="row">
      
        <div className="col-lg-5 col-md-12 col-12">
          
          <img className="img-fluid"
            src='https://static.hyperlinkinfosystem.co.uk/frontend/img/home/home-banner/web-development-company.svg'
            // src="https://www.geneticwebtechnologies.com/images/Analysis-Animation.gif "
            alt=""
          />
        </div>
        <div className="col-lg-5 col-md-12 col-12 mt-3 mx-auto">
          <div className='d-flex flex-column mt-5 gap-4 '>
          <img src="https://drive.google.com/file/d/1G8spJx01oVHRd4DAf3PwGYHpryDbriVN/view?usp=sharing" alt="" />
          <button className="btn btn-outline-primary fw-bold btn-lg p-4 rounded-pill" onClick={() => navigate("/addproduct")}><i class="fa fa-paper-plane-o" aria-hidden="true"></i>  Add products</button>
          <button className="btn btn-outline-info  fw-bold  btn-lg p-4 rounded-pill" onClick={()=>navigate("/users")}><i class="fa fa-user-circle-o" aria-hidden="true"></i> User Info</button>
          
          <button className="btn btn-outline-danger fw-bold btn-lg p-4 rounded-pill" onClick={()=>navigate("/orders")}><i class="fa fa-file-text" aria-hidden="true"></i> Order List</button>
          <button className="btn btn-outline-success fw-bold btn-lg p-4 rounded-pill" onClick={()=>navigate("/productlist")}><i class="fa fa-list" aria-hidden="true"></i>  Product List</button>


          
          
          </div>
        </div>
      </div>
      
    </div>
  );
}
