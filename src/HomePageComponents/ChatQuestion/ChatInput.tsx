import { Paperclip } from "lucide-react";
import { Smile, Send } from "lucide-react";

const ChatInput = () => {
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

// <div className="flex flex-row border-t-2 border-red-800 h-28">
//<div className="mt-2 inline-flex items-center justify-center rounded-full h-8 w-8 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
//  <Paperclip />
//</div>
//<input
//  className="outline-none"
//  type="text"
//  placeholder="Введите сообщение"
// />
//<div className="w-15">
//  <div className="mt-2 inline-flex items-center justify-center rounded-full h-8 w-8 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
//    <Smile />
//  </div>
//</div>
//<div className="mt-2 inline-flex items-center justify-center rounded-full h-8 w-8 ease-in-out text-gray-500 bg-gray-300 ">
//  <Send />
//</div>
//</div>

// eslint-disable-next-line no-lone-blocks
{
  /* <div class="w-full px-5 flex flex-col justify-between">
<div class="flex flex-col mt-5">
<div class="flex justify-end mb-4">
  <div
    class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
  >
    Welcome to group everyone !
  </div>
  <img
    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
    class="object-cover h-8 w-8 rounded-full"
    alt=""
  />
</div>
<div class="flex justify-start mb-4">
  <img
    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
    class="object-cover h-8 w-8 rounded-full"
    alt=""
  />
  <div
    class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
    at praesentium, aut ullam delectus odio error sit rem. Architecto
    nulla doloribus laborum illo rem enim dolor odio saepe,
    consequatur quas?
  </div>
</div>
<div class="flex justify-end mb-4">
  <div>
    <div
      class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Magnam, repudiandae.
    </div>

    <div
      class="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Debitis, reiciendis!
    </div>
  </div>
  <img
    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
    class="object-cover h-8 w-8 rounded-full"
    alt=""
  />
</div>
<div class="flex justify-start mb-4">
  <img
    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
    class="object-cover h-8 w-8 rounded-full"
    alt=""
  />
  <div
    class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
  >
    happy holiday guys!
  </div>
</div>
</div>
<div class="py-5">
<input
  class="w-full bg-gray-300 py-5 px-3 rounded-xl"
  type="text"
  placeholder="type your message here..."
/>
</div>
</div> */
}
