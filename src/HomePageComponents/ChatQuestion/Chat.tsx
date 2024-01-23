import HeaderChat from "./HeaderChat";
import MenuChat from "./MenuChat";
import BodyChat from "./BodyChat";
import { useState, useRef } from "react";
import NavHelpMenu from "./NavHelpMenu";
import ChatInput from "./ChatInput";
import SmileText from "./SmileText";
import { useAppSelector } from "../../hooksRedux";
import { RootState } from "../../store";

const Chat = () => {
  const chatRef = useRef<HTMLDivElement | null>(null);

  const isOpenNavMenu = useAppSelector((state: RootState) => state.slice.value);

  let [SmileUndefine, setSmileUndefine] = useState(false);

  return (
    <div
      ref={chatRef}
      className="fixed right-5 bottom-6 bg-white rounded-t rounded-b w-80 flex flex-col h-[640px]"
    >
      <HeaderChat />
      <MenuChat /> {/*  setIsOpenNavMenu={setIsOpenNavMenu}  */}
      {isOpenNavMenu && <NavHelpMenu />}
      {/*setIsOpenNavMenu={setIsOpenNavMenu}  */}
      <BodyChat />
      <ChatInput setSmileUndefine={setSmileUndefine} />
      {SmileUndefine && <SmileText />}
    </div>
  );
};

export default Chat;

// alt + up/down - движ
