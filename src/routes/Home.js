import React, { useEffect } from "react";
import "./stylesheets/Home.css";
import { Footer } from "../components";
import { Header } from "../containers";

const Home = () => {
  useEffect(() => {
    document.title = "M's forum";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header></Header>
      <div>홈</div>
      <Footer></Footer>
    </>
  );
};

export default Home;
