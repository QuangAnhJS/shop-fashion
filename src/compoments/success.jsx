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
    <div class="container">
      <div class="cs_height_80 cs_height_lg_60"></div>
      <div class="cs_shop_page_heading text-center">
        <h1 class="cs_fs_50 cs_bold">Order Success</h1>
        <div class="cs_shop_breadcamp cs_medium">
          <a href="index.html">Home</a>
          <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.3536 4.35355C16.5488 4.15829 16.5488 3.84171 16.3536 3.64645L13.1716 0.464467C12.9763 0.269205 12.6597 0.269205 12.4645 0.464467C12.2692 0.659729 12.2692 0.976312 12.4645 1.17157L15.2929 4L12.4645 6.82843C12.2692 7.02369 12.2692 7.34027 12.4645 7.53553C12.6597 7.7308 12.9763 7.7308 13.1716 7.53554L16.3536 4.35355ZM-4.37114e-08 4.5L16 4.5L16 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="#5E5E5E"/>
          </svg>            
          <span>Success</span>
        </div>
      </div>
      <div class="cs_height_80 cs_height_lg_60"></div>
    </div>
  </section>
      <div class="container">
    <p class="m-0 text-center cs_primary_color cs_medium">Thank you! Your order has been received.</p>
    <div class="cs_height_95 cs_height_lg_50"></div>
    <ul class="cs_order-summery">
      <li>
        <p>Order Number:</p>
        <h3>251501</h3>
      </li>
      <li>
        <p>Date:</p>
        <h3>September 11, 2023</h3>
      </li>
      <li>
        <p>Total:</p>
        <h3>$605.00</h3>
      </li>
      <li>
        <p>Payment method:</p>
        <h3>COD</h3>
      </li>
    </ul>
    <div class="cs_height_50 cs_height_lg_30"></div>
    <div class="cs_shop-card">
      <h2 class="cs_fs_21">Order details</h2>
      <table class="border-bottom-0">
        <tbody>
          <tr class="cs_semi_bold">
            <td>Products</td>
            <td class="text-end">Amount</td>
          </tr>
          <tr>
            <td>Awesome men T-shirt x 1</td>
            <td class="text-end">$20.00</td>
          </tr>
          <tr>
            <td>Future AI robot toy x 1</td>
            <td class="text-end">$550.00</td>
          </tr>
          <tr>
            <td>Hemp seed shampoo x 1</td>
            <td class="text-end">$35.00</td>
          </tr>
          <tr>
            <td class="cs_semi_bold">Subtotal</td>
            <td class="text-end">$605.00</td>
          </tr>
          <tr>
            <td class="cs_semi_bold">Payment method</td>
            <td class="text-end">Cash on delivery</td>
          </tr>
          <tr class="cs_semi_bold">
            <td class="pb-0">Total</td>
            <td class="text-end pb-0">$605.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
      <End></End>
    </div>
  );
};
export default Success;
