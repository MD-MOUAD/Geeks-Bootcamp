import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log("Fetched Data:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
