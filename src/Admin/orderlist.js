// import files
import React from "react";
import axios from "axios";
import { useState,useEffect  } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { API_URL } from './../auth.service/auth.service';

import { toast} from 'react-hot-toast';


// order List function
export default function OrderList() {
  
  // access 
  const adminToken = window.localStorage.getItem("AdminToken");
  const alogin = <h1 className="text-center fw-bold mt-5 text-danger">"Access Denied"</h1>
  
  // auth
 
  
  const navigate = useNavigate();

  // api state
  const [users, setUsers] = useState([]);

  // loader state
  const [isLoading, setIsLoading] = useState(true);

  // search state
  const [query, setQuery] = useState("");

  // getUsers Api call
  const getUsers = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/orders`, {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });
      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };


  // delete user

  const deleteOrder = async ({ _id }) => {
    if (window.confirm(`Delete this order ?`)) {
      try {
        await axios.delete(`${API_URL}/orders/${_id}`,{
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        });
        toast.success("Order Deleted ");
        getUsers();
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  // useEffect 

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <div className="container">
      <h1 className="text-center text-primary fw-bold mb-4 mt-3"> All Orders</h1>
        <div className="d-flex gap-5  mb-5 ">
        <i className="fa fa-2x fa-arrow-left hand mt-2" aria-hidden="true" onClick={()=>navigate("/ahome")}></i>

          <input
            type="text"
            className="form-control  rounded-pill w-75 p-2  px-4"
            placeholder="Search Order"
            onChange={(event) => setQuery(event.target.value)}
          />
          {/* <p className="text-center text-danger fw-bold mx-auto">
           
          </p> */}
        </div>
        {isLoading && (
              <div className="row text-center">
              <div className="col">
              <div className="">
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

        {/* orders list */}

        <div className="row table-responsive">
          {adminToken &&(
          <table className="text-center table-success table table-hover ">
            <thead className=" ">
              <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>User Id</th>
                <th>Address</th>
                <th>Id</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            
            <tbody className="bg-light">
              {users
                .filter((g) => g.token.card.name.toLowerCase().includes(query))
                .map((u, index) => {
                  return (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{u.token.card.name}</td>
                      <td>{u.token.email}</td>
                      <td><small>{u.token.card.address_line1},{" "}
                        {u.token.card.address_city}, {u.token.card.address_zip}</small>
                        
                      </td>
                      
                      <td>{u._id}</td>
                      <td>
                        {u.date}
                      </td>
                      <td>{u.time}</td>
                      <td className="text-danger fw-bold">{u.status}</td>
                      <td>{u.total}</td>
                      <td className="d-flex flex-column gap-2">

                        {/* order edit */}
                       
                         <i class="fa size fa-pencil hand" aria-hidden="true"  onClick={() =>
                            navigate("/editOrderList/edit/" + u._id)
                          }></i>
                       
                        {/* order info */}
                       
                          <i class="fa size fa-info-circle hand" aria-hidden="true" onClick={() => navigate("/orders/" + u._id)}></i>
                        
                        {/* order delete */}
                        
                          <i class="fa size fa-trash-o hand" aria-hidden="true" onClick={() => deleteOrder(u)}></i>
                       
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>)}
          {!adminToken && alogin}
        </div>
      </div>
    </div>
  );
}

// user individual orders Information
export function OrdersInfo() {
  
  const adminToken = window.localStorage.getItem("AdminToken");
  const navigate = useNavigate();

  // state management
  const { id } = useParams();
  const [orders, setOrders] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // get order
  const getOrderInfo = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/orders/${id}`,{
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });
      setOrders(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect 
  useEffect(() => {
    getOrderInfo();
  }, [id]);

  return (
    <div className="container">
 
      {isLoading && (
        <div className="row text-center">
          <div className="col">
        <div className=" mt-3">
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
      <div className="d-flex flex-column">
      <i class="fa size fa-arrow-left mt-3 cur" aria-hidden="true" onClick={()=>navigate("/orders")}></i>
      <h1 className="text-center text-danger fw-bold mt-3">
        Orders Info
      </h1>
      </div>
      
      {/* order info table */}
      <div className="row table-responsive mt-5">
        <table className="text-center table table-hover table-danger">
          <thead className=" ">
            <tr>
              <th>Product Image</th>
              <th>Id</th>
              <th>Product Name</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Average</th>
            </tr>
          </thead>
          <tbody>
            {orders.product &&
              orders.product.map((p, index) => {
                return (
                  <tr>
                    <td><img src={p.img.url} style={{width:"80px"}} alt="" /></td>
                    <td>{p._id}</td>
                    <td>{p.name}</td>
                    <td>{p.size}</td>
                    <td>{p.price}</td>
                    <td>{p.quantity}</td>
                    <td>{p.price * p.quantity}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Edit 
export function EditOrderList() {
  const adminToken = window.localStorage.getItem("AdminToken");
  // state management
  const { id } = useParams();
  const [orders, setOrders] = useState(null);

  // edit orders & api call
  const editOrders = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/orders/${id}`,{
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });
      setOrders(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect use refresh data
  useEffect(() => {
    editOrders();
  }, []);

  return (
    <div className="container">
      {orders ? (
        <EditOrderForm orders={orders} />
      ) : (
        <div className="text-center mt-3">
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
      )}
    </div>
  );
}

// Edit order form function
export function EditOrderForm({ orders }) {
  const adminToken = window.localStorage.getItem("AdminToken");
  // navigate to page
  const navigate = useNavigate();

  // state management
  const [userId, setUserId] = useState(orders.userId);
  const [token, setToken] = useState(orders.token);
  const [product, setProduct] = useState(orders.product);
  const [total, setTotal] = useState(orders.total);
  const [status, setStatus] = useState(orders.status);

  // edit order details & api call
  const edit = async () => {
    const update = {
      userId: userId,
      token: token,
      product: product,
      total: total,
      status: status,
    };

    try {
      await axios.put(`${API_URL}/orders/${orders._id}`,update,{
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });
      navigate("/orders");
      toast.success("Status Updated")
    } catch (error) {
      console.log(error.message);
    }

  };

  return (
    <div className="container">
      
      <div className="row justify-content-center m-2 mt-5 mx-auto gap-3">
        <div className="col-sm-4 col-md-6 col-lg-4 p-3 rounded-3 order shadow-lg p-4 mx-auto text-center">
          <h5 className="text-center bg-warning rounded-pill p-2 fw-bold">TRACKING</h5>
          <img
            src="https://i.pinimg.com/originals/c0/10/de/c010de3f478611b2c745d78497d0428e.gif"
            className="rounded-5"
            style={{width:"200px"}}
            alt=""
          />

 
          {/* status */}
          <select
            className="mt-3 form-control  p-3"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option>order placed</option>
            <option>Wait for PickUp</option>
            <option>Order Shipped</option>
            <option>Out for Delivery</option>
            <option>Delivered</option>
          </select>
          {/* submit */}
          <button
            className="btn btn-outline-success fw-bold mt-3 rounded-pill p-3 form-control "
            onClick={edit}
          >
            SEND STATUS
          </button>
        </div>
        
      </div>
    </div>
  );
}