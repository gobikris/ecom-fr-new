import React from "react";
import { useNavigate,Link } from "react-router-dom";


export default function Credit() {

  const navigate  = useNavigate()
    
  return (
    <div>
       
      <div className="container text-center mt-3">
        {/* gif */}
        <img
          // src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif"
          src="http://indianinsights.in/wp-content/uploads/2021/08/payment-success.gif"
          className="img-fluid" style={{ width: "32rem" }}
          alt=""
          
        />
        <h1 className="" style={{color: "green"}}>Transactions Completed 👍</h1>
       
        <button className="btn btn-primary" onClick={()=>navigate("/myorders")} ><i className="fa fa-arrow-right" aria-hidden="true"> Go To Myorders</i></button>
        
    

      </div>
    </div>
  );
}
