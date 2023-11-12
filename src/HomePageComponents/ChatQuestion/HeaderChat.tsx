import LogHeaderChat from "../../assets/icons/LogHeaderChat.svg";
import MessegeHeaderChat from "../../assets/icons/MessegeHeaderChat.svg";

const HeaderChat = () => {
  return (
    <div className="bg-gray-200 px-4 grid grid-cols-2 gap-8">
      <img className="my-3 cursor-pointer" src={LogHeaderChat} alt="log" />
      <div className="grid grid-cols-6 my-3 opacity-40 hover:opacity-90 cursor-pointer">
        <img className="col-span-1 pt-1" src={MessegeHeaderChat} alt="mes" />
        <div className="col-span-5 text-sm font-bold text-black">
          Все обращения
        </div>
      </div>
    </div>
  );
};

export default HeaderChat;
