import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTweets, putTweets } from "../utils/getTweetsApi";
import TweetsList from "../components/tweetsList/TweetsList";

const Tweetpage = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    getTweets()
      .then((res) => setTweets(res.data))
      .catch((err) => console.log(err));
  }, []);

  const onFollowHandler = async (id, isFollowing, followers) => {
    const changedFollowers = isFollowing
      ? Number(followers) - 1
      : Number(followers + 1);
    await putTweets(id, !isFollowing, changedFollowers);
    getTweets()
      .then((res) => setTweets(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <section>
      <h2>Tweets</h2>
      <Link to="/">Back home</Link>
      <TweetsList tweets={tweets} onFollow={onFollowHandler} />
    </section>
  );
};

export default Tweetpage;
