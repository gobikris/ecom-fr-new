// import files
import React, { useEffect,useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../auth.service/auth.service";

// my orders page
export default function MyOrders() {
  // authToken
  const authToken = window.localStorage.getItem("authToken");

  // navigate to page
  const navigate = useNavigate();

  // user state 
  const [myOrders, setMyOrders] = useState([]);

  // Search orders
  const [query, setQuery] = useState("");

  //  Loading 
  const [isLoading, setIsLoading] = useState(true);

  // api
  const getUserById = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/orders/userId/userId`,
      {
        headers: { Authorization:`Bearer ${authToken}`}
      }
  );
      setMyOrders(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  // useEffect
  useEffect(() => {
    getUserById();
  }, []);

  return (
    <div className="">
      <div className="container mt-4 ">
        <h1 className="text-center text-primary fw-bold mb-4">My Orders</h1>
        <div className="d-flex gap-5 justify-content-center mb-2 ">
         
          <i
            className="fa fa-2x fa-arrow-left hand mt-2"
            aria-hidden="true"
            onClick={() => navigate("/")}
          ></i>

          <input
            type="text"
            className="form-control  rounded-pill w-75 p-2  px-4"
            placeholder="Search Order"
            onChange={(event) => setQuery(event.target.value)}
          />
          <p className="text-center text-danger fw-bold mx-auto"></p>
        </div>
        {/* My orders Card */}
        <div className="row ">
          {isLoading && (
            <div className="mt-5">
              <div className="row mt-5 ">
                <div className="col text-center mt-5">
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
                  <div className="spinner-grow text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="spinner-grow text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
            
          {myOrders
            .filter((g) => g._id.includes(query))
            .map((g, index) => {
              const { _id, date, time, total, status } = g;
              
              return (
                <>
                
                  <div className="col-lg-4 col-md-6 mt-5 ">
                    <div
                      className="card order hand border-0 shadow-lg rounded-4 cur mx-auto"
                      style={{ width: "18rem" }}
                      onClick={() => navigate("/MyOrderInfo/" + g._id)}
                    >
                      <div className="card-body  rounded-4">
                        <h5 className="card-title bg-success text-light rounded-pill text-center">
                          Orders{" "}
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {index + 1}
                            <span className="visually-hidden">unread messages</span>
                          </span>
                        </h5>
                        <hr />
                        
                        <div className="text-start">
                          <p className="card-text fw-bold">
                            Id:- <span>{_id}</span>
                          </p>
                          <p className="card-text fw-bold">
                            Date :- <span>{date}</span>
                          </p>
                          <p className="card-text fw-bold">
                            Time :- <span>{time}</span>
                          </p>
                          <p className="card-text fw-bold">
                            Amount Paid :- <span>{total}</span>
                          </p>
                          <p className="card-text fw-bold">
                            Status :- <span>{status}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}

// order info
export function UserOrdersInfo() {
  
  const authToken = window.localStorage.getItem("authToken");
  // navigate to page
  const navigate = useNavigate();

  // state management
  const { id } = useParams();
  const [orders, setOrders] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // get order info
  const getOrderInfo = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/orders/${id}`,{
        headers: { Authorization: `Bearer ${authToken}` }
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
      {/* order info table */}
      <div className="row  table-responsive">
        <i
          class="fa size cur fa-arrow-left mt-5 text-danger"
          aria-hidden="true"
          onClick={() => navigate("/myorders")}
        ></i>
        <h1 className="text-center text-primary fw-bold mb-3">Order Info</h1>

        {/* loader */}
        {isLoading && (
          <div className="mt-5 table-responsive">
            <div className="row mt-5 text-center table-responsive">
              <div className="col  ">
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
        <table className="text-center table table-hover ">
          <thead className="bg-dark  text-light">
            <tr>
              <th>S.No</th>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Size</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {orders.product &&
              orders.product.map((p, index) => {
                return (
                  <tr>
                    <td>{index+1}</td>
                    <td>{p._id}</td>
                    <td>
                      <img src={p.img.url} style={{ width: "60px" }} alt="" />
                    </td>
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
// -------------------------------------
