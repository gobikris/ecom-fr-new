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
      <div className="d-flex rounded-pill p-2 justify-content-center shadow-lg order ">
        
        <h1 className="text-danger fw-bold mx-auto ">DASHBOARD</h1>
      
      <img className="img-fluid hand rounded-pill " onClick={SignOut} style={{width:"4rem"}} src="https://cdn.dribbble.com/users/1797873/screenshots/5310497/logout.gif" alt="" />
      
      </div>
      <div className='justify-content-end mt-3'></div>
      
     
      <div className="row">
      
        <div className="col-lg-5 col-md-12 col-12">
          
          <img className="img-fluid"
            src='https://static.hyperlinkinfosystem.co.uk/frontend/img/home/home-banner/web-development-company.svg'
            // src="https://www.geneticwebtechnologies.com/images/Analysis-Animation.gif "
            alt=""
          />
        </div>
        <div className="col-lg-5 col-md-12 col-12  ms-auto">
          
          {/* Add Product btn */}
          
          <div className="d-flex gap-5 mt-5 ">
            <div className="card hand border-0 shadow-lg bg-primary mx-auto" style={{width: "14rem"}}>
              <img src="https://i.gifer.com/3qDI.gif" onClick={() => navigate("/addproduct")} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text text-center fw-bold  text-light ">Add Product</p>
               </div>
            </div>

          {/* Users Btn */}

            <div className="card hand border-0 shadow-lg bg-dark mx-auto" style={{width: "14rem"}}>
              <img src="https://i.pinimg.com/originals/91/7c/06/917c06856035dd3d396b62916d082472.gif" onClick={()=>navigate("/users")} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text text-center fw-bold text-light">Users Info</p>
               </div>
            </div>
           
          </div>
          
          
          <div className="d-flex gap-5 mt-5">

        {/* Order List */}

          <div className="card hand border-0 shadow-lg bg-danger mx-auto" style={{width: "14rem"}}>
              <img src="https://i.gifer.com/8grL.gif" onClick={()=>navigate("/orders")} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text text-center fw-bold text-light" >Order List</p>
               </div>
            </div>

        {/* Product List */}

              <div className="card hand border-0 shadow-lg bg-success mx-auto" style={{width: "14rem"}}>
              <img src="https://i.pinimg.com/originals/78/0e/82/780e82a59775c95c72df27c9d8e1bb74.gif" onClick={()=>navigate("/productlist")} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text text-center fw-bold text-light">Product List</p>
               </div>
            </div>
             
          </div>
          
          
        </div>
      </div>
      
    </div>
  );
}


{/* <div className='mt-5'>
          <img src="https://drive.google.com/file/d/1G8spJx01oVHRd4DAf3PwGYHpryDbriVN/view?usp=sharing" alt="" />
          <button className="btn btn-outline-primary fw-bold btn-lg p-4 rounded-pill mb-3" onClick={() => navigate("/addproduct")}><i class="fa fa-paper-plane-o" aria-hidden="true"></i>  Add products</button>
          <button className="btn btn-outline-info  fw-bold  btn-lg p-4 rounded-pill" onClick={()=>navigate("/users")}><i class="fa fa-user-circle-o" aria-hidden="true"></i> User Info</button>
  
          <button className="btn btn-outline-danger fw-bold btn-lg p-4 rounded-pill" onClick={()=>navigate("/orders")}><i class="fa fa-file-text" aria-hidden="true"></i> Order List</button>
          <button className="btn btn-outline-success fw-bold btn-lg p-4 rounded-pill" onClick={()=>navigate("/productlist")}><i class="fa fa-list" aria-hidden="true"></i>  Product List</button>


          
          
          </div> */}