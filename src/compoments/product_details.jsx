import React from "react";
import Menu from "./menu";
import End from "./end";
import Other from "./other";
import thum from "../assets/img/thumb1_lg.png";
const Product_details = () => {
  return (
    <div>
      <header className="cs_site_header cs_style_1 cs_primary_color cs_site_header_full_width cs_sticky_header">
        <Menu></Menu>
      </header>
      <div class="cs_height_80 cs_height_lg_80"></div>
      <section>
        <div class="cs_height_35 cs_height_lg_35"></div>
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="cs_single_product_breadcrumb breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Shop</a></li>
                    <li class="breadcrumb-item"><a href="#">Men</a></li>
                    <li class="breadcrumb-item active">T-Shirt</li>
                </ol>
            </nav>
            <div class="row">
                <div class="col-xl-7">
                    <div class="row">
                        <div class="col-3">
                            <div class="cs_single_product_nav slick-slider">
                                <div class="cs_single_product_thumb_mini">
                                    <img src={thum} alt="Thumb"/>
                                </div>
                                <div class="cs_single_product_thumb_mini">
                                    <img src={thum} alt="Thumb"/>
                                </div>
                                <div class="cs_single_product_thumb_mini">
                                    <img src={thum} alt="Thumb"/>
                                </div>
                                <div class="cs_single_product_thumb_mini">
                                    <img src={thum} alt="Thumb"/>
                                </div>
                               
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="cs_single_product_thumb slick-slider">
                                <div class="cs_single_product_thumb_item">
                                    <img src={thum} alt="Thumb"/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5">
                    <div class="cs_single_product_details">
                        <h2 class="cs_fs_37 cs_semibold">Black cotton men T-shirt</h2>
                        <div class="cs_single_product_review">
                            <div class="cs_rating_container">
                                <div class="cs_rating cs_size_sm" data-rating="5">
                                    <div class="cs_rating_percentage"></div>
                                </div>
                            </div>
                            <span>(5)</span>
                            <span>Stock: <span class="cs_accent_color">12 in stock</span></span>
                        </div>
                        <h4 class="cs_single_product_price cs_fs_21 cs_primary_color cs_semibold">Price: $20.00</h4>
                        <hr/>
                        <div class="cs_single_product_details_text">
                            <p class="mb-0">Our men black t-shirt offers a classic fit and is made from high-quality pure cotton materials to keep you feeling and looking great.</p>
                        </div>
                        <div class="cs_single_product_size">
                            <h4 class="cs_fs_16 cs_medium">Size</h4>
                            <ul class="cs_size_filter_list cs_mp0">
                                <li>
                                    <input type="radio" name="size"/>
                                    <span>S</span>
                                </li>
                                <li>
                                    <input type="radio" name="size"/>
                                    <span>M</span>
                                </li>
                                <li>
                                    <input type="radio" name="size"/>
                                    <span>L</span>
                                </li>
                                <li>
                                    <input type="radio" name="size"/>
                                    <span>XL</span>
                                </li>
                            </ul>
                        </div>
                        <div class="cs_single_product_color ">
                            <h4 class="cs_fs_16 cs_medium">Color</h4>
                            <ul class="cs_color_filter_list cs_type_1 cs_mp0">
                                <li>
                                    <div class="cs_color_filter">
                                        <input type="radio" name="color"/>
                                        <span class="cs_color_filter_circle cs_accent_bg"></span>
                                        <span class="cs_color_text">Red</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="cs_color_filter">
                                        <input type="radio" name="color"/>
                                        <span class="cs_color_filter_circle cs_secondary_bg"></span>
                                        <span class="cs_color_text">Gray</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="cs_color_filter">
                                        <input type="radio" name="color"/>
                                        <span class="cs_color_filter_circle cs_primary_bg"></span>
                                        <span class="cs_color_text">Black</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="cs_color_filter">
                                        <input type="radio" name="color"/>
                                        <span class="cs_color_filter_circle cs_white_bg"></span>
                                        <span class="cs_color_text">White</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="cs_action_btns">
                            <div class="cs_quantity">
                                <button class="cs_quantity_btn cs_increment"><i class="fa-solid fa-angle-up"></i></button>
                                <span class="cs_quantity_input">1</span>
                                <button class="cs_quantity_btn cs_decrement"><i class="fa-solid fa-angle-down"></i></button>
                            </div>
                            <a href="#" class="cs_btn cs_style_1 cs_fs_16 cs_medium">Add to Cart</a>
                            <button class="cs_heart_btn"><i class="fa-regular fa-heart"></i></button>
                        </div>
                        <ul class="cs_single_product_info">
                            <li class="cs_fs_16 cs_normal">
                                <b class="cs_medium">SKU: </b>0215552
                            </li>
                            <li class="cs_fs_16 cs_normal">
                                <b class="cs_medium">Categories: </b>T-Shirt
                            </li>
                            <li class="cs_fs_16 cs_normal">
                                <b class="cs_medium">Tags: </b>Men, T-Shirt, Clothing
                            </li>
                            <li class="cs_fs_16 cs_normal">
                                <b class="cs_medium">Brand: </b>Levine
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="cs_height_70 cs_height_lg_60"></div>
            <hr/>
            <div class="cs_product_meta_info">
                <ul class="cs_tab_links cs_style_2 cs_product_tab cs_fs_21 cs_primary_color cs_semibold cs_mp0">
                    <li><a href="#tab_1">Description</a></li>
                    <li><a href="#tab_2">Additional information</a></li>
                    <li><a href="#tab_3">Size Guide</a></li>
                    <li class="active"><a href="#tab_4">Review (1)</a></li>
                </ul>
                <div class="cs_tabs">
                    <div class="cs_tab" id="tab_1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed luctus, dui eu sagittis sodales,
                        nulla nibh sagittis augue, vel porttitor diam enim non metus. Vestibulum aliquam augue neque. Phasellus tincidunt odio eget ullamcorper efficitur. Cras placerat ut turpis pellentesque vulputate. Nam sed consequat tortor. Curabitur
                        finibus sapien dolor. Ut eleifend tellus nec erat pulvinar dignissim. Nam non arcu purus. Vivamus et massa massa.
                    </div>
                    <div class="cs_tab" id="tab_2">
                        <table class="m-0">
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
                        <hr/>
                    </div>
                    <div class="cs_tab" id="tab_3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed luctus, dui eu sagittis sodales,
                        nulla nibh sagittis augue, vel porttitor diam enim non metus. Vestibulum aliquam augue neque. Phasellus tincidunt odio eget ullamcorper efficitur. Cras placerat ut turpis pellentesque vulputate. Nam sed consequat tortor. Curabitur
                        finibus sapien dolor. Ut eleifend tellus nec erat pulvinar dignissim. Nam non arcu purus. Vivamus et massa massa.
                    </div>
                    <div class="cs_tab active" id="tab_4">
                        <ul class="cs_client_review_list cs_mp0">
                            <li>
                                <div class="cs_client_review">
                                    <div class="cs_review_media">
                                        <div class="cs_review_media_thumb"><img src="assets/img/avatar.png" alt="Avatar"/></div>
                                        <div class="cs_review_media_right">
                                            <div class="cs_rating_container">
                                                <div class="cs_rating cs_size_sm" data-rating="5">
                                                    <div class="cs_rating_percentage"></div>
                                                </div>
                                            </div>
                                            <p class="mb-0 cs_primary_color cs_semibold">Zhon Abony</p>
                                        </div>
                                        <p class="cs_review_posted_by">August 12, 2023</p>
                                    </div>
                                    <p class="cs_review_text">I recently purchased the Arino T-shirts and I'm thoroughly impressed. The sound quality is exceptional, the wireless connectivity is seamless, and the noise cancellation technology is a <br/> standout feature. They're
                                        a bit pricey, but well worth the investment. Highly recommend.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <p class="m-0">Your email address will not be published. Required fields are marked *</p>
                        <div class="cs_height_20 cs_height_lg_20"></div>
                        <div class="cs_input_rating_wrap">
                            <p>Your rating *</p>
                            <div class="cs_input_rating cs_accent_color" data-rating="0">
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                        <div class="cs_height_20 cs_height_lg_22"></div>
                        <form class="row cs_review_form cs_gap_y_24">
                            <div class="col-lg-12">
                                <textarea rows="3" class="cs_form_field" placeholder="Write your review *"></textarea>
                            </div>
                            <div class="col-lg-6">
                                <input type="text" class="cs_form_field" placeholder="Your name *"/>
                            </div>
                            <div class="col-lg-6">
                                <input type="text" class="cs_form_field" placeholder="Your email *"/>
                            </div>
                            <div class="col-lg-12">
                                <div class="form_check">
                                    <input class="form-check-input" type="checkbox"/>
                                    <label class="form-check-label m-0">
                    By using this form you agree with the storage and handling of your data by this website. *
                  </label>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <button class="cs_btn cs_style_1 cs_fs_16 cs_medium" type="submit">Submit Now</button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <Other></Other>
    <div class="cs_height_80 cs_height_lg_80"></div>

      <End></End>
    </div>
  );
};
export default Product_details;
