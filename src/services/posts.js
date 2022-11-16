import axios from "axios";

export const getAllPosts = async () => {
  const config = {
    headers: {
      authorization:
         localStorage.getItem("token")
          ? "Bearer " + localStorage.getItem("token").replaceAll('"', "")
          : "",
    },
  };
  const res = await axios.get(
    "https://simple-backend.onrender.com/posts",
    config
  );
  console.log(res);
  console.log(localStorage.getItem("token"));
};
