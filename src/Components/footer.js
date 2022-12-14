import React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="container-fluid  p-2 text-dark text-center mt-5">
      <div className="row p-2">
        {/* Loaction */}
        <div className="col shadow">
          <h3>LOCATION</h3>
          <p className="text-dark ">
            support@clothes.in <br />
            North steert,  Main <br /> Road (NH 8 - Near Mahadev
            Hotel) <br />
            Tamilnadu, India 600001
          </p>
        </div>
       
        {/* Need help */}
        <div className="col shadow">
          <h3>NEED HELP</h3>
          {/* <Link to="/contact" className="text-decoration-none">Contact Us</Link> */}
          <p>info@clothes.in</p>
          <br />
          <Link to="/return" className="text-decoration-none">Return, Refund and Cancellation</Link>
         
        </div>
       
      </div>
    </div>
  );
}

{/* <input
            className="mt-2 form-control"
            value={userId}
            type="text"
            placeholder="userId"
            onChange={(event) => setUserId(event.target.value)} />
          
          <input
            className="mt-2 form-control"
            value={token}
            type="text"
            placeholder="token"
            onChange={(event) => setToken(event.target.value)} />
          
          <input
            className="mt-2 form-control"
            value={product}
            type="text"
            placeholder="Product"
            onChange={(event) => setProduct(event.target.value)} />
          
          <input
            className="mt-2 form-control"
            value={total}
            type="number"
            placeholder="Total"
            onChange={(event) => setTotal(event.target.value)} />  */}