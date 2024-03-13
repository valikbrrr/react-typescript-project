import { Paperclip } from "lucide-react";
import { Smile, Send } from "lucide-react";
import { useAppDispatch } from "../../hooksRedux";
import { toggleSmileCollection } from "../../store/Slices";

const ChatInput = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="border-t-2 border-gray-400 mb-2 sm:mb-0">
      <div className="relative grid grid-cols-8">
        <div className="col-span-1">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            <Paperclip />
          </button>
        </div>
        <div className="col-span-5 h-12 flex">
          <textarea
            placeholder="Сообщение..."
            className="py-3 pl-1 w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 bg-gray-200 rounded-md"
          />
        </div>
        <div className="col-span-1 absolute right-0 items-center inset-y-0 hidden sm:flex">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            onClick={() => dispatch(toggleSmileCollection())}
          >
            <Smile />
          </button>
          <button
            type="button"
            className="col-span-1 inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            // onClick={}
          >
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
