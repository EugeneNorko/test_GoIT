import axios from "axios";

const getTweets = () => {
  return axios.get("https://643920a74660f26eb1aafc88.mockapi.io/users");
};

const putTweets = (id, isFollowing, followers) => {
  return axios
    .put(`https://643920a74660f26eb1aafc88.mockapi.io/users/${id}`, {
      isFollowing: isFollowing,
      followers,
    })
    .catch((error) => console.log("ERROR" + error));
};

export { getTweets, putTweets };
