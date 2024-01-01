import { Paperclip } from "lucide-react";
import { Smile, Send } from "lucide-react";

interface ISmileTextProps {
  setSmileUndefine: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatInput = ({ setSmileUndefine }: ISmileTextProps) => {
  return (
    <div className="border-t-2 border-gray-400 mb-2 sm:mb-0">
      <div className="relative flex">
        <span className="absolute inset-y-0 flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            <Paperclip />
          </button>
        </span>
        <input
          type="text"
          placeholder="Сообщение..."
          className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
        />
        <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            onClick={() => setSmileUndefine((prev) => !prev)}
          >
            <Smile />
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
