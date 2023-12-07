import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

const AddUser = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/users");

  const [isCreatingUser, setIsCreatingUser] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setIsCreatingUser(true);
    axios
      .post("https://jsonplaceholder.typicode.com/users", data)
      .then((res) => {
        console.log(res);
        reset();
        toast.success("User created successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Unable to create user. Try again later");
      })
      .finally(() => {
        setIsCreatingUser(false);
      });
  };

  return (
    <div className="row">
      <h1>Add User</h1>
      <form className="col-md-4 offset-md-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="Enter Name"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name && <span className="text-danger">Name is required</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="phoneInput" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneInput"
            placeholder="Enter Phone"
            {...register("phone", {
              required: true,
              maxLength: 10,
              minLength: 6,
            })}
          />
          {errors.phone && errors.phone.type === "required" && (
            <span className="text-danger">Phone is required</span>
          )}
          {errors.phone && errors.phone.type === "maxLength" && (
            <span className="text-danger">
              Phone should be maximum 10 digits
            </span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Enter Email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && (
            <span className="text-danger">Email is required</span>
          )}
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <button
              type="submit"
              className="btn btn-primary col-12"
              disabled={isCreatingUser}
            >
              {isCreatingUser ? "Creating User..." : "Create User"}
            </button>
          </div>
          <div className="col-md-6 mb-3">
            <button className="btn btn-dark col-12" onClick={handleClick}>
              Go Back
            </button>
          </div>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default AddUser;
