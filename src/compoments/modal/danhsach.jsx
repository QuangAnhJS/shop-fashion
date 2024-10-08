import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";

import DataTable from "react-data-table-component";
import movies from "./movies";
import SortIcon from "@material-ui/icons/ArrowDownward";

import "react-data-table-component-extensions/dist/index.css";

import { columns, data } from "./data";
import "./styles.css";
import { css } from "styled-components";

const Danhsach = () => {
  const [isGetAllProduct, setGetAllProduct] = useState([]);
  const [tableRowsData, setTableRowsData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const GetAllProduct = async () => {
    try {
      const res = await axiosInstance.get("api/user/getAllProduct");
      setTableRowsData(res.data.data);
      console.log("t", tableRowsData[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProduct = async (id, event) => {
    event.preventDefault();
    try {
      const res = await axiosInstance.post(`api/user/deleteProduct`,{
        id:id
      }) ;
     await GetAllProduct();
    
    }catch(error){
      console.log(error);
    }
  };
  useEffect(() => {
    GetAllProduct();
  }, []);
  const ok = (id) => {
    console.log(id);
  };

  const onChange = async (e) => {
    var searchData = movies.filter((item) => {
      if (
        item.title
          .toString()
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) {
        return item;
      }
    });
    setTableRowsData(searchData);
  };
  const handleSelectedRowsChange =async (state) => {
    console.log('Selected Rows: ', state.selectedRows);
    setSelectedRows(state.selectedRows);

  };
  useEffect(() => {
    console.log('Selected Rows đã thay đổi:', selectedRows);
  }, [selectedRows]);

  const formData = new FormData();
  selectedRows.forEach((item, index) => {
    formData.append(`id[${index}][id]`, item.id);
  });
  const deleteProducts=async(id)=>{
    try
    {
      const res= await axiosInstance.post("api/user/deleteProducts",
        formData
       );
       await GetAllProduct();
    }catch(error){
      console.log(error);
    }
    
  }
  const headerResponsive = [
    {
      name: <div>Tên sản phẩm</div>,
      selector: "name",
      sortable: true,
    },
    {
      name: "ảnh ",

      cell: (row) => (
        <img
          src={row.img.img1}
          alt="Ảnh sản phẩm"
          style={{ width: "100px", height: "auto", borderRadius: "4px" }} 
        />
      ),
      sortable: true,
    },
    {
      name: "Giá cả",
      selector: "gia",
      sortable: true,
    },
    {
      name: "Kich co",
      cell: (row) => (
        <div>
          {row.sizes.map((size, index) => (
            <div key={index}>{size.sizes}</div>
          ))}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Số lượng",
      cell: (row) => (
        <div>
          {row.sizes.map((size, index) => (
            <div key={index}>{size.quanlity}</div>
          ))}
        </div>
      ),
      sortable: true,
      right: true,
    },
    {
      name: "Màu sắc",
      cell: (row) => (
        <div>
          {row.sizes.map((size, index) => (
            <div key={index}>{size.colors}</div>
          ))}
        </div>
      ),
      sortable: true,
      right: true,
    },
    {
      name: "Loại sản phẩm",
      selector: "category.name",
      sortable: false,
      right: true,
    },
    {
      name: "ation",
      cell: (row) => (
        <div>
          <button onClick={(event) => deleteProduct(row.id,event)}>Xóa</button>
          {/* <button onClick={() => edit(row.id)}>Sửa</button> */}
        </div>
      ),
      sortable: true,
      right: true,
      css: "with",
    },
  ];

  useEffect(() => {}, [tableRowsData]);

  return (
    <div className="mt-5 mb-5 custum p-3">
      <h3 style={{ fontWeight: "bold" }}>Danh sách sản phẩm</h3>
      <DataTable
        title="Movies"
        columns={headerResponsive}
        data={tableRowsData}
        defaultSortField="title"
        sortIcon={<SortIcon />}
        pagination
        selectableRows
        onSelectedRowsChange={handleSelectedRowsChange}
      />
      <button onClick={deleteProducts}>xóa</button>
      {/* <input className="" type="text" style={{ width: "80%" }} /> */}
    </div>
  );
};

export default Danhsach;
