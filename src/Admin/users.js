import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"
import { API_URL } from "../auth.service/auth.service";



// All user List
export default function UserList() {
  
  // access
  const adminToken = window.localStorage.getItem("AdminToken");
  const alogin = <h1 className="text-center fw-bold mt-5 text-danger">"Access Denied"</h1>


  const navigate = useNavigate();

  // users state 
  const [users, setUsers] = useState([]);

  // search state
  const [find, setFind] = useState("");

  // loader state
  const [isLoading, setIsLoading] = useState(true);

 
  // get users details
  const getUsers = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/users`);
      setUsers(data);
      setIsLoading(false);
      
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // delete user 
  const deleteUser = async ({fullname, _id}) => {
    if (window.confirm(`Delete this user ${fullname}`)) {
        try {
            await axios.delete(`${API_URL}/users/${_id}`, {_id});
            toast.success(`${fullname} Deleted `);
            getUsers();
        } catch (error) {
            console.log(error.message);
        }
    }
  }

  return (
    <div>
      <div className="container mt-3">
      <h1 className="text-center text-primary fw-bold mx-auto mb-3">
            Users List
          </h1>
      <div className="d-flex gap-5 justify-content-center mb-2 ">
        <i className="fa fa-2x fa-arrow-left hand mt-2" aria-hidden="true" onClick={()=>navigate("/ahome")}></i>

          <input
            type="text"
            className="form-control  rounded-pill w-75 p-2  px-4 mb-3"
            placeholder="Search Order"
            onChange={(event) => setFind(event.target.value)}
          />
          <p className="text-center text-danger fw-bold mx-auto">
           
          </p>
        </div>

      {adminToken && (
        <div className="row table-responsive">
          
          <table className="text-center table table-hover ">
            <thead className="table-success text-dark ">
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Id</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
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
              {users.filter((g) => g.fullname.toLowerCase().includes(find)).map((u, index) => {
                return (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{u.fullname}</td>
                    <td>{u.email}</td>
                    <td>{u.contact}</td>
                    <td>{u._id}</td>
                    <td>{u.date}</td>
                    <td >
                    <i class="fa fa-2x fa-trash  hand" aria-hidden="true" onClick={()=> deleteUser(u)}></i>

                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table> 
          
        </div>)}
        {!adminToken && alogin}
      </div>
    </div>
  );
}



    


