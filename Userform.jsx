import React, { useState } from "react";
import { Login } from "../features/Authentication/Login";
import { SignUp } from "../features/Authentication/SignUp";

export const UserForm = () => {
  const [load, setLoad] = useState(false);

  return (
   <div className="container h-100 m-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            {/* Buttons */}
            <div className="text-center mb-4">
              <button className="col-2 btn btn-secondary"
                onClick={() => setLoad(true)}>Sign Up
              </button>
              <button
                className="col-2 btn btn-primary"
                onClick={() => setLoad(false)}
              > Login
              </button>
            </div>

            {/* Card Section */}
            <div className="col-lg-10 col-xl-10">
              <div
                className="card text-black shadow"
                style={{ borderRadius: "20px" }}
              >
                <div className="card-body p-md-5">
                  <div className="row align-items-center">
                <div className="col-md-6 col-lg-6 order-1 order-lg-1">
                      {load ? <SignUp /> : <Login />}
                    </div>
                    <div className="col-md-6 col-lg-6 order-2 order-lg-2 text-end">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        alt="Sample image"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
   
  );
};

