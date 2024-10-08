import React, { useEffect, useState } from "react";
import Menu from "./menu";
import post_details from "../assets/img/post_details.jpg";
import End from "./end";
import axiosInstance from "../axios";
import Loading from "./loading";
import { useNavigate, useParams } from "react-router-dom";
const Blog_details = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const navigate = new useNavigate();
  const [isLoading,setLoading]=useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(`/api/blog_details/${id}`);
      setData(res.data.data);
      console.log(res.data);
    } catch (error) {
      navigate("/404");
    }finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <div>
        {isLoading ? (<Loading/>):""}
      <header className="cs_site_header cs_style_1 cs_primary_color cs_site_header_full_width cs_sticky_header">
        <Menu></Menu>
      </header>
      <div className="cs_height_80 cs_height_lg_80"></div>
      
      <section>
      {data ? (
        <div className="layout"
          dangerouslySetInnerHTML={{ __html: data.description }} // Sử dụng thuộc tính này để hiển thị HTML
        />
      ) : ""}
      </section>
      <End></End>
    </div>
  );
};
export default Blog_details;
