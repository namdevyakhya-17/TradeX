import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Hero() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

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
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password || !username) {
      handleError("All fields are required");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
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
      username: "",
    });
  };

  return (
    <div className="container mb-5">
      <div className="row p-5 mt-4 text-center">
        <h1 className="fs-3">Open a free demat and trading account online</h1>
        <h5 className="mt-3 text-muted">
          Start investing brokerage free and join a community of 1.6+ crore investors and traders
        </h5>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-6">
          <img src="media/images/account_open.svg" alt="Signup-img" />
        </div>
        <div className="col-6">
          <h4>Signup Now</h4>
          <p className="text-muted">
            or track your existing application{" "}
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              Login
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter email:
              </label>
              <input
                type="email"
                value={email}
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleOnChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="username" className="form-label">
                Enter Username:
              </label>
              <input
                value={username}
                name="username"
                type="text"
                className="form-control"
                id="username"
                onChange={handleOnChange}
              />
            </div>
            <div className="mt-2">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                value={password}
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleOnChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3"
              style={{ width: "50%" }}
            >
              SignUp
            </button>
          </form>
          <p className="mt-4 fs-8">
            By proceeding, you agree to the TradeX{" "}
            <a href="" style={{ textDecoration: "none" }}>
              terms
            </a>{" "}
            &{" "}
            <a href="" style={{ textDecoration: "none" }}>
              privacy policy
            </a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Hero;
