import React from "react";

const TweetsList = ({ tweets, onFollow }) => {
  return (
    <ul>
      {tweets.map(({ id, followers, user, avatar, tweets, isFollowing }) => (
        <li key={id}>
          <p>followers {followers}</p>
          <p>name {user}</p>
          <button onClick={() => onFollow(id, isFollowing, followers)}>
            {isFollowing ? "Following" : "follow"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TweetsList;
