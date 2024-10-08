import React,{useState} from "react";
import Home from "../compoments/home";
import End from "../compoments/end";
import axiosInstance from "../axios";
const data = () => {
    const [Item, setItem] = useState([]);
    const fetchapi = () => {
        axiosInstance
            .get("api/website")
            .then(function (response) {
                setItem(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => { });
    }



    return (
        <div>
            <Home data={fetchapi} Item={Item}></Home>
            <End data={fetchapi}></End>
        </div>
    )
}
export default data;