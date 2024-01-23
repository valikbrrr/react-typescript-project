// import { useState } from "react";
import Footer from "./HomePageComponents/Footer";
import Header from "./HomePageComponents/Header";
import Chat from "./HomePageComponents/ChatQuestion/Chat";
import { useAppSelector } from "./hooksRedux";
import { RootState } from "./store";

const Layout = () => {
  const isChatOpen = useAppSelector((state: RootState) => state.slice.value);

  return (
    <div className="">
      <div className="relative">
        <Header />
        <div className="h-96 border-gray-800 font-bold text-9xl text-center ">
          content
        </div>
        <Footer /> {/*IsChatOpen={IsChatOpen} */}
      </div>
      {isChatOpen && <Chat />}
    </div>
  );
};

export default Layout;
