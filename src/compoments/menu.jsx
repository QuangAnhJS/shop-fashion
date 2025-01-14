import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axios";

const Menu = () => {
  const [show, setShow] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [manager, setManager] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollY) {
        setShow(false); // Cuộn xuống
      } else {
        setShow(true); // Cuộn lên
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);
  useEffect(() => {
    const Role = localStorage.getItem("Role");
    if (Role == 2) {
      console.log("sđ");
      setManager(true);
    }
  }, []);
  const [stataLogin, setStateLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setStateLogin(true);
    }
  }, []);
  const logout = () => {
    axiosInstance.post("/api/user/logout");
    const clear = localStorage.clear();
    if (clear) {
      window.location.reload();
    }
  };
  return (
    <div className="cs_main_header navba">
      <div className="container-fluid">
        <div className={`cs_main_header ${show ? "show" : "hide"}`}>
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              <Link className="cs_site_branding" to={"/"}>
                <h1
                  className="fs-2"
                  style={{ color: "black", fontsize: "25px" }}
                >
                  Fashion King Men
                </h1>
              </Link>
            </div>
            <div className="cs_main_header_center">
              <div className="cs_nav cs_medium">
                <ul className="cs_nav_list">
                  <li className="menu-item-has-children">
                    <a href="#">Trang Chủ</a>
                    <ul>
                      <li>
                        <Link to={"/shop"}>Cửa Hàng</Link>
                      </li>
                      <li>
                        <a href="#">Fashion V2</a>
                      </li>
                      <li>
                        <a href="#">Jewelry</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="shop.php">Sản Phẩm</a>
                    <ul>
                      <li>
                        <Link to={"/shop"}>Tất Cả Sản Phẩm</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"/blog"}>Blog</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="">Trang</a>
                    <ul>
                      <li>
                        <Link to={"/About"}>Giới Thiệu</Link>
                      </li>
                      <li>
                        <Link to={"/cart"}>Giỏ Hàng</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"/contact"}>Liên Hệ</Link>
                  </li>
                  {manager ? (
                    <li>
                      <Link to={"/manager"}>Manager</Link>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </div>
            <div className="cs_main_header_right">
              <div className="cs_header_action">
              
              
                {stataLogin ? (
                  <button onClick={logout}>Đăng xuất</button>
                ) : (
                  <Link
                    to={"/Login"}
                    className="cs_action_icon cs_modal_btn"
                    data-modal="register_modal"
                  >
                    <i className="fa-regular fa-circle-user"></i>
                  </Link>
                )}

                <Link to={"/cart"} className="cs_action_icon">
                  <span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_395_1018)">
                        <path
                          d="M17.0347 3.05775C16.8238 2.80458 16.5597 2.60096 16.2612 2.46136C15.9626 2.32176 15.637 2.2496 15.3075 2.25H3.1815L3.15 1.98675C3.08554 1.43956 2.82254 0.935049 2.41087 0.568858C1.9992 0.202667 1.46747 0.000256345 0.9165 0L0.75 0C0.551088 0 0.360322 0.0790176 0.21967 0.21967C0.0790176 0.360322 0 0.551088 0 0.75C0 0.948912 0.0790176 1.13968 0.21967 1.28033C0.360322 1.42098 0.551088 1.5 0.75 1.5H0.9165C1.1002 1.50002 1.2775 1.56747 1.41478 1.68954C1.55206 1.81161 1.63976 1.97981 1.66125 2.16225L2.69325 10.9373C2.80039 11.8498 3.23886 12.6913 3.92543 13.302C4.612 13.9127 5.49889 14.25 6.41775 14.25H14.25C14.4489 14.25 14.6397 14.171 14.7803 14.0303C14.921 13.8897 15 13.6989 15 13.5C15 13.3011 14.921 13.1103 14.7803 12.9697C14.6397 12.829 14.4489 12.75 14.25 12.75H6.41775C5.95354 12.7487 5.5011 12.6038 5.12245 12.3353C4.7438 12.0668 4.45748 11.6877 4.30275 11.25H13.2428C14.122 11.2501 14.9733 10.9412 15.6479 10.3773C16.3225 9.81348 16.7775 9.03052 16.9335 8.16525L17.5223 4.89975C17.581 4.57576 17.5678 4.2428 17.4836 3.92448C17.3993 3.60616 17.2461 3.31026 17.0347 3.05775ZM16.05 4.6335L15.4605 7.899C15.3668 8.41875 15.0934 8.889 14.6879 9.2274C14.2824 9.5658 13.7709 9.7508 13.2428 9.75H4.06425L3.3585 3.75H15.3075C15.4177 3.74934 15.5266 3.77297 15.6267 3.81919C15.7267 3.86542 15.8153 3.93311 15.8861 4.01746C15.957 4.1018 16.0085 4.20073 16.0368 4.3072C16.0651 4.41368 16.0696 4.52508 16.05 4.6335Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.25 18C6.07843 18 6.75 17.3284 6.75 16.5C6.75 15.6716 6.07843 15 5.25 15C4.42157 15 3.75 15.6716 3.75 16.5C3.75 17.3284 4.42157 18 5.25 18Z"
                          fill="currentColor"
                        />
                        <path
                          d="M12.75 18C13.5784 18 14.25 17.3284 14.25 16.5C14.25 15.6716 13.5784 15 12.75 15C11.9216 15 11.25 15.6716 11.25 16.5C11.25 17.3284 11.9216 18 12.75 18Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_395_1018">
                          <rect width="18" height="18" fill="currentColor" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
