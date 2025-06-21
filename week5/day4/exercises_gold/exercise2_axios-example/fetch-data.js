import axios from "axios";

export const fetchPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    response.data.forEach((post) => {
      console.log(post.title);
    });
  } catch (error) {
    console.error("Error fetching posts:", error.message);
  }
};
