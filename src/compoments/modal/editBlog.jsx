import { useEffect, useState } from "react";
import ReactEditor from "react-text-editor-kit";
import axiosInstance from "../../axios";


const EditBlog = () => {
    const [value, setValue] = useState(""); // Nội dung blog (văn bản và ảnh)
    const [images, setImages] = useState([]); // Lưu ảnh trong quá trình upload
    
    // Hàm xử lý khi nội dung trong editor thay đổi
    const handleChange = (newValue) => {
      setValue(newValue); // Cập nhật nội dung khi có thay đổi
    };
  
    // Hàm gửi dữ liệu blog lên server
    const handleSubmit = async () => {
      try {
        
  
        const response = await axiosInstance.get(`/api/blog_details/12`);
  
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
  
    // Hàm xử lý ảnh khi tải lên từ editor
    const imageHandler = (e) => {
      const file = e.image; // Lấy file ảnh từ trình soạn thảo
  
      // Chuyển file ảnh thành base64
      const reader = new FileReader();
      reader.readAsDataURL(file); // Chuyển ảnh sang base64
      reader.onloadend = () => {
        const base64String = reader.result; // Base64 của ảnh
  
        // Thêm thẻ <img> với src là base64 vào nội dung editor
        setValue((prevValue) => `${prevValue}<img src="${base64String}" alt="Uploaded Image" />`);
      };
  
      // Lưu ảnh vào state để có thể xử lý sau (ví dụ lưu vào server)
      setImages((prevImages) => [...prevImages, file]);
    };
  
    const get_editor_ref = (value) => {};
  useEffect(()=>{
    handleSubmit();
  },[])
    return (
      <div className="App">
        <ReactEditor
          value={value} // Nội dung của editor
          getEditorRef={get_editor_ref}
          onChange={handleChange} // Xử lý khi có thay đổi nội dung
          mainProps={{ className: "red" }}
          placeholder="Viết nội dung blog tại đây"
          image_handler={imageHandler} // Xử lý khi ảnh được tải lên
        />
        {/* Nút để gửi dữ liệu blog */}
        <button onClick={handleSubmit}>Gửi Blog</button>
      </div>
    );
  };

export default EditBlog;
