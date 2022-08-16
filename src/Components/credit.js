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
        <i class="fa fa-2x fa-arrow-down" aria-hidden="true"></i><br />
        <i class="fa fa-2x fa-archive mb-2 text-danger" aria-hidden="true">Order Placed</i><br />
        <i class="fa fa-home fa-3x hand" aria-hidden="true" onClick={()=>navigate("/myorders")}></i>
        
      </div>
    </div>
  );
}
