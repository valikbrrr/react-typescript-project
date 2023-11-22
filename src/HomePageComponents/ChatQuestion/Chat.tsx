import HeaderChat from "./HeaderChat";
import MenuChat from "./MenuChat";
import BodyChat from "./BodyChat";
import { useState } from "react";
import SecondaryMenu from "./SecondaryMenu";
import ChatInput from "./ChatInput";

interface IFooterProps {
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Chat = ({ setIsChatOpen }: IFooterProps) => {
  let [IsOpenNavMenu, setIsOpenNavMenu] = useState(false);

  return (
    <div className="fixed right-5 bottom-6 bg-white rounded w-80 flex flex-col max-h-[640px]">
      <HeaderChat />
      <MenuChat
        setIsChatOpen={setIsChatOpen}
        setIsOpenNavMenu={setIsOpenNavMenu}
      />
      {IsOpenNavMenu && <SecondaryMenu />}
      <BodyChat />
      <ChatInput />
    </div>
  );
};

export default Chat;
