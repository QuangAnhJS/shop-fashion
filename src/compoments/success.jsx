import React from "react";
import Menu from "./menu";
import End from "./end";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div>
      <header className="cs_site_header cs_style_1 cs_primary_color cs_site_header_full_width cs_sticky_header">
        <Menu></Menu>
      </header>
      <section>
        <div className="container">
          <div className="cs_height_80 cs_height_lg_60"></div>
          <div className="cs_shop_page_heading text-center">
            <h1 className="cs_fs_50 cs_bold">Order Success</h1>
            <div className="cs_shop_breadcamp cs_medium">
              <a href="index.html">Home</a>
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
              <span>Success</span>
            </div>
          </div>
          <div className="cs_height_80 cs_height_lg_60"></div>
        </div>
      </section>
      <div className="container">
  <div className="row">
    <div className="col-xl-8">
      <div className="table-responsive">
        <table className="cs_cart_table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="cs_cart_table_media">
                  <img src="assets/img/cart-product-1.jpeg" alt="Thumb"/>
                  <h3>Pure black cotton men T-shirt</h3>
                </div>
              </td>
              <td>$205.00</td>
              <td>
                <div className="cs_quantity">
                  <button className="cs_quantity_btn cs_increment"><i className="fa-solid fa-angle-up"></i></button>
                  <span className="cs_quantity_input">1</span>
                  <button className="cs_quantity_btn cs_decrement"><i className="fa-solid fa-angle-down"></i></button>
                </div>
              </td>
              <td>$205.00</td>
              <td className="text-center">
                <button className="cs_cart-table-close"><i className="fa-solid fa-xmark"></i></button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="cs_cart_table_media">
                  <img src="assets/img/cart-product-2.jpeg" alt="Thumb"/>
                  <h3>Satin silk sleeping were</h3>
                </div>
              </td>
              <td>$550.00</td>
              <td>
                <div className="cs_quantity">
                  <button className="cs_quantity_btn cs_increment"><i className="fa-solid fa-angle-up"></i></button>
                  <span className="cs_quantity_input">1</span>
                  <button className="cs_quantity_btn cs_decrement"><i className="fa-solid fa-angle-down"></i></button>
                </div>
              </td>
              <td>$550.00</td>
              <td className="text-center">
                <button className="cs_cart-table-close"><i className="fa-solid fa-xmark"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="cs_height_30 cs_height_lg_30"></div>
    </div>
    <div className="col-xl-4">
      <div className="cs_shop-side-spacing">
        <div className="cs_shop-card">
          <h2 className="cs_fs_21 cs_medium">Coupon Code</h2>
          <form action="#" className="cs_coupon-doce-form">
            <input type="text" placeholder="Coupon Code"/>
            <button className="cs_product_btn cs_color1 cs_semi_bold">Apply</button>
          </form>
          <div className="cs_height_30 cs_height_lg_30"></div>
          <h2 className="cs_fs_21 cs_medium">Cart Totals</h2>
          <table className="cs_medium">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td className="text-end">$605.00</td>
              </tr>
              <tr>
                <td>Total</td>
                <td className="text-end">$605.00</td>
              </tr>
            </tbody>
          </table>
          <div className="cs_height_30 cs_height_lg_30"></div>
          <Link to={'/checkout'} className="cs_btn cs_style_1 cs_fs_16 cs_medium w-100">Procced To Checkout</Link>
        </div>
        <div className="cs_height_30 cs_height_lg_30"></div>
      </div>
    </div>
  </div>
</div>
      <End></End>
    </div>
  );
};
export default Success;
