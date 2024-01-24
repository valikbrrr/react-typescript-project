// import { useState } from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import Galery from "./Galery";
import Header from "./Header";
import Hero from "./Hero";
import Subscription from "./Subscription";
import Chat from "./ChatQuestion/Chat";
import { useAppSelector } from "../hooksRedux";
import { RootState } from "../store";

const HomePage = () => {
  const isChatOpen = useAppSelector(
    (state: RootState) => state.sliceChat.valueChat
  );

  return (
    <div className="h-full absolute box-border">
      <div className="grid bg-black px-16 max-[675px]:px-8 justify-items-center max-w:[100%]">
        <Header />
        <Hero />
        <Galery />
        <Cards />
        <Subscription />
        <Footer />
      </div>
      {isChatOpen && <Chat />}
    </div>
  );
};

export default HomePage;

// сtrl + shift + M = адаптив
