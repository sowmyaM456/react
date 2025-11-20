

import { useState } from "react";
import { UserEmail, UserNameRegex, UserPassword } from "../Regex/Regex";

export const SignUp = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [errName, setErrName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  function handleData() {
    if (UserNameRegex(name)) {
      setErrName("");
    } else {
      setErrName("Kindly fill the input field");
    }

    if (UserPassword(password)) {
      setErrPassword("");
    } else {
      setErrPassword("Kindly fill the input field");
    }

    if (UserEmail(email)) {
      setErrEmail("");
    } else {
      setErrEmail("Kindly fill the input field");
    }
  }

  return (
    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      <h2 className="text-center mb-4">Sign Up</h2>
      <form className="mx-1 mx-md-4">
        {/* Name */}
        <div className="row mb-3">
          <label htmlFor="name" className="form-label fs-10">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control input-large"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <div className="text-danger">{errName}</div>
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control input-large"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <div className="text-danger">{errEmail}</div>
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control input-large"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <div className="text-danger">{errPassword}</div>
        </div>

        <label className="form-check-label" htmlFor="form2Example3">
          I agree all statements in <a href="#!">terms of service</a>
        </label>

        <button
          type="button"
          className="btn btn-primary w-100 mt-3"
          onClick={handleData}
        >
          Register
        </button>
      </form>

      <br />name: {name}
      <br />password: {password}
      <br />email: {email}
    </div>
  );
};

