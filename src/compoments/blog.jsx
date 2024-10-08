import React, { useEffect, useState } from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";
import post from "../assets/img/post1.jpg";
import End from "./end";
import axiosInstance from "../axios";
const Blog = () => {
  const [Data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axiosInstance.get("/api/blog");
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <header className="cs_site_header cs_style_1 cs_primary_color cs_site_header_full_width cs_sticky_header">
        <Menu></Menu>
      </header>
      <div className="cs_height_80 cs_height_lg_80"></div>
      
      {Data &&
        Data.map((item) => (
          <div
            className="layout"
            dangerouslySetInnerHTML={{ __html: item.img + ' ' + item.remaining}}
         
          />
        ))}
      <End></End>
    </div>
  );
};
export default Blog;
