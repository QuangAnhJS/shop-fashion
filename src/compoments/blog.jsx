import React from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";
import post from "../assets/img/post1.jpg";
import End from "./end";
const Blog = () => {
  return (
    <div>
      <header className="cs_site_header cs_style_1 cs_primary_color cs_site_header_full_width cs_sticky_header">
        <Menu></Menu>
      </header>
      <section>
        <div class="cs_height_140 cs_height_lg_80"></div>
        <div class="container">
          <div class="row cs_gap_y_70">
            <div class="col-lg-8">
              <div class="row cs_gap_y_80">
                <div class="col-md-6">
                  <div class="cs_post cs_style_1">
                    <Link href="blog_details.html" class="cs_post_thumb cs_zoom">
                      <img
                        src={post}
                        alt="Post Image"
                        class="cs_zoom_in w-100"
                      />
                    </Link>
                    <div class="cs_post_meta">
                      <p class="cs_post_meta_info mb-0 cs_fs_14">
                        JANUARY 13, 2023
                      </p>
                    </div>
                    <div class="cs_post_info">
                      <h3 class="cs_post_title cs_fs_28 cs_semibold">
                        <Link href="blog_details.html">
                          Mastering the art of wardrobe manage essentials
                        </Link>
                      </h3>
                      <p class="cs_post_subtitle">
                        Discover the key to simplifying your style with Link
                        capsule wardrobe. Learn how to curate Link collection of
                        versatile pieces that will elevate your fashion game...
                      </p>
                      <Link
                        href="blog_details.html"
                        class="cs_post_btn cs_fs_16 cs_medium cs_primary_color"
                      >
                        <span>Read More</span>
                        <span class="cs_btn_arrow cs_accent_color">
                          <i class="fa-solid fa-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="cs_post cs_style_1">
                    <Link to={"/Blog_details"} class="cs_post_thumb cs_zoom">
                      <img
                           src={post}
                        alt="Post Image"
                        class="cs_zoom_in w-100"
                      />
                    </Link>
                    <div class="cs_post_meta">
                      <p class="cs_post_meta_info mb-0 cs_fs_14">
                        MARCH 18, 2023f
                      </p>
                    </div>
                    <div class="cs_post_info">
                      <h3 class="cs_post_title cs_fs_28 cs_semibold">
                        <Link href="blog_details.html">
                          Redefining style with eco-friendly choices
                        </Link>
                      </h3>
                      <p class="cs_post_subtitle">
                        Dive into the world of sustainable fashion and explore
                        how your choices can have Link positive impact on the
                        planet. From eco-friendly fabrics to ethical brands...
                      </p>
                      <Link
                       to={"/Blog_details"}
                        class="cs_post_btn cs_fs_16 cs_medium cs_primary_color"
                      >
                        <span>Read More</span>
                        <span class="cs_btn_arrow cs_accent_color">
                          <i class="fa-solid fa-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="cs_post cs_style_1">
                    <Link to={"/Blog_details"} class="cs_post_thumb cs_zoom">
                      <img
                           src={post}
                        alt="Post Image"
                        class="cs_zoom_in w-100"
                      />
                    </Link>
                    <div class="cs_post_meta">
                      <p class="cs_post_meta_info mb-0 cs_fs_14">
                        MARCH 18, 2023f
                      </p>
                    </div>
                    <div class="cs_post_info">
                      <h3 class="cs_post_title cs_fs_28 cs_semibold">
                        <Link href="blog_details.html">
                          Redefining style with eco-friendly choices
                        </Link>
                      </h3>
                      <p class="cs_post_subtitle">
                        Dive into the world of sustainable fashion and explore
                        how your choices can have Link positive impact on the
                        planet. From eco-friendly fabrics to ethical brands...
                      </p>
                      <Link
                       to={"/Blog_details"}
                        class="cs_post_btn cs_fs_16 cs_medium cs_primary_color"
                      >
                        <span>Read More</span>
                        <span class="cs_btn_arrow cs_accent_color">
                          <i class="fa-solid fa-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="cs_post cs_style_1">
                    <Link href="blog_details.html" class="cs_post_thumb cs_zoom">
                      <img
                             src={post}
                        alt="Post Image"
                        class="cs_zoom_in w-100"
                      />
                    </Link>
                    <div class="cs_post_meta">
                      <p class="cs_post_meta_info mb-0 cs_fs_14">
                        MARCH 18, 2023
                      </p>
                    </div>
                    <div class="cs_post_info">
                      <h3 class="cs_post_title cs_fs_28 cs_semibold">
                        <Link href="blog_details.html">
                          From workwear to wardrobe staple
                        </Link>
                      </h3>
                      <p class="cs_post_subtitle">
                        Take Link journey through the history of denim and discover
                        how it transformed from workwear into Link fashion icon.
                        Explore the latest denim trends...
                      </p>
                      <Link
                        href="blog_details.html"
                        class="cs_post_btn cs_fs_16 cs_medium cs_primary_color"
                      >
                        <span>Read More</span>
                        <span class="cs_btn_arrow cs_accent_color">
                          <i class="fa-solid fa-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="cs_post cs_style_1">
                    <Link to={"/Blog_details"} class="cs_post_thumb cs_zoom">
                      <img
                           src={post}
                        alt="Post Image"
                        class="cs_zoom_in w-100"
                      />
                    </Link>
                    <div class="cs_post_meta">
                      <p class="cs_post_meta_info mb-0 cs_fs_14">
                        MARCH 18, 2023f
                      </p>
                    </div>
                    <div class="cs_post_info">
                      <h3 class="cs_post_title cs_fs_28 cs_semibold">
                        <Link href="blog_details.html">
                          Redefining style with eco-friendly choices
                        </Link>
                      </h3>
                      <p class="cs_post_subtitle">
                        Dive into the world of sustainable fashion and explore
                        how your choices can have Link positive impact on the
                        planet. From eco-friendly fabrics to ethical brands...
                      </p>
                      <Link
                       to={"/Blog_details"}
                        class="cs_post_btn cs_fs_16 cs_medium cs_primary_color"
                      >
                        <span>Read More</span>
                        <span class="cs_btn_arrow cs_accent_color">
                          <i class="fa-solid fa-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="cs_post cs_style_1">
                    <Link href="blog_details.html" class="cs_post_thumb cs_zoom">
                      <img
                             src={post}
                        alt="Post Image"
                        class="cs_zoom_in w-100"
                      />
                    </Link>
                    <div class="cs_post_meta">
                      <p class="cs_post_meta_info mb-0 cs_fs_14">
                        MARCH 18, 2023
                      </p>
                    </div>
                    <div class="cs_post_info">
                      <h3 class="cs_post_title cs_fs_28 cs_semibold">
                        <Link href="blog_details.html">
                          Elevate your fashion game with statement jewelry
                        </Link>
                      </h3>
                      <p class="cs_post_subtitle">
                        Learn how to choose, style, and wear bold accessories
                        that express your unique personality and complete your
                        look.accessorize Your Way to...
                      </p>
                      <Link
                        href="blog_details.html"
                        class="cs_post_btn cs_fs_16 cs_medium cs_primary_color"
                      >
                        <span>Read More</span>
                        <span class="cs_btn_arrow cs_accent_color">
                          <i class="fa-solid fa-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="cs_blog_sidebar">
                <div class="cs_sidebar_widget cs_search">
                  <h3 class="cs_sidebar_widget_title cs_fs_21 cs_semibold">
                    Search Blog
                  </h3>
                  <div class="cs_search_box">
                    <input type="text" placeholder="Search..." />
                    <span class="cs_search_icon">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                  </div>
                </div>
                <div class="cs_sidebar_widget">
                  <h3 class="cs_sidebar_widget_title cs_fs_21 cs_semibold">
                    Categories
                  </h3>
                  <ul class="cs_category_list">
                    <li>
                      <Link href="#">Fashion (2)</Link>
                    </li>
                    <li>
                      <Link href="#">Style Tips (1)</Link>
                    </li>
                    <li>
                      <Link href="#">Jewelry (5)</Link>
                    </li>
                    <li>
                      <Link href="#">Accessories (1)</Link>
                    </li>
                    <li>
                      <Link href="#">Dresses (2)</Link>
                    </li>
                    <li>
                      <Link href="#">Beauty (4)</Link>
                    </li>
                  </ul>
                </div>
                <div class="cs_sidebar_widget">
                  <h3 class="cs_sidebar_widget_title cs_fs_21 cs_semibold">
                    Latest Blog
                  </h3>
                  <div class="cs_post cs_style_4">
                    <Link href="blog_details.html" class="cs_post_thumb">
                    <img src={post} alt="Image" />
                    </Link>
                    <div class="cs_post_info">
                      <h4 class="cs_post_title cs_fs_18 cs_medium">
                        <Link href="blog_details.html">Mastering the art of...</Link>
                      </h4>
                      <div class="cs_post_meta">20 Dec 2023</div>
                    </div>
                  </div>
                  <div class="cs_post cs_style_4">
                    <Link href="blog_details.html" class="cs_post_thumb">
                    <img src={post} alt="Image" />
                    </Link>
                    <div class="cs_post_info">
                      <h4 class="cs_post_title cs_fs_18 cs_medium">
                        <Link href="blog_details.html">Redefining style with...</Link>
                      </h4>
                      <div class="cs_post_meta">20 Dec 2023</div>
                    </div>
                  </div>
                  <div class="cs_post cs_style_4">
                    <Link href="blog_details.html" class="cs_post_thumb">
                      <img src={post} alt="Image" />
                    </Link>
                    <div class="cs_post_info">
                      <h4 class="cs_post_title cs_fs_18 cs_medium">
                        <Link href="blog_details.html">Tips for mixing and...</Link>
                      </h4>
                      <div class="cs_post_meta">20 Dec 2023</div>
                    </div>
                  </div>
                </div>
                <div class="cs_sidebar_widget">
                  <div class="cs_sidebar_tags">
                    <h3 class="cs_sidebar_widget_title cs_fs_21 cs_semibold">
                      Tags
                    </h3>
                    <div class="cs_tags">
                      <Link href="#" class="cs_tag_link">
                        Beauty
                      </Link>
                      <Link href="#" class="cs_tag_link">
                        Women
                      </Link>
                      <Link href="#" class="cs_tag_link">
                        Trend
                      </Link>
                      <Link href="#" class="cs_tag_link">
                        Fashion
                      </Link>
                      <Link href="#" class="cs_tag_link">
                        Minimal
                      </Link>
                      <Link href="#" class="cs_tag_link">
                        Sports
                      </Link>
                      <Link href="#" class="cs_tag_link">
                        Cloths
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cs_height_135 cs_height_lg_80"></div>
      </section>
      <End></End>
    </div>
  );
};
export default Blog;