import React from "react";

import axios from "axios";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast"
import { API_URL } from "../auth.service/auth.service";


// All user List
export default function UserList() {
  
  const navigate = useNavigate();
  // user details state management
  const [users, setUsers] = useState([]);

  const [find, setFind] = useState("");

  

  // get users details
  const getUsers = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/users`);
      setUsers(data);
      
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
            await axios.delete(`http://localhost:3002/users/${_id}`, {_id});
            toast.success("User Deleted");
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
      
        <div className="row ">
          
          <table className="text-center table table-hover">
            <thead className="bg-dark text-light">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Id</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.filter((g) => g.fullname.toLowerCase().includes(find)).map((u, index) => {
                return (
                  <tr key={index}>
                    <td>{u.fullname}</td>
                    <td>{u.email}</td>
                    <td>{u.contact}</td>
                    <td>{u._id}</td>
                    <td>{u.date}</td>
                    <td >
                    <i class="fa fa-2x fa-trash hand text-danger" aria-hidden="true" onClick={()=> deleteUser(u)}></i>

                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table> 
          
        </div>
      </div>
    </div>
  );
}



    


