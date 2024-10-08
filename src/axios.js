import axios from 'axios';

export const getToken = () => localStorage.getItem("token");
export const Role = () => localStorage.getItem("Role");
const axiosInstance = axios.create({
    baseURL: "https://fashion.anhdev.online/", // URL cơ bản của API
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}` 
    },
    // withCredentials: true,
});
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response && error.response.status === 401) {
            // Token hết hạn hoặc không hợp lệ
            localStorage.clear()
            window.location.href = '/login'; // Chuyển hướng đến trang đăng nhập
        } else {
            console.error('An error occurred:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
