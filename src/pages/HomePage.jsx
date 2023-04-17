import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <section>
      <h1>Pleased to meet you on my page. Be happy!</h1>
      <Link to="tweets">Go to tweets</Link>
    </section>
  );
};
export default HomePage;
