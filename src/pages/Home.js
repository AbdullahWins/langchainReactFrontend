import React from "react";
import ThemeToggler from "../components/ThemeToggler/ThemeToggler";
import BusinessNameGenerator from "../components/BusinessNameGenerator/BusinessNameGenerator";

const Home = () => {
  return (
    <div>
      <ThemeToggler></ThemeToggler>
      <BusinessNameGenerator></BusinessNameGenerator>
    </div>
  );
};

export default Home;
