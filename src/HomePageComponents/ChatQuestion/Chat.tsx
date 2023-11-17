import HeaderChat from "./HeaderChat";
import MenuChat from "./MenuChat";
import BodyChat from "./BodyChat";

interface IFooterProps {
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Chat = ({ setIsChatOpen }: IFooterProps) => {
  return (
    <div className="fixed right-5 top-6 bottom-6 bg-orange-600 rounded w-80 h-5/6">
      <HeaderChat />
      <MenuChat setIsChatOpen={setIsChatOpen} />
      <BodyChat />
    </div>
  );
};

export default Chat;
