import React, { useEffect, useState } from "react";
import { getTweets, putTweets } from "../utils/tweetsApi";
import TweetsList from "../components/tweetsList/TweetsList";
import { TitleTweet, BackLink } from "./TweetPage.styled";
import { ContainerMain } from "./HomePage.styled";

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
      : Number(followers) + 1;
    await putTweets(id, !isFollowing, changedFollowers);
    getTweets()
      .then((res) => setTweets(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <section style={{ padding: "30px 0 30px 0" }}>
      <ContainerMain>
        <TitleTweet>Tweets</TitleTweet>
        <BackLink to="/">Back home</BackLink>
        <TweetsList tweets={tweets} onFollow={onFollowHandler} />
      </ContainerMain>
    </section>
  );
};

export default Tweetpage;
