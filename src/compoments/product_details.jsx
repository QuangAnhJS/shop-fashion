import React, { useEffect, useState } from "react";
import Menu from "./menu";
import End from "./end";
import Other from "./other";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../axios";
import Loading from "./loading";
import { Padding } from "@mui/icons-material";
const Product_details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setloading] = useState(false);
  const [category, setCategory] = useState(null);
  const [url, setUrl] = useState([""]);
  const [count, setCount] = useState(1);
  const [selectSize, setSelectSize] = useState("");
  const selectSizeHandle = (event) => {
    setSelectSize(event.target.value);
  };
  const [selectColor, setSelectColor] = useState("");
  const selectColorHandle = (event) => {
    console.log("Giá trị được chọn:", event.target.value);
    setSelectColor(event.target.value);
  };
  const row = {
    id:product&& product.data.id,
    name: product && product.data.name,
    price: product && product.data.gia,
    color: selectColor,
    size: selectSize,
    quantity: count,
  };
const mua=(e)=>{
  e.preventDefault();
  if(!selectSize || !selectColor){
    alert("vui lòng chọn size và màu sắc")
    return;
  }
  navigate(`/checkout/${product.data.id}`,{ state: row });
}
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count > 0 ? count - 1 : count);
  };
  const AddCart = async () => {
    try {
      const pice= await count*product.data.gia;
      const res = await axiosInstance.post("/api/user/addProduct", {
        quanlity: count,
        price:pice,
        product_id:id,
        size: selectSize,
        color: selectColor,
       
      });
      if(res.data.status==="success"){
        alert("Add to cart successfully");
        navigate("/cart")
      }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  const fetchProduct = async () => {
    setloading(true);
    try {
      const response = await axiosInstance.get(`/api/product_details/${id}`);
      setProduct(response.data);
      setCategory(response.data.data.category);
    } catch (err) {
      navigate("/404");
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    setProduct(null);
    fetchProduct();
  }, [id]);
  useEffect(() => {
    if (product) {
      setUrl(product.data.img.img1);
    }
  }, [product]);
  return (
    <div>
      {loading && <Loading />}
      <header className="cs_site_header cs_style_1 cs_primary_color cs_site_header_full_width cs_sticky_header">
        <Menu></Menu>
      </header>
      <div className="cs_height_80 cs_height_lg_80"></div>
      {!loading && (
        <div>
          <section>
            <div className="cs_height_35 cs_height_lg_35"></div>
            <div className="container">
              <nav aria-label="breadcrumb">
                <ol className="cs_single_product_breadcrumb breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Shop</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Men</a>
                  </li>
                  <li className="breadcrumb-item active">T-Shirt</li>
                </ol>
              </nav>
              <div className="row">
                <div className="col-xl-7">
                  <div className="row">
                    <div className="col-3">
                      <div className="cs_single_product_nav slick-slider">
                        {product && (
                          <div>
                            <div className="cs_single_product_thumb_mini">
                              <img
                                src={product.data.img.img1}
                                alt="Thumb"
                                onClick={() => setUrl(product.data.img.img1)}
                              />
                            </div>
                            <div className="cs_single_product_thumb_mini">
                              <img
                                src={product.data.img.img2}
                                alt="Thumb"
                                onClick={() => setUrl(product.data.img.img2)}
                              />
                            </div>
                            <div className="cs_single_product_thumb_mini">
                              <img
                                src={product.data.img.img3}
                                alt="Thumb"
                                onClick={() => setUrl(product.data.img.img3)}
                              />
                            </div>
                            <div className="cs_single_product_thumb_mini">
                              <img
                                src={product.data.img.img4}
                                alt="Thumb"
                                onClick={() => setUrl(product.data.img.img4)}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="cs_single_product_thumb slick-slider">
                        <div className="cs_single_product_thumb_item">
                          <img src={url} alt="Thumb" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="cs_single_product_details">
                    <h2 className="cs_fs_37 cs_semibold">
                      {product && product.data.name}
                    </h2>
              
                    <h4
                      className="cs_single_product_price cs_fs_21 cs_primary_color cs_semibold"
                      id="pice"
                      name="price"
                    >
                      Price: {product && product.data.gia} vnđ
                    </h4>
                    <hr />
                    <div className="cs_single_product_details_text">
                      <p className="mb-0">{product && product.data.describe}</p>
                    </div>
                    <div className="cs_single_product_size">
                      <h4 className="cs_fs_16 cs_medium">Size</h4>
                      <ul className="cs_size_filter_list cs_mp0">
                        {product &&
                          product.data.sizes.map((item, index) => (
                            <li>
                              <input
                                type="radio"
                                name="size"
                                value={item.sizes}
                                checked={selectSize === item.sizes}
                                onChange={selectSizeHandle} // Bắt sự kiện thay đổi size
                              />
                              <span>{item.sizes}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="cs_single_product_color ">
                      <h4 className="cs_fs_16 cs_medium">Color</h4>
                      <ul className="cs_color_filter_list cs_type_1 cs_mp0">
                        {product &&
                          product.data.sizes.map((item, index) => (
                            <li>
                              <div className="cs_color_filter">
                                <input
                                  type="radio"
                                  name="color"
                                  value={item.colors}
                                  checked={selectColor === item.colors}
                                  onChange={selectColorHandle} // Bắt sự kiện thay đổi color
                                />
                                <span className="cs_color_filter_circle cs_accent_bg"></span>
                                <span className="cs_color_text">
                                  {item.colors}
                                </span>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="cs_action_btns">
                      <div className="cs_quantity">
                        <button
                          className="cs_quantity_btn cs_increment"
                          onClick={increaseCount}
                        >
                          <i className="fa-solid fa-angle-up"></i>
                        </button>
                        <input className="cs_quantity_input" value={count} />
                        <button
                          className="cs_quantity_btn cs_decrement"
                          onClick={decreaseCount}
                        >
                          <i className="fa-solid fa-angle-down"></i>
                        </button>
                      </div>
                      <button
                        to="/cart"
                        className="cs_btn cs_style_1 cs_fs_16 cs_medium cover"
                        onClick={AddCart}
                        style={{ Padding: "!important 10px" }}

                      >
                        Thêm vào giỏ hàng
                      </button>
                      <button
                      //  to={`/checkout/${ product?.data.id}`}
                        className="cs_btn cs_style_1 cs_fs_16 cs_medium"
                        onClick={mua}
                      >
                       Mua ngay
                      </button>
                      {/* <button className="cs_heart_btn">
                        <i className="fa-regular fa-heart"></i>
                      </button> */}
                    </div>
                    <ul className="cs_single_product_info">
                      <li className="cs_fs_16 cs_normal">
                        <b className="cs_medium">Categories: </b>
                        {category && <span>{category.name}</span>}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="cs_height_70 cs_height_lg_60"></div>
              <hr />
              <div className="cs_product_meta_info">
                <ul className="cs_tab_links cs_style_2 cs_product_tab cs_fs_21 cs_primary_color cs_semibold cs_mp0">
                  <li>
                    <a href="#tab_1">Description</a>
                  </li>
                  <li>
                    <a href="#tab_2">Additional information</a>
                  </li>
                  <li>
                    <a href="#tab_3">Size Guide</a>
                  </li>
                  <li className="active">
                    <a href="#tab_4">Review (1)</a>
                  </li>
                </ul>
                <div className="cs_tabs">
                  <div className="cs_tab" id="tab_1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut
                    metus leo. className aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Sed
                    luctus, dui eu sagittis sodales, nulla nibh sagittis augue,
                    vel porttitor diam enim non metus. Vestibulum aliquam augue
                    neque. Phasellus tincidunt odio eget ullamcorper efficitur.
                    Cras placerat ut turpis pellentesque vulputate. Nam sed
                    consequat tortor. Curabitur finibus sapien dolor. Ut
                    eleifend tellus nec erat pulvinar dignissim. Nam non arcu
                    purus. Vivamus et massa massa.
                  </div>
                  <div className="cs_tab" id="tab_2">
                    <table className="m-0">
                      <tbody>
                        <tr>
                          <td>Color</td>
                          <td>Blue, Gray, Green, Red, Yellow</td>
                        </tr>
                        <tr>
                          <td>Size</td>
                          <td>Large, Medium, Small</td>
                        </tr>
                      </tbody>
                    </table>
                    <hr />
                  </div>
                  <div className="cs_tab" id="tab_3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut
                    metus leo. className aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Sed
                    luctus, dui eu sagittis sodales, nulla nibh sagittis augue,
                    vel porttitor diam enim non metus. Vestibulum aliquam augue
                    neque. Phasellus tincidunt odio eget ullamcorper efficitur.
                    Cras placerat ut turpis pellentesque vulputate. Nam sed
                    consequat tortor. Curabitur finibus sapien dolor. Ut
                    eleifend tellus nec erat pulvinar dignissim. Nam non arcu
                    purus. Vivamus et massa massa.
                  </div>
                  <div className="cs_tab active" id="tab_4">
                    <ul className="cs_client_review_list cs_mp0">
                      <li>
                        <div className="cs_client_review">
                          <div className="cs_review_media">
                            <div className="cs_review_media_thumb">
                              <img src="assets/img/avatar.png" alt="Avatar" />
                            </div>
                            <div className="cs_review_media_right">
                              <div className="cs_rating_container">
                                <div
                                  className="cs_rating cs_size_sm"
                                  data-rating="5"
                                >
                                  <div className="cs_rating_percentage"></div>
                                </div>
                              </div>
                              <p className="mb-0 cs_primary_color cs_semibold">
                                Zhon Abony
                              </p>
                            </div>
                            <p className="cs_review_posted_by">
                              August 12, 2023
                            </p>
                          </div>
                          <p className="cs_review_text">
                            I recently purchased the Arino T-shirts and I'm
                            thoroughly impressed. The sound quality is
                            exceptional, the wireless connectivity is seamless,
                            and the noise cancellation technology is a <br />{" "}
                            standout feature. They're a bit pricey, but well
                            worth the investment. Highly recommend.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <p className="m-0">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <div className="cs_height_20 cs_height_lg_20"></div>
                    <div className="cs_input_rating_wrap">
                      <p>Your rating *</p>
                      <div
                        className="cs_input_rating cs_accent_color"
                        data-rating="0"
                      >
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                    </div>
                    <div className="cs_height_20 cs_height_lg_22"></div>
                    <form className="row cs_review_form cs_gap_y_24">
                      <div className="col-lg-12">
                        <textarea
                          rows="3"
                          className="cs_form_field"
                          placeholder="Write your review *"
                        ></textarea>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="cs_form_field"
                          placeholder="Your name *"
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="cs_form_field"
                          placeholder="Your email *"
                        />
                      </div>
                      <div className="col-lg-12">
                        <div className="form_check">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label m-0">
                            By using this form you agree with the storage and
                            handling of your data by this website. *
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button
                          className="cs_btn cs_style_1 cs_fs_16 cs_medium"
                          type="submit"
                        >
                          Submit Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Other></Other>
          <div className="cs_height_80 cs_height_lg_80"></div>
          <End></End>
        </div>
      )}
    </div>
  );
};
export default Product_details;
