import { useState } from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import Galery from "./Galery";
import Header from "./Header";
import Hero from "./Hero";
import Subscription from "./Subscription";
import Chat from "./ChatQuestion/Chat";

const HomePage = () => {
  let [IsChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="h-full absolute box-border">
      <div className="grid bg-black px-16 max-[675px]:px-8 justify-items-center max-w:[100%]">
        <Header />
        <Hero />
        <Galery />
        <Cards />
        <Subscription />
        <Footer setIsChatOpen={setIsChatOpen} IsChatOpen={IsChatOpen} />
      </div>
      {IsChatOpen && <Chat setIsChatOpen={setIsChatOpen} />}
    </div>
  );
};

export default HomePage;

// сtrl + shift + M = адаптив
