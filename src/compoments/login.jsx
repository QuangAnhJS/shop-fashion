import React, { useState } from "react";
import { Link } from "react-router-dom";
import End from "./end";
import img from "../assets/img/king.jpg";
import axiosInstance from "../axios";
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post("/api/user/login", {
        email: input.email,
        password: input.password,
      });
      if (response.data.status === "success") {
       localStorage.setItem("token",response.data.access_token);
       localStorage.setItem("Role",response.data.Role);

        window.location.reload();
      }
    } catch (error) {
      setError(error.response.data.message);
    }
    // xử lý tiếp theo sau khi đăng nhập thành công
  };

  return (
    <div>
      <div className="">
        <div className="container">
          <div className="row">
            <Link to={"/"}>
              <h1
                className="fs-2 mt-3"
                style={{ color: "black", fontSize: "25px" }}
              >
                Fashion King Men
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#efefef" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-5 mt-5" style={{ textAlign: "center" }}>
              <img
                src={img}
                alt=""
                style={{ borderRadius: "50%", width: "50%" }}
              />
              <h4>
                Nền tảng thương mại điện tử yêu thích nhất Đông Nam Á & Việt Nam
              </h4>
            </div>
            <div className="col-md-7">
              <form
                className="m-5 p-3"
                style={{ backgroundColor: "white" }}
                onSubmit={handleLogin}
              >
                <h3 style={{ fontWeight: "bold" }}>Đăng nhập</h3>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={input.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                  />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button
                  className="col-12 p-2 mt-3"
                  style={{
                    backgroundColor: "black",
                    border: "none",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  type="submit"
                >
                  Đăng nhập
                </button>
                <p className="mt-2">Quên mật khẩu</p>
                <h5 style={{ textAlign: "center" }}>
                  Bạn mới biết đến Fashion King Men?
                  <span className="text-danger">
                    <Link to={"/Register"}>Đăng ký </Link>
                  </span>
                </h5>
              </form>
            </div>
          </div>
        </div>
      </div>
      <End></End>
    </div>
  );
};
export default Login;
