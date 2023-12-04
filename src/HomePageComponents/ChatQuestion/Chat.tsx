import HeaderChat from "./HeaderChat";
import MenuChat from "./MenuChat";
import BodyChat from "./BodyChat";
import { useState, useRef } from "react";
import NavHelpMenu from "./NavHelpMenu";
import ChatInput from "./ChatInput";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import SmileText from "./SmileText";

interface IFooterProps {
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Chat = ({ setIsChatOpen }: IFooterProps) => {
  const chatRef = useRef<HTMLDivElement | null>(null);
  let [IsOpenNavMenu, setIsOpenNavMenu] = useState(false);

  let [SmileUndefine, setSmileUndefine] = useState(false);

  const outsideClickHandler = (event: MouseEvent) => setIsChatOpen(false);

  useOnClickOutside(chatRef, outsideClickHandler);

  return (
    <div
      ref={chatRef}
      className="fixed right-5 bottom-6 bg-white rounded-t rounded-b w-80 flex flex-col h-[640px]"
    >
      <HeaderChat />
      <MenuChat
        setIsChatOpen={setIsChatOpen}
        setIsOpenNavMenu={setIsOpenNavMenu}
      />
      {IsOpenNavMenu && <NavHelpMenu setIsOpenNavMenu={setIsOpenNavMenu} />}
      <BodyChat />
      <ChatInput setSmileUndefine={setSmileUndefine} />
      {SmileUndefine && <SmileText />}
    </div>
  );
};

export default Chat;

// alt + up/down - движ
