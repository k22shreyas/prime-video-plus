import React from 'react'
 
const UserDetails = () => {
  return (
    <div className="row mt-2">
      <h2>
        <span>View User Details</span>
      </h2>
      <div className="col-md-12">
        <button type="button" className="btn btn-sm btn-outline-secondary">
          Go Back
        </button>
        <div class="card mt-2">
          <div class="card-header">You are viewing details of User Id: 1</div>
          <div class="card-body">
            <h5 class="card-title">Name: John</h5>
            <p class="card-text">Email: j@k.com</p>
            <p class="card-text">Phone: 32456785465787</p>
            <button class="btn btn-primary">Edit</button>
            <button class="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default UserDetails