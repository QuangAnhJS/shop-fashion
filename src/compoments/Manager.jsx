import React from "react";
import { Link } from "react-router-dom";
import End from "./end";
import img from "../assets/img/king.jpg";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
const Manager = () => {
  return (
    <div>
      <div className="">
        <div className="container">
          <div className="row">
            <Link to={"/"}>
              <h1
                className="fs-2 mt-3"
                style={{ color: "black", fontsize: "25px" }}
              >
                Fashion King Men
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluit" style={{ backgroundColor: "#efefef" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-5 mt-5">
              <div class="card">
                <div class="card-header">
                    <div className="row">
                        <div className="col-2 text-center"><img src={img} alt="" style={{borderRadius:"50%",width:"45px"}}/></div>
                        <div className="col-10" style={{display: "flex"}}>
                            <div className="boc" style={{display: "flex" ,alignItems:"center"}} >
                            Ta Quang Anh
                            </div>
                           </div>
                    </div>
                </div>
                <div class="card-body">
                 <div className="row">
                    <div className="col-12">
                        <span><PermIdentityIcon></PermIdentityIcon></span>
                    </div>
                 </div>
                
                </div>
                <div class="card-footer text-muted">2 days ago</div>
              </div>
            </div>
            <div className="col-md-7">
              <form className="m-5 p-3" style={{ backgroundColor: "white" }}>
                <h3 style={{ fontWeight: "bold" }}>Đăng nhập</h3>
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
                  <b></b> Đăng nhập
                </button>
              
                
              </form>
            </div>
          </div>
        </div>
      </div>
      <End></End>
    </div>
  );
};
export default Manager;
