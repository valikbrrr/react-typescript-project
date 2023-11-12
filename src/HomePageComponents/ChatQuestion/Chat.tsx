import HeaderChat from "./HeaderChat";
import MenuChat from "./MenuChat";
import BodyChat from "./BodyChat";

const Chat = () => {
  return (
    <div className="float-right fixed bottom-6 top-6 right-5 bg-white rounded w-80 mb-6">
      <HeaderChat />
      <MenuChat />
      <BodyChat />
    </div>
  );
};

export default Chat;
