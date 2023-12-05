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
    <div className="h-full absolute">
      <div className="bg-black px-16">
        <Header />
        <Hero />
        <Galery />
        <Cards />
        <Subscription />
        <Footer setIsChatOpen={setIsChatOpen} />
      </div>
      {IsChatOpen && <Chat setIsChatOpen={setIsChatOpen} />}
    </div>
  );
};

export default HomePage;

// сtrl + shift + M = адаптив
