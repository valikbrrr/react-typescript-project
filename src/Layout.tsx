import { useState } from "react";
import Footer from "./HomePageComponents/Footer";
import Header from "./HomePageComponents/Header";
import Chat from "./HomePageComponents/ChatQuestion/Chat";

const Layout = () => {
  let [IsChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="">
      <div className="relative">
        <Header />
        <div className="h-96 border-gray-800 font-bold text-9xl text-center ">
          content
        </div>
        <Footer setIsChatOpen={setIsChatOpen} />
      </div>
      <div className="">{IsChatOpen && <Chat />}</div>
    </div>
  );
};

export default Layout;
