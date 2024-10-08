import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import End from "./end";
import img from "../assets/img/king.jpg";
import CreateBlog from "./createBlog";
import ModeIcon from "@mui/icons-material/Mode";
import ReorderIcon from "@mui/icons-material/Reorder";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Danhsach from "./modal/danhsach";
import axiosInstance from "../axios";
import "../assets/css/manager.css";
import From from "./modal/from";
import Website from "./modal/website";
import EditBlog from "./modal/editBlog";
const Manager = () => {
  const [activeItem, setActiveItem] = useState(1);
  const [itemName, setItemName] = useState("");

  const navigate = useNavigate();
  const fetchManagerData = async () => {
    try {
      const res = await axiosInstance.get("/api/manager");
      setItemName(res.data.data[0].name);
    } catch (error) {
      navigate("/Login");
    }
  };
  useEffect(() => {
    fetchManagerData();
  }, [navigate]);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

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
            <div className="col-md-3 mt-5">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-2 text-center">
                      <img
                        src={img}
                        alt=""
                        style={{ borderRadius: "50%", width: "45px" }}
                      />
                    </div>
                    <div className="col-10" style={{ display: "flex" }}>
                      <div
                        className="boc"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {itemName}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div
                    className={activeItem === 1 ? "row hover" : "row"}
                    onClick={() => handleItemClick(1)}
                  >
                    <div className="col-12">
                      <div className="row ">
                        <div className="col-1 text-center">
                          {" "}
                          <span>
                            <ModeIcon />
                          </span>{" "}
                        </div>
                        <div className="col-11">
                          <p>Thêm sản phẩm mới</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={activeItem === 2 ? "row hover" : "row"}
                    onClick={() => handleItemClick(2)}
                  >
                    <div className="col-12">
                      <div className="row">
                        <div className="col-1 text-center">
                          {" "}
                          <span>
                            <ReorderIcon />
                          </span>{" "}
                        </div>
                        <div className="col-11">
                          <p>Danh sách sản phẩm</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={activeItem === 3 ? "row hover" : "row"}
                    onClick={() => handleItemClick(3)}
                  >
                    <div className="col-12">
                      <div className="row">
                        <div className="col-1 text-center">
                          {" "}
                          <span>
                            <ManageAccountsIcon />
                          </span>{" "}
                        </div>
                        <div className="col-11">
                          <p>Cài đặt website</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={activeItem === 4 ? "row hover" : "row"}
                    onClick={() => handleItemClick(4)}
                  >
                    <div className="col-12">
                      <div className="row">
                        <div className="col-1 text-center">
                          {" "}
                          <span>
                            <ManageAccountsIcon />
                          </span>{" "}
                        </div>
                        <div className="col-11">
                          <p>Viết blog</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={activeItem === 5 ? "row hover" : "row"}
                    onClick={() => handleItemClick(5)}
                  >
                    <div className="col-12">
                      <div className="row">
                        <div className="col-1 text-center">
                          {" "}
                          <span>
                            <ManageAccountsIcon />
                          </span>{" "}
                        </div>
                        <div className="col-11">
                          <p> blog</p>
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
                <div className="card-footer text-muted">2 days ago</div>
              </div>
            </div>
            <div className="col-md-9">
              {activeItem === 1 && <From />}
              {activeItem === 2 && <Danhsach />}
              {activeItem === 3 && <Website />}
              {activeItem === 4 && <CreateBlog />}
              {activeItem === 5 && <EditBlog />}
            </div>
          </div>
        </div>
      </div>
      <End />
    </div>
  );
};
export default Manager;
