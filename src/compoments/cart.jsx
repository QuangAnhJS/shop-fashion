import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "./menu";
import End from "./end";
import Loading from "./loading";
import axiosInstance from "../axios";
const Cart = () => {
  const [Data, setData] = useState([""]);
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [SumtotalPrice,setSumtotalPrice] =useState(0);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get("/api/user/getProduct");
      const dataFromApi = res.data.data;
      const mergedData = mergeDuplicateProducts(dataFromApi);
      setData(mergedData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const mergeDuplicateProducts = (data) => {
    const merged = [];

    data.forEach((item) => {
      const existingItem = merged.find(
        (mergedItem) =>
          mergedItem.product?.id === item.product?.id &&
          mergedItem.size === item.size &&
          mergedItem.color === item.color
      );

      if (existingItem) {
        // Nếu sản phẩm đã tồn tại, tăng số lượng
        existingItem.quanlity += item.quanlity;
      } else {
        // Nếu sản phẩm chưa tồn tại, thêm mới vào mảng merged
        merged.push({ ...item });
      }
    });

    return merged;
  };
  const handleQuantityChange = (index, change) => {
    const newData = [...Data];
    const newQuantity = newData[index].quanlity + change;
    if (newQuantity >= 1) {
      newData[index].quanlity = newQuantity;
      setData(newData);
    }
  };
  const resultPrice = (quanlity, price) => {
    return quanlity * price;
  };
  const [isapply, setapply] = useState(true);
  const apply = (e) => {
    e.preventDefault();
    setapply(false);
  };
  const x=()=>{
    setapply(true);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading && <Loading />}
      <header className="cs_site_header cs_style_1 cs_primary_color cs_site_header_full_width cs_sticky_header">
        <Menu></Menu>
      </header>
      <section>
        <div className="container">
          <div className="cs_height_80 cs_height_lg_60"></div>
          <div className="cs_shop_page_heading text-center">
            <h1 className="cs_fs_50 cs_bold">Shopping Cart</h1>
          </div>
          <div className="cs_height_80 cs_height_lg_60"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="table-responsive">
                <table className="cs_cart_table">
                  <thead>
                    <tr>
                      <th>Sản phẩm</th>
                      <th>Màu sắc</th>
                      <th>Kích cỡ</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {Data &&
                      Data.map((item, index) => (
                        <tr>
                          <td>
                            <div className="cs_cart_table_media">
                              <img
                                src={item?.product?.img?.img1 || "Unknown"}
                                alt="Thumb"
                              />
                             <Link to={`/product_details/${item?.product?.id}`}> <h3>
                                {item.product?.name
                                  ? item.product.name
                                  : "Unknown Product Name"}
                              </h3>
                              </Link>
                            </div>
                          </td>
                          <td>
                            {item.color}
                          </td>
                          <td>
                            {item.size}
                          </td>
                          <td>
                            {item.product?.gia ? item.product.gia : "Unknown "}
                          </td>
                          <td>
                            <div className="cs_quantity">
                              <button
                                className="cs_quantity_btn cs_increment"
                                onClick={() => handleQuantityChange(index, +1)}
                              >
                                <i className="fa-solid fa-angle-up"></i>
                              </button>
                              <input
                                className="cs_quantity_input"
                                value={item.quanlity}
                                onChange={(e) => {
                                  const newQuantity =
                                    parseInt(e.target.value) || 1;
                                  handleQuantityChange(
                                    index,
                                    newQuantity - item.quanlity
                                  );
                                }}
                              />
                              <button
                                className="cs_quantity_btn cs_decrement"
                                onClick={() => handleQuantityChange(index, -1)}
                              >
                                <i className="fa-solid fa-angle-down"></i>
                              </button>
                            </div>
                          </td>

                          <td>
                            {" "}
                            {totalPrice === 0
                              ? resultPrice(
                                  item.quanlity,
                                  item.product?.gia
                                    ? item.product.gia
                                    : "Unknown "
                                )
                              : totalPrice}
                          </td>
                          <td className="text-center">
                            <button className="cs_cart-table-close">
                              <i className="fa-solid fa-xmark"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="cs_height_30 cs_height_lg_30"></div>
            </div>
            <div className="col-xl-4">
              <div className="cs_shop-side-spacing">
                <div className="cs_shop-card">
                  <h2 className="cs_fs_21 cs_medium">Coupon Code <span className="text-danger">{isapply?"":(<span className="prarent-span" >chức năng đang trong quá trình phát triển <span className="chill-span" onClick={x}>x</span> </span>) } </span></h2>
                  <form action="#" className="cs_coupon-doce-form">
                    <input type="text" placeholder="Coupon Code" />
                    <button
                      className="cs_product_btn cs_color1 cs_semi_bold"
                      onClick={apply}
                    >
                      Apply
                    </button>
                  </form>
                  <div className="cs_height_30 cs_height_lg_30"></div>
                  <h2 className="cs_fs_21 cs_medium">Cart Totals</h2>
                  <table className="cs_medium">
                    <tbody>
                      <tr>
                        <td>Total</td>
                        <td className="text-end">{totalPrice}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="cs_height_30 cs_height_lg_30"></div>
                  <Link
                    to={"/checkout"}
                    className="cs_btn cs_style_1 cs_fs_16 cs_medium w-100"
                  >
                    Procced To Checkout
                  </Link>
                </div>
                <div className="cs_height_30 cs_height_lg_30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <End></End>
    </div>
  );
};
export default Cart;
