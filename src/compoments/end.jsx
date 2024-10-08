import React, { useEffect, useState } from "react";
import axiosInstance from "../axios";
const End = () => {
  const [Item, setItem] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/api/lienhe")
      .then(function (response) {
        setItem(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {});
  }, []);

  return (
    <footer className="cs_footer cs_style_1 cs_primary_bg">
      <div className="cs_height_130 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_footer_main">
          <div className="row">
            <div className="col-xxl-3 col-lg-3">
              <div className="cs_footer_widget cs_text_widget">
                <h1 style={{ color: "white", fontSize: "25px" }}>
                  Fashion King Men
                </h1>
                <p>
                  Khám phá những niềm vui không ngừng tại điểm đến mua sắm trực
                  tuyến duy nhất của bạn.
                </p>
                <img src="assets/img/payment_method_1.png" alt="Payment" />
              </div>
            </div>
            <div className="col-xxl-7 offset-xxl-2 offset-lg-1 col-lg-8">
              <div className="row">
                <div className="col-md-3">
                  <div className="cs_footer_widget cs_menu_widget">
                    <h3 className="cs_footer_widget_title cs_fs_21 cs_semibold">
                      Get to know
                    </h3>
                    <ul>
                      <li>
                        <a href="about.php">Giới Thiệu</a>
                      </li>
                      <li>
                        <a href="shop.php">Sản Phẩm</a>
                      </li>
                      <li>
                        <a href="blog.php">Blog</a>
                      </li>
                      <li>
                        <a href="contact.php">Liên Hệ</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_footer_widget cs_menu_widget">
                    <h3 className="cs_footer_widget_title cs_fs_21 cs_semibold">
                      Customer Service
                    </h3>
                    <ul>
                      <li>
                        <a href="#">Help Center</a>
                      </li>
                      <li>
                        <a href="#">Shipping & Delivery</a>
                      </li>
                      <li>
                        <a href="#">Exchange & Return</a>
                      </li>
                      <li>
                        <a href="#">Payment Method</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="cs_footer_widget cs_menu_widget">
                    <h3 className="cs_footer_widget_title cs_fs_21 cs_semibold">
                      Contact Information
                    </h3>
                    <ul className="cs_contact_info">
                      {Item.map((item, index) => (
                        <div key={index}>
                          <li>SĐT: 0{item.sdt}</li>
                          <li>Email :{item.email}</li>
                          <li>địa chỉ :{item.diachi}</li>
                        </div>
                      ))}

                      <li>Mở cửa cả ngày</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_footer_bottom">
          <div>
            <p className="cs_copywrite_text mb-0">
              Copyright & 2024, All rights reserved.
            </p>
          </div>
          <div>
            <ul className="cs_footer_menu_widget_2">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="cs_social_links">
              <a href="#" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/fashionkingmen" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default End;
