import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const UserDetails = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/users");
  const handleEditClick = () => navigate("/users/edit");

  // loading state
  const [isLoading, setIsLoading] = useState(true);
  // successful state
  const [user, setUser] = useState({});
  //error state
  const [isError, setIsError] = useState(false);
  //reading URL param (userId) through react-router-dom
  const { userId } = useParams();

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        console.log(response);
        setUser(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchUserById();
  });

  const handleDeleteButtonClick = async () => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      console.log(response);
      toast.success("User deleted successfully");
      setTimeout(() => {
        navigate("/users");
      }, 6000);
    } catch (err) {
      console.log(err);
      toast.error("Unable to delete user. Try again later");
      setIsError(true);
    }
  };

  return (
    <div className="row mt-2">
      <h2>
        <span>View User Details</span>
      </h2>
      <div className="col-md-12">
        <button className="btn btn-dark" onClick={handleClick}>
          Go Back
        </button>

        {isLoading && (
          <div className="text-center">
            <div className="spinner spinner-border"></div>
          </div>
        )}

        {isError && (
          <div className="text-center">
            <div className="alert alert-danger">
              Some Error occured.Try again later!
            </div>
          </div>
        )}

        <div className="card mt-2">
          <div className="card-header">
            You are viewing details of User Id: {user.id}
          </div>
          <div className="card-body">
            <h5 className="card-title">Name: {user.name}</h5>
            <p className="card-text">Email: {user.email}</p>
            <p className="card-text">Phone: {user.phone}</p>
            <button 
            className="btn btn-primary" 
            onClick={handleEditClick}>
              Edit
            </button>
            <button
            className="btn btn-outline-danger"
            onClick={handleDeleteButtonClick}>
              Delete
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default UserDetails;
