import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import Tweetpage from "./pages/TweetPage";
import GlobalStyle from "./globalStyle.styled";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<Tweetpage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
