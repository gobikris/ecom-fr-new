import React from "react";
import { useNavigate } from "react-router-dom";


export default function Credit() {

  const navigate  = useNavigate()
    
  return (
    <div>
       
      <div className="container text-center mt-3">
        {/* gif */}
        <img
          src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif"
          className="img-fluid rounded-circle" 
          alt=""
          
        />
        <h1 className="text-success">Transactions Completed 👍</h1>
       
        <i class="fa fa-2x fa-archive mb-2 text-danger" aria-hidden="true">Order Placed</i><br />
       
        
        <div className="card border-0 mx-auto cur" style={{width: "11rem"}}>
          <img src="https://i.gifer.com/8grL.gif" onClick={()=>navigate("/myorders")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text fw-bold text-primary">My Orders</p>
      </div>
    </div>

      </div>
    </div>
  );
}
