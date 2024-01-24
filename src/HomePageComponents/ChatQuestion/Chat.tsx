import HeaderChat from "./HeaderChat";
import MenuChat from "./MenuChat";
import BodyChat from "./BodyChat";
import { useRef } from "react";
import NavHelpMenu from "./NavHelpMenu";
import ChatInput from "./ChatInput";
import SmileText from "./SmileText";
import { useAppSelector } from "../../hooksRedux";
import { RootState } from "../../store";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useAppDispatch } from "../../hooksRedux";
import { toggleIsChatOpen } from "../../store/Slices";

const Chat = () => {
  const dispatch = useAppDispatch();
  const chatRef = useRef<HTMLDivElement | null>(null);
  const outsideClickHandler = (event: MouseEvent) =>
    dispatch(toggleIsChatOpen());

  useOnClickOutside(chatRef, outsideClickHandler);

  const isOpenNavMenu = useAppSelector(
    (state: RootState) => state.sliceNavMenu.valueNavMenu
  );

  const SmileCollection = useAppSelector(
    (state: RootState) => state.sliceSmile.valueSmile
  );

  return (
    <div
      ref={chatRef}
      className="fixed right-5 bottom-6 bg-white rounded-t rounded-b w-80 flex flex-col h-[640px]"
    >
      <HeaderChat />
      <MenuChat />
      {isOpenNavMenu && <NavHelpMenu />}
      <BodyChat />
      <ChatInput />
      {SmileCollection && <SmileText />}
    </div>
  );
};

export default Chat;

// alt + up/down - движ
