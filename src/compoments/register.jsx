import React from "react";
import { Link } from "react-router-dom";
import End from "./end";
import img from "../assets/img/king.jpg";
const Register = () => {
  return (
    <div>
      <div className="">
        <div className="container">
          <div className="row">
            <h1
              className="fs-2 mt-3"
              style={{ color: "black", fontsize: "25px" }}
            >
              Fashion King Men
            </h1>
          </div>
        </div>
      </div>
      <div className="container-fluit" style={{ backgroundColor: "#efefef" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-5 mt-5" style={{textAlign:"center"}}>
              <img
                src={img}
                alt=""
                style={{ borderRadius: "50%", width: "50%" }}
              />
              <h4 >
                Nền tảng thương mại điện tử yêu thích nhất Döng Nam Á & Việt Nam
              </h4>
            </div>
            <div className="col-md-7">
              <form className="m-5 p-3" style={{ backgroundColor: "white" }}>
                <h3 style={{ fontWeight: "bold" }}>Đăng Kí</h3>
                <div className="mb-3">
                  <label
                   
                    className="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleInputEmail1"
                    className="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                   Số điện thoại
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="sdt"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleInputEmail1"
                    className="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                  />
                </div>  
                <div className="mb-3">
                  <label
                    for="exampleInputPassword1"
                    className="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    
                  />
                </div>

                <button
                  className="col-12 p-2 mt-4"
                  style={{
                    backgroundColor: "black",
                    border: "none",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  <b></b> Đăng Ký
                </button>
               
                <h5  className="mt-5" style={{textAlign:"center"}}>Bạn đã có tài khoản <span className="text-danger"><Link to={"/Login"}>Đăng Nhập </Link></span>
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
export default Register;
