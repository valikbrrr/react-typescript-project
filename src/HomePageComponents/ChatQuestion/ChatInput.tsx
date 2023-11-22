import { Paperclip } from "lucide-react";

const ChatInput = () => {
  return (
    <div className="flex flex-row border-t-2 border-red-800 h-28">
      <div className="text-slate-400 w-12 px-3 py-3 rounded-full hover:bg-gray-200 cursor-pointer scale-90">
        <Paperclip />
      </div>
      <input
        className="border-l-2 border-slate-300"
        type="text"
        aria-label="aaaaaaaaa"
      />
    </div>
  );
};

export default ChatInput;
