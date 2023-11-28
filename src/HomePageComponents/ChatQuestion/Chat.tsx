import HeaderChat from "./HeaderChat";
import MenuChat from "./MenuChat";
import BodyChat from "./BodyChat";
import { useState, useRef } from "react";
import NavHelpMenu from "./NavHelpMenu";
import ChatInput from "./ChatInput";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

interface IFooterProps {
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Chat = ({ setIsChatOpen }: IFooterProps) => {
  const chatRef = useRef<HTMLDivElement | null>(null);
  let [IsOpenNavMenu, setIsOpenNavMenu] = useState(false);

  const outsideClickHandler = (event: MouseEvent) => setIsChatOpen(false);

  useOnClickOutside(chatRef, outsideClickHandler);

  return (
    <div
      ref={chatRef}
      className="fixed right-5 bottom-6 bg-white rounded-t rounded-b w-80 flex flex-col max-h-[640px]"
    >
      <HeaderChat />
      <MenuChat
        setIsChatOpen={setIsChatOpen}
        setIsOpenNavMenu={setIsOpenNavMenu}
      />
      {IsOpenNavMenu && <NavHelpMenu setIsOpenNavMenu={setIsOpenNavMenu} />}
      <BodyChat />
      <ChatInput />
    </div>
  );
};

export default Chat;

// alt + up/down - движ
