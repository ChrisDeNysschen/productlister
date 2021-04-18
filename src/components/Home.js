import React from "react";

const Home = ({ title }) => {
  return (
    <>
      <div className="home">
        <h1>Welcome to Vermillion Design</h1>
        <h2>Your One-Stop Shop for Digital</h2>
      </div>
    </>
  );
};
Home.defaultProps = {
  title: "Vermillion Design",
};
export default Home;
