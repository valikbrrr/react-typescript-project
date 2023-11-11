import { useState } from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import Galery from "./Galery";
import Header from "./Header";
import Hero from "./Hero";
import Subscription from "./Subscription";
import Chat from "./Chat";

const HomePage = () => {
  let [IsChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="bg-black h-full">
      <Header />
      <Hero />
      <Galery />
      <Cards />
      <Subscription />
      <Footer setIsChatOpen={setIsChatOpen} />
      {IsChatOpen && <Chat />}
    </div>
  );
};

export default HomePage;
