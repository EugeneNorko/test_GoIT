import styled from "styled-components";

const TweetList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
  @media screen and (min-width: 768px) {
    margin: -25px;
  }
`;

const TweetItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 290px;
  min-height: 460px;
  padding: 278px 10px 36px 10px;
  margin: 0 0 25px 0;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 20px;
  box-shadow: -3px 7px 21px rgba(0, 0, 0, 0.23);
  transition: box-shadow 0.3s ease-in-out;
  color: #ebd8ff;

  &:hover,
  &:focus {
    box-shadow: -4px 9px 26px rgba(0, 0, 0, 0.8);
  }
  @media screen and (min-width: 768px) {
    margin: 25px;
    width: 343px;
  }
  @media screen and (min-width: 1280px) {
    margin: 25px;
    width: 383px;
  }
`;

const TweetImage = styled.img`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%);
  width: 270px;
  @media screen and (min-width: 768px) {
    width: 310px;
  }
  @media screen and (min-width: 1280px) {
    width: 308px;
  }
`;

const TweetLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
`;
const AvatarWrapp = styled.div`
  position: absolute;
  top: 178px;
  diplay: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 80px;
`;
const TweetLine = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const TweetCircle = styled.img`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 80px;
`;
const TweetAvatar = styled.img`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 70px;
  border-radius: 50%;
  overlay: hidden;
`;

const TweetText = styled.p`
  color: inherit;
  text-align: center;
  font-weight: 500;
  font-size: 24px;

  & + & {
    margin-top: 16px;
  }
`;

const TweetFollowButton = styled.button`
  display: grid;
  place-items: center;
  margin-top: 26px;
  width: 196px;
  min-height: 50px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #373737;

  &:hover {
    background-color: #d1a5ff;
  }
`;

export {
  TweetList,
  TweetItem,
  TweetImage,
  TweetLogo,
  AvatarWrapp,
  TweetLine,
  TweetCircle,
  TweetAvatar,
  TweetText,
  TweetFollowButton,
};
