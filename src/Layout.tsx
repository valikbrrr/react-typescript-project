import { useState } from "react";
import Footer from "./HomePageComponents/Footer";
import Header from "./HomePageComponents/Header";
import Chat from "./HomePageComponents/Chat";

const Layout = () => {
  let [IsChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative">
      <Header />
      <div className="h-96 border-gray-800 font-bold text-9xl text-center ">
        content
      </div>
      <Footer setIsChatOpen={setIsChatOpen} />
      {IsChatOpen && <Chat />}
    </div>
  );
};

export default Layout;
