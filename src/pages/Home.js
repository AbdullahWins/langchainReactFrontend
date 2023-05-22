import React from "react";
import ThemeToggler from "../components/ThemeToggler/ThemeToggler";
import BusinessNameGenerator from "../components/BusinessNameGenerator/BusinessNameGenerator";
import LangChainChat from "../components/LangChainChat/LangChainChat";

const Home = () => {
  return (
    <div>
      <ThemeToggler></ThemeToggler>
      <BusinessNameGenerator></BusinessNameGenerator>
      <LangChainChat></LangChainChat>
    </div>
  );
};

export default Home;
