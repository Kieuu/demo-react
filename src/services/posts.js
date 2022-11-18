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
  await axios.get(
    "https://simple-backend.onrender.com/posts",
    config
  );
};
