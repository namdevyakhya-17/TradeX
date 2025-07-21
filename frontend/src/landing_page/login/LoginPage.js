import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function LoginPage() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple frontend validation
    if (!email || !password) {
      handleError("All fields are required");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        console.log("Redirecting to dashboard...");
        setTimeout(() => {
          navigate("/orders"); 
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Something went wrong, please try again.");
    }

    // Clear inputs after submit
    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <div className="row mt-5 p-5">
        <div className="col-3"></div>
        <div className="col-6">
          <h2>Login Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={email}
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={password}
                onChange={handleOnChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Login
            </button>
            <div className="mt-2">
              <span>
                Don't have an account?{" "}
                <Link to={"/signup"} style={{ textDecoration: "none" }}>
                  Signup
                </Link>
              </span>
            </div>
          </form>
          <ToastContainer />
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default LoginPage;
