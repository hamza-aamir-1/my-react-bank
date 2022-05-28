import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="container mb-5 mt-lg-5 mt-4">
      <div className="bg-primary bg-gradient text-center text-white p-2 pt-3 signupHeader">
        <div>Enter Account Details Below</div>
        <div>(All fields are required)</div>
      </div>

      <div className="container-fluid">
      <div className="row gx-5 gy-4 p-4 pb-5">

        <div className="col-md-6">
            <div className="d-flex align-items-center signup_input_box">
              <div className="signup_icon pe-2">
                <i class="bi bi-person-fill"></i>
              </div>
              <div className="form-floating w-100 signup_input">
                <input
                  type="text"
                  className="form-control rounded-0 shadow-none"
                  id="nameInput"
                  placeholder="."
                />
                <label htmlFor="nameInput" className="px-0">Full Name</label>
              </div>
            </div>
        </div>
        
        <div className="col-md-6">
            <div className="d-flex align-items-center signup_input_box">
              <div className="signup_icon pe-2">
                <i class="bi bi-credit-card-2-front-fill"></i>
              </div>
              <div className="form-floating w-100 signup_input">
                <input
                  type="number"
                  className="form-control rounded-0 shadow-none"
                  id="cnicInput"
                  placeholder="."
                />
                <label htmlFor="cnicInput" className="px-0">CNIC Number</label>
              </div>
            </div>
        </div>

        <div className="col-md-6">
            <div className="d-flex align-items-center signup_input_box">
              <div className="signup_icon pe-2">
                <i class="bi bi-bank2"></i>
              </div>
              <div className="form-floating w-100 signup_input">
                <input
                  type="number"
                  className="form-control rounded-0 shadow-none"
                  id="branchInput"
                  placeholder="."
                />
                <label htmlFor="branchInput" className="px-0">Branch Code (1 - 99)</label>
              </div>
            </div>
        </div>

        <div className="col-md-6">
            <div className="d-flex align-items-center signup_input_box">
              <div className="signup_icon pe-2">
                <i class="bi bi-person-fill"></i>
              </div>
              <div className="form-floating w-100 signup_input">
                <input
                  type="number"
                  className="form-control rounded-0 shadow-none"
                  id="accountNoInput"
                  placeholder="."
                />
                <label htmlFor="accountNoInput" className="px-0">Account Number (Length Should be 9)</label>
              </div>
            </div>
        </div>

        <div className="col-md-6">
            <div className="d-flex align-items-center signup_input_box">
              <div className="signup_icon pe-2">
                <i class="bi bi-info-circle-fill"></i>
              </div>
              <div className="form-floating w-100 signup_input">
                <select name="" id="nameInput" className="form-control rounded-0 shadow-none">
                  <option value="">Choose Account Type</option>
                  <option value="">Current</option>
                  <option value="">Saving</option>
                </select>
                <label htmlFor="nameInput" className="px-0">Choose Account Type</label>
              </div>
            </div>
        </div>

        <div className="col-md-6">
            <div className="d-flex align-items-center signup_input_box">
              <div className="signup_icon pe-2">
                <i class="bi bi-cash"></i>
              </div>
              <div className="form-floating w-100 signup_input">
                <input
                  type="number"
                  className="form-control rounded-0 shadow-none"
                  id="depositInput"
                  placeholder="."
                />
                <label htmlFor="depositInput" className="px-0">Initial Deposit Minimum 500 Rs.</label>
              </div>
            </div>
        </div>

      </div>
      </div>
    </div>
  );
};

export default Signup;
