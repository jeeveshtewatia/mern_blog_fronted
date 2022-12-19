import axios from "axios";

// const url = "https://backend-project-lime.vercel.app/api/home";
const url = "https://mongodb-reactblogproject.vercel.app/api/blog";

const fetchData = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {}
};
export default fetchData;
