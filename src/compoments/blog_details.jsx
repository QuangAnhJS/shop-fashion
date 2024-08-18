import React from "react";
import Menu from "./menu";
import post_details from "../assets/img/post_details.jpg";
import End from "./end";
const Blog_details = () => {
  return (
    <div>
      <header className="cs_site_header cs_style_1 cs_primary_color cs_site_header_full_width cs_sticky_header">
        <Menu></Menu>
      </header>
      <section>
        <div className="cs_height_140 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_gap_y_70">
            <div className="col-lg-8">
              <div className="cs_post_details">
                <div className="cs_post_details_meta cs_fs_14">
                  <span>JANUARY 13, 2023</span>
                  <span>
                    By{" "}
                    <a href="#" className="cs_post_subtitle mb-0">
                      Jhon Bentham
                    </a>
                  </span>
                </div>
                <h1>Mastering the art of wardrobe manage essentials</h1>
                <img src={post_details} alt="Post Image" />
                <h2>Introduction</h2>
                <p>
                  In a world where our closets can overflow with clothes,
                  finding a sense of style and simplicity can be a daunting
                  task. That's where the concept of a capsule wardrobe comes to
                  the rescue. This blog will guide you through the art of
                  curating your own capsule wardrobe and mastering the
                  essentials for a more effortless and sustainable approach to
                  fashion.
                </p>
                <h2>Chapter 1: What Is a Capsule Wardrobe?</h2>
                <ul>
                  <li>Define the concept of a capsule wardrobe.</li>
                  <li>
                    Understand the benefits of having a capsule wardrobe,
                    including saving time and money.
                  </li>
                  <li>Explore the history and origin of the term.</li>
                </ul>
                <h2>Chapter 2: Building Your Capsule Wardrobe</h2>
                <ul>
                  <li>
                    Discuss the key components of a capsule wardrobe, such as
                    timeless basics and statement pieces.
                  </li>
                  <li>Provide tips for decluttering your current wardrobe.</li>
                  <li>
                    Explain how to create a versatile, mix-and-match collection
                    of clothing.
                  </li>
                </ul>
                <h2>Chapter 3: Choosing Your Essentials</h2>
                <ul>
                  <li>
                    Break down the must-have pieces for men and women, including
                    classic clothing items like a white shirt, well-fitting
                    jeans, and a versatile blazer.
                  </li>
                  <li>
                    Emphasize the importance of quality over quantity in
                    selecting essentials.
                  </li>
                </ul>
                <h2>Chapter 4: Personalizing Your Capsule Wardrobe</h2>
                <ul>
                  <li>
                    Discuss how to incorporate your unique style into your
                    capsule wardrobe.
                  </li>
                  <li>
                    Offer suggestions for adding pops of color, accessories, and
                    individuality.
                  </li>
                </ul>
                <h2>
                  Chapter 5: Maintaining and Updating Your Capsule Wardrobe
                </h2>
                <ul>
                  <li>
                    Share tips on how to keep your wardrobe fresh and relevant
                    season after season.
                  </li>
                  <li>
                    Discuss the sustainable aspect of owning fewer, high-quality
                    items.
                  </li>
                </ul>
                <h2>Conclusion:</h2>
                <p>
                  Mastering the art of wardrobe essentials through a capsule
                  wardrobe is not only a game-changer for your style but also a
                  mindful approach to fashion. It's about curating a collection
                  that truly reflects your personality and values while
                  simplifying your daily decisions. <br />
                  Join us on this journey of style and simplicity as we explore
                  the world of capsule wardrobes. Your wardrobe will thank you,
                  and you'll discover that less truly can be more when it comes
                  to fashion.
                </p>
              </div>
              <div className="cs_height_40 cs_height_lg_40"></div>
              <div className="cs_post_details_bottom">
                <div className="cs_post_details_tags_wrap">
                  <h4 className="cs_fs_16">Tags: </h4>
                  <div className="cs_post_details_tags">
                    <a href="#" className="tag-cloud-link">
                      Fashion,{" "}
                    </a>
                    <a href="#" className="tag-cloud-link">
                      {" "}
                      New,{" "}
                    </a>
                    <a href="#" className="tag-cloud-link">
                      Trend
                    </a>
                  </div>
                </div>
                <div className="cs_post_details_share_wrap">
                  <h4 className="cs_fs_16">Share: </h4>
                  <div className="cs_post_details_share">
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="cs_height_80 cs_height_lg_60"></div>
              <div className="cs_author_card">
                <div className="cs_author_thumb">
                  <img src={post_details} alt="Author" />
                </div>
                <div className="cs_author_info">
                  <h3 className="cs_author_title cs_fs_21 cs_semibold">
                    Jhon Bentham
                  </h3>
                  <p>
                    Hi, my name is Anthony kuber. I am artist and fashion
                    designer. <br />I love to travel and writing blogging.
                  </p>
                  <div className="cs_author_social">
                    <a href="#" className="cs_center">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="cs_center">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="cs_center">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="cs_height_70 cs_height_lg_60"></div>
              <div className="cs_comment_heading">
                <h2 className="cs_fs_37 cs_semibold mb-0">Write your opinion</h2>
                <div className="cs_height_10 cs_height_lg_10"></div>
                <p className="cs_section_subtitle mb-0">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <div className="cs_height_35 cs_height_lg_35"></div>
              </div>
              <form className="row cs_gap_y_24">
                <div className="col-lg-12">
                  <textarea
                    cols="30"
                    rows="7"
                    className="cs_form_field"
                    placeholder="Write Your Comment *"
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
                    <input
                      className="form-check-input"
                      id="check"
                      type="checkbox"
                    />
                    <label className="form-check-label m-0" for="check">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button
                    className="cs_btn cs_style_1 cs_fs_16 cs_medium"
                    type="submit"
                  >
                    Post Comment
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="cs_blog_sidebar">
                <div className="cs_sidebar_widget cs_search">
                  <h3 className="cs_sidebar_widget_title cs_fs_21 cs_semibold">
                    Search Blog
                  </h3>
                  <div className="cs_search_box">
                    <input type="text" placeholder="Search..." />
                    <span className="cs_search_icon">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                  </div>
                </div>
                <div className="cs_sidebar_widget">
                  <h3 className="cs_sidebar_widget_title cs_fs_21 cs_semibold">
                    Categories
                  </h3>
                  <ul className="cs_category_list">
                    <li>
                      <a href="#">Fashion (2)</a>
                    </li>
                    <li>
                      <a href="#">Style Tips (1)</a>
                    </li>
                    <li>
                      <a href="#">Jewelry (5)</a>
                    </li>
                    <li>
                      <a href="#">Accessories (1)</a>
                    </li>
                    <li>
                      <a href="#">Dresses (2)</a>
                    </li>
                    <li>
                      <a href="#">Beauty (4)</a>
                    </li>
                  </ul>
                </div>
                <div className="cs_sidebar_widget">
                  <h3 className="cs_sidebar_widget_title cs_fs_21 cs_semibold">
                    Latest Blog
                  </h3>
                  <div className="cs_post cs_style_4">
                    <a href="blog_details.html" className="cs_post_thumb">
                      <img src={post_details} alt="Image" />
                    </a>
                    <div className="cs_post_info">
                      <h4 className="cs_post_title cs_fs_18 cs_medium">
                        <a href="blog_details.html">Mastering the art of...</a>
                      </h4>
                      <div className="cs_post_meta">20 Dec 2023</div>
                    </div>
                  </div>
                  <div className="cs_post cs_style_4">
                    <a href="blog_details.html" className="cs_post_thumb">
                      <img src={post_details} alt="Image" />
                    </a>
                    <div className="cs_post_info">
                      <h4 className="cs_post_title cs_fs_18 cs_medium">
                        <a href="blog_details.html">Redefining style with...</a>
                      </h4>
                      <div className="cs_post_meta">20 Dec 2023</div>
                    </div>
                  </div>
                  <div className="cs_post cs_style_4">
                    <a href="blog_details.html" className="cs_post_thumb">
                      <img src={post_details} alt="Image" />
                    </a>
                    <div className="cs_post_info">
                      <h4 className="cs_post_title cs_fs_18 cs_medium">
                        <a href="blog_details.html">Tips for mixing and...</a>
                      </h4>
                      <div className="cs_post_meta">20 Dec 2023</div>
                    </div>
                  </div>
                </div>
                <div className="cs_sidebar_widget">
                  <div className="cs_sidebar_tags">
                    <h3 className="cs_sidebar_widget_title cs_fs_21 cs_semibold">
                      Tags
                    </h3>
                    <div className="cs_tags">
                      <a href="#" className="cs_tag_link">
                        Beauty
                      </a>
                      <a href="#" className="cs_tag_link">
                        Women
                      </a>
                      <a href="#" className="cs_tag_link">
                        Trend
                      </a>
                      <a href="#" className="cs_tag_link">
                        Fashion
                      </a>
                      <a href="#" className="cs_tag_link">
                        Minimal
                      </a>
                      <a href="#" className="cs_tag_link">
                        Sports
                      </a>
                      <a href="#" className="cs_tag_link">
                        Cloths
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_140 cs_height_lg_80"></div>
      </section>
      <End></End>
    </div>
  );
};
export default Blog_details;
