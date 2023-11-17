import BackArrow from "../../assets/icons/BackArrow.svg";
import ActionMenuChat from "../../assets/icons/ActionMenuChat.svg";
import ExternalLinkChat from "../../assets/icons/ExternalLinkChat.svg";
import CloseChat from "../../assets/icons/CloseChat.svg";

interface IFooterProps {
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BodyChat = ({ setIsChatOpen }: IFooterProps) => {
  return (
    <div className="text-white border-b-2 border-slate-200">
      <div className="grid grid-cols-10 px-2 grid-rows-1">
        <div className="col-span-2 grid">
          <img
            className="col-span-1 cursor-pointer my-2 rounded-full hover:bg-gray-200"
            src={BackArrow}
            alt="arrow"
          />
          <img
            className="col-start-2 w-9 h-9 mt-1"
            src="https://static.beeline.ru/upload/dpcupload/contents/291/icons/Kinopoisk-icon.png"
            alt=""
          />
        </div>
        <div className="col-span-5 text-black text-left ">
          <div className="text-[14px] font-medium px-2 truncate">
            Поддержка кинопоbcr
          </div>
          <div className="text-[12px] pl-2 opacity-70">В сети</div>
        </div>
        <div className="col-span-3 grid">
          <img
            className="cursor-pointer my-2 col-span-1 rounded-full hover:bg-gray-200"
            src={ActionMenuChat}
            alt="menu"
          />
          <img
            className="cursor-pointer col-start-2 mt-2 rounded-full hover:bg-gray-200"
            src={ExternalLinkChat}
            alt="ext"
          />
          <img
            className="cursor-pointer col-start-3 my-2 rounded-full hover:bg-gray-200"
            src={CloseChat}
            alt="close"
            onClick={() => setIsChatOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default BodyChat;
