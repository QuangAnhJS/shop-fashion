import React, { useEffect, useState } from "react";
import Menu from "./menu";
import End from "./end";
import { Link } from "@mui/material";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../axios";

const Checkout = () => {
  const [tinh, setTinh] = useState([]);
  const [huyen, setHuyen] = useState([]);
  const [xa, setXa] = useState([]);
  const [Data, setData] = useState([]);
  const [selectTinh, setSlectTinh] = useState("");
  const [isselectHuyen, setSlectHuyen] = useState("");
  const [selectXa, setSelectXa] = useState("");
  const [input, setInput] = useState({
    chitiet: "",
    sdt: "",
    nguoinhan: "",
  });
  const [thanhtoanOnline, setThanhtoanOnline] = useState(false);
  const paymentOnline = (e) => {
    e.preventDefault();
    setThanhtoanOnline(true);
  };
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://provinces.open-api.vn/api/?depth=3"
      );
      const data = await response.json();
      setData(data);
      const arr = [];
      data.forEach((element) => {
        arr.push(element.name);
      });
      setTinh(arr);
    } catch (error) {
      console.error(error);
    }
  };
  const thanhtoan = async (e) => {
    e.preventDefault();
    console.log("chi tiết", input.chitiet);
    if (!input.chitiet || input.chitiet.trim() === "") {
      console.error("Chitiet field is required.");
      return; // Dừng hàm nếu chitiet không hợp lệ
    }
    try {
      const res = await axiosInstance.post("/api/user/payment", {
        name: data && data.name,
        size: data.size,
        color: data.color,
        quality: data.quantity,
        price: data.quantity * data.price,
        payment: 0,
        product_id: data && data.id,
        thanhpho: selectTinh,
        quanhuyen: isselectHuyen,
        xaphuong: selectXa,
        chitiet: input.chitiet,
        nguoinhan: input.nguoinhan,
        sdt: input.sdt,
      });
      if (res.data.status === "success") {
        navigate("/success");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handeltinh = (e) => {
    const selectTinh = e.target.value; // Lấy giá trị tỉnh/thành phố được chọn
    setSlectTinh(selectTinh);
    const tinh = Data.find((tinh) => tinh.name === selectTinh); // Tìm tỉnh/thành phố
    const arrhuyen = [];

    // Nếu tìm thấy tỉnh/thành phố, lấy danh sách các quận
    if (tinh) {
      tinh.districts.forEach((item) => {
        arrhuyen.push(item.name); // Thêm tên quận vào mảng
      });
    }

    // Cập nhật state với danh sách quận
    setHuyen(arrhuyen);
  };

  const total = (price, quantity) => {
    return price * quantity;
  };

  const handleHuyen = (e) => {
    const selectHuyen = e.target.value;
    setSlectHuyen(selectHuyen); // Lấy giá trị quận được chọn

    // Tìm tỉnh/thành phố tương ứng với quận được chọn
    const tinh = Data.find((tinh) =>
      tinh.districts.some((district) => district.name === selectHuyen)
    );

    // Tìm quận trong tỉnh/thành phố đã tìm thấy
    const huyen = tinh?.districts.find(
      (district) => district.name === selectHuyen
    );
    const arrXa = [];

    // Nếu tìm thấy quận, lấy danh sách các phường
    if (huyen) {
      huyen.wards.forEach((item) => {
        console.log("Ward:", item.name);
        arrXa.push(item.name); // Thêm tên phường vào mảng
      });
    }

    console.log("Wards:", arrXa);
    // Cập nhật state với danh sách phường
    setXa(arrXa);
  };
  const Xa = (e) => {
    const xa = e.target.value;
    setSelectXa(xa);
  };
  useEffect(() => {
    fetchData();
    // setOrder([{id:id ,name:name , color:color,size:size}])
  }, []);
  return (
    <div>
      <header className="cs_site_header cs_style_1 cs_primary_color cs_site_header_full_width cs_sticky_header">
        <Menu></Menu>
      </header>
      <section>
        <div className="container">
          <div className="cs_height_80 cs_height_lg_60"></div>
          <div className="cs_shop_page_heading text-center">
            <h1 className="cs_fs_50 cs_bold">Thanh toán</h1>
            <div className="cs_shop_breadcamp cs_medium">
              <Link to={"/"}>Home</Link>
              <svg
                width="17"
                height="8"
                viewBox="0 0 17 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3536 4.35355C16.5488 4.15829 16.5488 3.84171 16.3536 3.64645L13.1716 0.464467C12.9763 0.269205 12.6597 0.269205 12.4645 0.464467C12.2692 0.659729 12.2692 0.976312 12.4645 1.17157L15.2929 4L12.4645 6.82843C12.2692 7.02369 12.2692 7.34027 12.4645 7.53553C12.6597 7.7308 12.9763 7.7308 13.1716 7.53554L16.3536 4.35355ZM-4.37114e-08 4.5L16 4.5L16 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                  fill="#5E5E5E"
                />
              </svg>
              <span>Checkout</span>
            </div>
          </div>
          <div className="cs_height_80 cs_height_lg_60"></div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <div className="cs_height_40 cs_height_lg_40"></div>
            <h2 className="cs_checkout-title cs_fs_28">Thông tin đơn hàng</h2>
            <div className="cs_height_45 cs_height_lg_40"></div>
            <div className="row">
              <div className="col-lg-6">
                {/* <label className="cs_shop-label">First Name *</label> */}
                <select
                  type="text"
                  className="cs_shop-input"
                  placeholder="vui lòng chọn thành phố"
                  onChange={handeltinh}
                  value={selectTinh}
                >
                  <option value="">Nhập thành phố</option>
                  {tinh.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item}
                    </option>
                  ))}
                </select>
                <div
                  data-lastpass-icon-root="true"
                  style={{
                    position: "relative !important",
                    height: "0px !important",
                    width: "0px !important",
                    float: "left !important",
                  }}
                ></div>
              </div>
              <div className="col-lg-6">
                {/* <label className="cs_shop-label">Last Name *</label> */}
                <select
                  type="text"
                  className="cs_shop-input"
                  onChange={handleHuyen}
                  // value={isselectHuyen}
                >
                  <option value="">Nhập huyện</option>
                  {huyen.map((item) => (
                    <option key={item.code} value={item.name}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-lg-6">
                {/* <label className="cs_shop-label">First Name *</label> */}
                <select
                  type="text"
                  className="cs_shop-input"
                  onChange={Xa}
                  value={selectXa}
                >
                  <option value="">Nhập xã</option>
                  {xa.map((item) => (
                    <option key={item.code} value={item.name}>
                      {item}
                    </option>
                  ))}
                </select>
                <div
                  data-lastpass-icon-root="true"
                  style={{
                    position: "relative !important",
                    height: "0px !important",
                    width: "0px !important",
                    float: "left !important",
                  }}
                ></div>
              </div>
              <div className="col-lg-6">
                {/* <label className="cs_shop-label">Last Name *</label> */}
                <input
                  type="text"
                  className="cs_shop-input"
                  placeholder="Nhập địa chỉ chi tiết"
                  name="chitiet"
                  onChange={handleChange}
                  value={input.chitiet}
                />
              </div>

              <div className="col-lg-12">
                {/* <label className="cs_shop-label">Street address *</label> */}
                <input
                  type="number"
                  className="cs_shop-input"
                  placeholder="Nhập số điện thoại"
                  name="sdt"
                  onChange={handleChange}
                  value={input.sdt}
                />
                <input
                  type="text"
                  className="cs_shop-input"
                  placeholder="Nhập tên người nhận"
                  name="nguoinhan"
                  onChange={handleChange}
                  value={input.nguoinhan}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="cs_shop-side-spacing">
              <div className="cs_shop-card">
                <h2 className="cs_fs_21">Thanh toán</h2>
                <table>
                  <tbody>
                    <tr className="cs_semi_bold">
                      <td>Sản phẩm</td>
                      <td className="text-end">{data && data.name}</td>
                    </tr>
                    <tr>
                      <td>màu sắc</td>
                      <td className="text-end">{data && data.color}</td>
                    </tr>
                    <tr>
                      <td>kích cỡ</td>
                      <td className="text-end">{data && data.size}</td>
                    </tr>
                    <tr>
                      <td>số lượng</td>
                      <td className="text-end">{data && data.quantity}</td>
                    </tr>
                    <tr>
                      <td>Thành tiền</td>
                      <td className="text-end">
                        {total(data.quantity, data.price)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="cs_height_30 cs_height_lg_30"></div>
                <button
                  className="cs_btn cs_style_1 cs_fs_16 cs_medium w-100"
                  onClick={thanhtoan}
                >
                  Thanh toán khi nhận hàng
                </button>
              </div>
              <div className="cs_height_50 cs_height_lg_30"></div>
              <div className="cs_shop-card">
                <h2 className="cs_fs_21">Payment</h2>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check cs_fs_16"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {thanhtoanOnline ?(<span className="text-wanning">Chức năng chưa khả dụng vui lòng chọn thanh toán khi nhận hàng</span>):""}

                <div className="cs_height_20 cs_height_lg_20">
                </div>
                <p className="m-0 cs_payment_text">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our <a href="">privacy policy</a>.
                </p>
                <div className="cs_height_20 cs_height_lg_20"></div>
                <button className="cs_btn cs_style_1 cs_fs_16 cs_medium w-100" onClick={paymentOnline}>
                  Thanh toán online
                </button>
              </div>
              <div className="cs_height_30 cs_height_lg_30"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_90 cs_height_lg_50"></div>
      <End></End>
    </div>
  );
};
export default Checkout;
