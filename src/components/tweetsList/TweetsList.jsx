import React from "react";
import formatNumberWithCommas from "../../utils/formatNumber";
import {
  TweetList,
  TweetItem,
  TweetText,
  TweetFollowButton,
  TweetImage,
  TweetLogo,
  TweetLine,
  TweetCircle,
  AvatarWrapp,
  TweetAvatar,
} from "./TweetList.styled";
import TweetImageSrc from "../../images/TweetImage.png";
import TweetLogoSrc from "../../images/TweetLogo.png";
import TweetLineSrc from "../../images/Line.png";
import TweetCircleSrc from "../../images/Ellipse.png";

const TweetsList = ({ tweets, onFollow }) => {
  return (
    <TweetList>
      {tweets.map(({ id, followers, avatar, tweets, isFollowing }) => (
        <TweetItem key={id} imgUrl={TweetImageSrc}>
          <TweetImage src={TweetImageSrc} alt="Simple image" />
          <TweetLogo src={TweetLogoSrc} alt="Goit logo" />
          <AvatarWrapp>
            <TweetLine src={TweetLineSrc} alt="White line" />
            <TweetCircle src={TweetCircleSrc} alt="White circle" />
            <TweetAvatar src={avatar} alt="Avatar" />
          </AvatarWrapp>
          <TweetText>{tweets} Tweets </TweetText>
          <TweetText>{formatNumberWithCommas(followers)} Followers</TweetText>
          <TweetFollowButton
            style={{ backgroundColor: isFollowing ? "#5CD3A8" : "" }}
            onClick={() => onFollow(id, isFollowing, followers)}
          >
            {isFollowing ? "Following" : "follow"}
          </TweetFollowButton>
        </TweetItem>
      ))}
    </TweetList>
  );
};

export default TweetsList;
