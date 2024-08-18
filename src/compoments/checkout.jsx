import React from "react";
import Menu from "./menu";
import End from "./end";
const Checkout = () => {
  return (
    <div>
          <header className="cs_site_header cs_style_1 cs_primary_color cs_site_header_full_width cs_sticky_header">
        <Menu></Menu>
      </header>
      <section>
        <div className="container">
          <div className="cs_height_80 cs_height_lg_60"></div>
          <div className="cs_shop_page_heading text-center">
            <h1 className="cs_fs_50 cs_bold">Checkout</h1>
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
              <span>Checkout</span>
            </div>
          </div>
          <div className="cs_height_80 cs_height_lg_60"></div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <p className="cs_checkout-alert m-0">
              Have a coupon? <a href="">Click here to enter your code</a>
            </p>
            <div className="cs_height_40 cs_height_lg_40"></div>
            <h2 className="cs_checkout-title cs_fs_28">Billing Details</h2>
            <div className="cs_height_45 cs_height_lg_40"></div>
            <div className="row">
              <div className="col-lg-6">
                <label className="cs_shop-label">First Name *</label>
                <input type="text" className="cs_shop-input" />
                <div
                  data-lastpass-icon-root="true"
                  style={{position: "relative !important", height: "0px !important", width: "0px !important", float: "left !important"}}
                ></div>
              </div>
              <div className="col-lg-6">
                <label className="cs_shop-label">Last Name *</label>
                <input type="text" className="cs_shop-input" />
              </div>
              <div className="col-lg-12">
                <label className="cs_shop-label">Company name (optional)</label>
                <input type="text" className="cs_shop-input" />
              </div>
              <div className="col-lg-12">
                <label className="cs_shop-label">Country / Region *</label>
                <select className="cs_shop-input">
                  <option value="States">United States (US)</option>
                  <option value="Kingdom">United Kingdom</option>
                  <option value="Kanada">Kanada</option>
                </select>
              </div>
              <div className="col-lg-12">
                <label className="cs_shop-label">Street address *</label>
                <input
                  type="text"
                  className="cs_shop-input"
                  placeholder="House number and street name"
                />
                <input
                  type="text"
                  className="cs_shop-input"
                  placeholder="Apartment, suite, unit, etc (optional) "
                />
              </div>
              <div className="col-lg-12">
                <label className="cs_shop-label">Town / City *</label>
                <input type="text" className="cs_shop-input" />
              </div>
              <div className="col-lg-12">
                <label className="cs_shop-label">State *</label>
                <select className="cs_shop-input">
                  <option value="California">California</option>
                  <option value="Gercy">New Gercy</option>
                  <option value="Daiking">Daiking</option>
                </select>
              </div>
              <div className="col-lg-12">
                <label className="cs_shop-label">ZIP Code *</label>
                <input type="text" className="cs_shop-input" />
              </div>
              <div className="col-lg-12">
                <label className="cs_shop-label">Phone *</label>
                <input type="text" className="cs_shop-input" />
              </div>
              <div className="col-lg-12">
                <label className="cs_shop-label">Email address *</label>
                <input type="text" className="cs_shop-input" />
              </div>
            </div>
            <div className="cs_height_45 cs_height_lg_45"></div>
            <h2 className="cs_checkout-title">Additional information</h2>
            <div className="cs_height_25 cs_height_lg_25"></div>
            <label className="cs_shop-label">Order notes (optional)</label>
            <textarea cols="30" rows="6" className="cs_shop-input"></textarea>
            <div className="cs_height_30 cs_height_lg_30"></div>
          </div>
          <div className="col-xl-5">
            <div className="cs_shop-side-spacing">
              <div className="cs_shop-card">
                <h2 className="cs_fs_21">Your order</h2>
                <table>
                  <tbody>
                    <tr className="cs_semi_bold">
                      <td>Products</td>
                      <td className="text-end">Amount</td>
                    </tr>
                    <tr>
                      <td>Awesome men T-shirt x 1</td>
                      <td className="text-end">$20.00</td>
                    </tr>
                    <tr>
                      <td>Future AI robot toy x 1</td>
                      <td className="text-end">$550.00</td>
                    </tr>
                    <tr>
                      <td>Hemp seed shampoo x 1</td>
                      <td className="text-end">$35.00</td>
                    </tr>
                    <tr>
                      <td className="cs_semi_bold">Subtotal</td>
                      <td className="text-end">$605.00</td>
                    </tr>
                    <tr className="cs_semi_bold">
                      <td>Total</td>
                      <td className="text-end">$605.00</td>
                    </tr>
                  </tbody>
                </table>
                <div className="cs_height_30 cs_height_lg_30"></div>
                <a
                  href="success.html"
                  className="cs_btn cs_style_1 cs_fs_16 cs_medium w-100"
                >
                  Place Order
                </a>
              </div>
              <div className="cs_height_50 cs_height_lg_30"></div>
              <div className="cs_shop-card">
                <h2 className="cs_fs_21">Payment</h2>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check cs_fs_16">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            checked=""
                          />
                          <label
                            className="form-check-label m-0 cs_semi_bold"
                            for="flexCheckDefault"
                          >
                            Cash on delivery
                          </label>
                        </div>
                        <p className="m-0 cs_payment_text">
                          Pay with cash upon delivery.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="cs_height_20 cs_height_lg_20"></div>
                <p className="m-0 cs_payment_text">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our <a href="">privacy policy</a>.
                </p>
                <div className="cs_height_20 cs_height_lg_20"></div>
                <button className="cs_btn cs_style_1 cs_fs_16 cs_medium w-100">
                  Pay Now
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
