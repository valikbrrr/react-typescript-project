import { Paperclip } from "lucide-react";
import { Smile } from "lucide-react";
import { useRef, useState } from "react";

const ChatInput = () => {
  const [str, setStr] = useState<string | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  console.log(str, "render");
  console.log(divRef.current);

  return (
    <div className="flex flex-row border-t-2 border-red-800 h-28">
      <div className="text-slate-400 w-12 px-3 py-3 rounded-full hover:bg-gray-200 cursor-pointer scale-90">
        <Paperclip />
      </div>
      <input
        className="outline-none"
        type="text"
        placeholder="Введите сообщение"
        onChange={(e) => setStr(e.target.value)}
      />
      <div
        ref={divRef}
        className="text-slate-400 w-12 px-3 py-3 rounded-full hover:bg-gray-200 cursor-pointer scale-90"
      >
        <Smile />
      </div>
      {/* <div className="w-12">
        <Send />
      </div> */}
    </div>
  );
};

export default ChatInput;
