import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";

const From = () => {
  const navigate = useNavigate();
  const [isOption, setOption] = useState([""]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [imageURL1, setImageURL1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [imageURL2, setImageURL2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [imageURL3, setImageURL3] = useState(null);
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    name: "",
    gia: "",
    danhmuc: "",
    describe:""
  });
  const [sizes, setSizes] = useState([{ size: "", quantity: "", colors: "" }]);

  // Hàm thêm input cho size
  const addSizeInput = (event) => {
    event.preventDefault();
    setSizes([...sizes, { size: "", quantity: "", colors: "" }]);
  };
  const handleSizeChange = (index, event) => {
    const { name, value } = event.target;
    const newSizes = sizes.map((input, i) =>
      i === index ? { ...input, [name]: value } : input
    );
    setSizes(newSizes);
  };

  const Submit = async (event) => {
    event.preventDefault();
    try {
      if (input.name == "") {
        setError("Vui lòng nhập tên sản phẩm");
        return;
      }
      if (input.gia == "") {
        setError("Vui lòng nhập giá sản phẩm");
        return;
      }
      if (input.danhmuc == "") {
        setError("Vui lòng chọn danh mục sản phẩm");
        return;
      }
      if (selectedImage == null) {
        setError("Vui lòng chọn ảnh sản phẩm");
        return;
      }
      let hasError = false;
      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("gia", input.gia);
      formData.append("category_id", input.danhmuc);
      formData.append("describe",input.describe);
      formData.append("img1", selectedImage);
      formData.append("img2", selectedImage1);
      formData.append("img3", selectedImage2);
      formData.append("img4", selectedImage3);
      sizes.forEach((size, index) => {
        if (size.size === "") {
          setError("Vui lòng nhập kích cỡ");
          hasError = true;
        }
        if (size.quantity === "") {
          setError("Vui lòng nhập số lượng kích cỡ");
          hasError = true;
        }
        if (size.colors === "") {
          setError("Vui lòng nhập mau sac");
          hasError = true;
        }
        formData.append(`sizes[${index}][size]`, size.size);
        formData.append(`sizes[${index}][quantity]`, size.quantity);
        formData.append(`sizes[${index}][colors]`, size.colors);
      });
      // Nếu có lỗi, dừng xử lý

      if (hasError) return;
      setError("");
      const response = await axiosInstance.post(
        "/api/user/themsanpham",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Đặt Content-Type là multipart/form-data
          },
        }
      );
      if (response.data.status == "success") {
        console.log("thành cônng");
        alert("thành công");
        setInput({
          name: "",
          gia: "",
          danhmuc: "",
        });
        setSelectedImage(null);
        setSelectedImage1(null);
        setSelectedImage2(null);
        setSelectedImage3(null);

        // Reset URL của ảnh (nếu cần)
        setImageURL(null);
        setImageURL1(null);
        setImageURL2(null);
        setImageURL3(null);
        setSizes([{ size: "", quantity: "" }]);
        window.location.reload();
      } else {
        console.log("hhh");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(input);
  };

  const handleImg = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImageURL(URL.createObjectURL(file)); // Tạo URL để hiển thị ảnh preview
    }
  };
  const handleImg1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage1(file);
      setImageURL1(URL.createObjectURL(file));
    }
  };
  const handleImg2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage2(file);
      setImageURL2(URL.createObjectURL(file));
    }
  };
  const handleImg3 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage3(file);
      setImageURL3(URL.createObjectURL(file));
    }
  };
  const fetchManagerCategory = async () => {
    try {
      const res = await axiosInstance.get("/api/user/category");
      console.log(res.data.data);
      setOption(res.data.data);
    } catch (error) {
      navigate("/Login");
    }
  };
  useEffect(() => {
    fetchManagerCategory();
  }, []);

  return (
    <form className="mt-5 mb-5 p-3 custum" style={{ backgroundColor: "white" }}>
      <h3 style={{ fontWeight: "bold" }}>Thêm sản phẩm</h3>
      <div class="mb-3 floating-label">
        <input
          className="form-control"
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
          required
          placeholder=""
        />
        <label className="form" for="name">Nhập Tên</label>
      </div>
      <div class="mb-3 floating-label">
        <input
          className="form-control"
          type="number"
          name="gia"
          value={input.gia}
          onChange={handleChange}
          required
          placeholder=""
        />
        <label className="form" for="name">Nhập giá</label>
      </div>

      <select
        class="form-select custom-select"
        aria-label="Default select example"
        value={input.danhmuc}
        onChange={handleChange}
        name="danhmuc"
        required
      >
        <option selected>Chọn danh muc</option>
        {isOption.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <div class="mb-3 floating-label">
        <input
          className="form-control"
          type="text"
          name="describe"
          value={input.describe}
          onChange={handleChange}
          required
          placeholder=""
        />
        <label className="form" for="name">describe</label>
      </div>
      <div class="mb-3 floating-label">
        <label className="form" for="name">Nhập ảnh chính</label>
      </div>
      <div className="mt-3">
        <div className="row">
          <div className="col-8 custum-col">
            <input
              className="form-control"
              type="file"
              name="img"
              multiple
              onChange={handleImg}
            />
          </div>
          <div className="col-4">
            {imageURL && (
              <img className="custom-img" src={imageURL} alt="Ảnh đã chọn" />
            )}
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="row">
          <div className="col-8 custum-col">
            <input
              className="form-control"
              type="file"
              name="img1"
              multiple
              onChange={handleImg1}
            />
          </div>
          <div className="col-4">
            {imageURL1 && (
              <img className="custom-img" src={imageURL1} alt="Ảnh đã chọn" />
            )}
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="row">
          <div className="col-8 custum-col">
            <input
              className="form-control"
              type="file"
              name="img2"
              multiple
              onChange={handleImg2}
            />
          </div>
          <div className="col-4">
            {imageURL2 && (
              <img className="custom-img" src={imageURL2} alt="Ảnh đã chọn" />
            )}
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="row">
          <div className="col-8 custum-col">
            <input
              className="form-control"
              type="file"
              name="img3"
              multiple
              onChange={handleImg3}
            />
          </div>
          <div className="col-4">
            {imageURL3 && (
              <img className="custom-img" src={imageURL3} alt="Ảnh đã chọn" />
            )}
          </div>
        </div>
      </div>
      {/* Các phần nhập ảnh khác tương tự */}
      {sizes.map((input, index) => (
        <div className="mb-3 floating-label" key={index}>
          <div className="row">
            <div className="col-6">
              <input
                className="form-control"
                type="text"
                name="size"
                value={input.size}
                onChange={(event) => handleSizeChange(index, event)}
                placeholder="Nhập size"
              />
            </div>
            <div className="col-6">
              <input
                className="form-control"
                type="text"
                name="quantity"
                value={input.quantity}
                onChange={(event) => handleSizeChange(index, event)}
                placeholder="Nhập số lượng"
              />
            </div>
            <div className="col-6">
              <input
                className="form-control"
                type="text"
                name="colors"
                value={input.colors}
                onChange={(event) => handleSizeChange(index, event)}
                placeholder="Nhập màu sắc"
              />
            </div>
          </div>
        </div>
      ))}
      <button onClick={addSizeInput}>Thêm size</button>

      {error && <p className="text-danger">{error}</p>}
      <button
        className="col-12 p-2 mt-4"
        style={{
          backgroundColor: "black",
          border: "none",
          color: "white",
          fontWeight: "bold",
        }}
        onClick={Submit}
      >
        <b></b> Submit
      </button>
    </form>
  );
};

export default From;
