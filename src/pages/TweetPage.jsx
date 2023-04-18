import React, { useEffect, useState } from "react";
import { getTweets, putTweets } from "../utils/tweetsApi";
import TweetsList from "../components/tweetsList/TweetsList";
import { TitleTweet, BackLink, ShowMoreButton } from "./TweetPage.styled";
import { ContainerMain } from "./HomePage.styled";

const Tweetpage = () => {
  const [tweets, setTweets] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(() => {
    const currentPageFromStorage = localStorage.getItem("currentPage");
    return currentPageFromStorage ? parseInt(currentPageFromStorage, 10) : 1;
  });

  useEffect(() => {
    getTweets()
      .then((res) => {
        setTweets(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const startIndex = 0;
    const endIndex = currentPage * 8;
    setVisibleItems(tweets.slice(startIndex, endIndex));
  }, [tweets, currentPage]);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const pagesCount = Math.ceil(tweets.length / 8);

  const handleLoadMoreClick = () => {
    const startIndex = currentPage * 8;
    const endIndex = startIndex + 8;
    const newVisibleItems = tweets.slice(startIndex, endIndex);
    setVisibleItems([...visibleItems, ...newVisibleItems]);
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const onFollowHandler = async (id, isFollowing, followers) => {
    const changedFollowers = isFollowing
      ? Number(followers) - 1
      : Number(followers) + 1;
    await putTweets(id, !isFollowing, changedFollowers);
    await getTweets()
      .then((res) => setTweets(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <section style={{ padding: "30px 0 30px 0" }}>
      <ContainerMain>
        <TitleTweet>Tweets</TitleTweet>
        <BackLink to="/">Back home</BackLink>
        <TweetsList tweets={visibleItems} onFollow={onFollowHandler} />
        {currentPage < pagesCount && (
          <ShowMoreButton onClick={handleLoadMoreClick}>
            Show more
          </ShowMoreButton>
        )}
      </ContainerMain>
    </section>
  );
};

export default Tweetpage;
