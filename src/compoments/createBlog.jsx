import { useState } from "react";
import ReactEditor from "react-text-editor-kit";
import axiosInstance from "../axios";

const CreateBlog=()=> {
    const [value, setValue] = useState("");
    const [images, setImages] = useState([]);
  
    const handleChange = (value) => {
      setValue(value);
    };
  
    // Hàm gửi dữ liệu
    const handleSubmit = async () => {
      try {
        const formData = new FormData();
        formData.append("description", value); // Lưu chuỗi HTML kèm ảnh base64 vào description
  
        const response = await axiosInstance.post("/api/user/upImg", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
  
        if (response.status === 200) {
          alert("Blog đã được tạo thành công!");
        } else {
          alert("Có lỗi xảy ra!");
        }
      } catch (error) {
        console.error("Lỗi khi gửi dữ liệu:", error);
        alert("Có lỗi xảy ra!");
      }
    };
  
    // Hàm xử lý ảnh khi upload từ ReactEditor và chuyển sang base64
    const imageHandler = (e) => {
      const file = e.image; // Lấy file ảnh từ trình soạn thảo
  
      // Chuyển file ảnh thành base64
      const reader = new FileReader();
      reader.readAsDataURL(file); // Chuyển ảnh sang base64
      reader.onloadend = () => {
        const base64String = reader.result; // Base64 của ảnh
  
        // Thêm thẻ <img> với src là base64 vào vị trí hiện tại trong editor
        setValue((prevValue) => `${prevValue}<img src="${base64String}" alt="Uploaded Image" />`);
      };
  
      // Lưu ảnh vào state (nếu cần thiết để lưu trữ)
      setImages((prevImages) => [...prevImages, file]);
    };
  
    const get_editor_ref = (value) => {};
  
    return (
      <div className="App">
        <ReactEditor
          value={value}
          getEditorRef={get_editor_ref}
          onChange={handleChange}
          mainProps={{ className: "red" }}
          placeholder="Viết nội dung blog tại đây"
          image_handler={imageHandler} // Hàm xử lý ảnh
        />
        {/* Thêm nút để gửi dữ liệu */}
        <button onClick={handleSubmit}>Gửi Blog</button>
      </div>
    );
  }
  
  

export default CreateBlog;
