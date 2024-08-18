import React,{useRef} from "react";
import product from "../assets/img/product2.png";
import Slider from "react-slick";
const Other = () => {
    const slickbanchay = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1000,
      };
      let sliderRef = useRef(null);
      const next = () => {
        sliderRef.slickNext();
      };
      const previous = () => {
        sliderRef.slickPrev();
      };
  return (
    <div>
      <section className="cs_slider position-relative">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_in">
              <h2 className="cs_section_title cs_fs_50 cs_bold mb-0">
                Sản phẩm bán chạy nhất.
              </h2>
            </div>
            <div className="cs_slider_arrows cs_style_2">
              <div
                className="cs_left_arrow cs_slider_arrow cs_accent_color"
                onClick={previous}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </div>
              <div
                className="cs_right_arrow cs_slider_arrow cs_accent_color"
                onClick={next}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="cs_height_63 cs_height_lg_35"></div>
        </div>
        <div className="container-fluid">
          <div
            className="cs_slider_container"
            data-autoplay="0"
            data-loop="1"
            data-speed="600"
            data-center="0"
            data-slides-per-view="responsive"
            data-xs-slides="1"
            data-sm-slides="2"
            data-md-slides="2"
            data-lg-slides="3"
            data-add-slides="4"
          >
            <div className="cs_slider_wrapper">
              <Slider
                ref={(slider) => {
                  sliderRef = slider;
                }}
                {...slickbanchay}
              >
                <div className="slick_slide_in">
                  <div className="cs_product cs_style_1 cs_bordered">
                    <div className="cs_product_thumb position-relative">
                      <img src={product} alt="Product Image" className="w-100" />
                      <div className="cs_cart_badge position-absolute">
                        <a
                          href="wishlist.php"
                          className="cs_cart_icon cs_accent_bg cs_white_color"
                        >
                          <i className="fa-regular fa-heart"></i>
                        </a>
                        <a
                          href="product_details.php"
                          className="cs_cart_icon cs_accent_bg cs_white_color"
                        >
                          <i className="fa-regular fa-eye"></i>
                        </a>
                      </div>
                      <a
                        href="cart.php"
                        className="cs_cart_btn cs_accent_bg cs_fs_16 cs_white_color cs_medium position-absolute"
                      >
                        Thêm Vào Giỏ
                      </a>
                    </div>
                    <div className="cs_product_info text-center">
                      <h3 className="cs_product_title cs_fs_21 cs_medium">
                        <a href="product_details.php">
                          Áo thun nam màu đen thuần cotton.
                        </a>
                      </h3>
                      <p className="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">
                        200.000 VNĐ
                      </p>
                    </div>
                  </div>
                </div>

                <div className="slick_slide_in">
                  <div className="cs_product cs_style_1 cs_bordered">
                    <div className="cs_product_thumb position-relative">
                      <img
                        src={product}
                        alt="Product Image"
                        className="w-100"
                      />
                      <div className="cs_cart_badge position-absolute">
                        <a
                          href="wishlist.php"
                          className="cs_cart_icon cs_accent_bg cs_white_color"
                        >
                          <i className="fa-regular fa-heart"></i>
                        </a>
                        <a
                          href="product_details.php"
                          className="cs_cart_icon cs_accent_bg cs_white_color"
                        >
                          <i className="fa-regular fa-eye"></i>
                        </a>
                      </div>
                      <a
                        href="cart.php"
                        className="cs_cart_btn cs_accent_bg cs_fs_16 cs_white_color cs_medium position-absolute"
                      >
                        Thêm Vào Giỏ
                      </a>
                    </div>
                    <div className="cs_product_info text-center">
                      <h3 className="cs_product_title cs_fs_21 cs_medium">
                        <a href="product_details.php">
                          Áo product nam trẻ trung
                        </a>
                      </h3>
                      <p className="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">
                        450.000 VNĐ
                      </p>
                    </div>
                  </div>
                </div>

                <div className="slick_slide_in">
                  <div className="cs_product cs_style_1 cs_bordered">
                    <div className="cs_product_thumb position-relative">
                      <img src={product} alt="Product Image" className="w-100" />
                      <div className="cs_cart_badge position-absolute">
                        <a
                          href="wishlist.php"
                          className="cs_cart_icon cs_accent_bg cs_white_color"
                        >
                          <i className="fa-regular fa-heart"></i>
                        </a>
                        <a
                          href="product_details.php"
                          className="cs_cart_icon cs_accent_bg cs_white_color"
                        >
                          <i className="fa-regular fa-eye"></i>
                        </a>
                      </div>
                      <a
                        href="cart.php"
                        className="cs_cart_btn cs_accent_bg cs_fs_16 cs_white_color cs_medium position-absolute"
                      >
                        Thêm Vào Giỏ
                      </a>
                    </div>
                    <div className="cs_product_info text-center">
                      <h3 className="cs_product_title cs_fs_21 cs_medium">
                        <a href="product_details.php">Áo product cổ hai ve</a>
                      </h3>
                      <p className="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">
                        1.000.000 VNĐ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slick_slide_in">
                  <div className="cs_product cs_style_1 cs_bordered">
                    <div className="cs_product_thumb position-relative">
                      <img src={product} alt="Product Image" className="w-100" />
                      <div className="cs_cart_badge position-absolute">
                        <a
                          href="wishlist.php"
                          className="cs_cart_icon cs_accent_bg cs_white_color"
                        >
                          <i className="fa-regular fa-heart"></i>
                        </a>
                        <a
                          href="product_details.php"
                          className="cs_cart_icon cs_accent_bg cs_white_color"
                        >
                          <i className="fa-regular fa-eye"></i>
                        </a>
                      </div>
                      <a
                        href="cart.php"
                        className="cs_cart_btn cs_accent_bg cs_fs_16 cs_white_color cs_medium position-absolute"
                      >
                        Thêm Vào Giỏ
                      </a>
                    </div>
                    <div className="cs_product_info text-center">
                      <h3 className="cs_product_title cs_fs_21 cs_medium">
                        <a href="product_details.php">
                          Áo Polo Nam cổ bẻ Basic
                        </a>
                      </h3>
                      <p className="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">
                        150.000 VNĐ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slick_slide_in">
                  <div className="cs_product cs_style_1 cs_bordered">
                    <div className="cs_product_thumb position-relative">
                      <img
                        src={product}
                        alt="Product Image"
                        className="w-100"
                      />
                      <div className="cs_cart_badge position-absolute">
                        <a
                          href="wishlist.php"
                          className="cs_cart_icon cs_accent_bg cs_white_color"
                        >
                          <i className="fa-regular fa-heart"></i>
                        </a>
                        <a
                          href="product_details.php"
                          className="cs_cart_icon cs_accent_bg cs_white_color"
                        >
                          <i className="fa-regular fa-eye"></i>
                        </a>
                      </div>
                      <a
                        href="cart.php"
                        className="cs_cart_btn cs_accent_bg cs_fs_16 cs_white_color cs_medium position-absolute"
                      >
                        Thêm Vào Giỏ
                      </a>
                    </div>
                    <div className="cs_product_info text-center">
                      <h3 className="cs_product_title cs_fs_21 cs_medium">
                        <a href="product_details.php">
                          Áo khoác nam hàng hiệu vải dạ cao cấp
                        </a>
                      </h3>
                      <p className="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">
                        300.000 VNĐ
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Other;
