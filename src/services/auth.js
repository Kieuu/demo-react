import axios from "axios";

export const Login = async () => {
  // Call API, duoc goi khi bam button login tren giao dien
  const res = await axios.post("https://simple-backend.onrender.com/login", {
    username: "user2",
    password: "1256kieuanh",
  });
  localStorage.setItem('token',JSON.stringify(res.data.access_token))
  window.location.replace("/todo");
};

export const Logout = () => {
  // Xoa token
  localStorage.removeItem("token")
  window.location.replace("/");
}