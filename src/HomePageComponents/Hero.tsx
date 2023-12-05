import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigator = useNavigate();
  return (
    <div className="text-center pb-12 max-w-[1440px] mx-auto">
      <div className="text-6xl max-[1380px]:hidden text-white font-bold">
        2 месяца фильмов и сериалов за 0.99 BYN
      </div>
      <div className="text-6xl min-[1381px]:hidden text-white font-bold max-[1029px]:text-5xl max-[848px]:text-4xl">
        2 месяца фильмов и сериалов
        <br /> за 0.99 BYN
      </div>
      <div className="mx-auto text-2xl pt-6 text-white opacity-80 max-[848px]:text-xl">
        Ответ на вопрос «Что посмотреть?» на ближайшие 60 вечеров.
        <br /> В вашем распоряжении — тысячи фильмов и сериалов: <br />
        от новых и нашумевших до легендарных. <br />
        Без рекламы и в высоком качестве.
      </div>
      <div className="bg-black">
        <button
          type="button"
          className="hover:scale-110 transition duration-300 bg-gradient-to-l from-indigo-600 via-pink-500 via-80% to-red-400 text-white  font-bold py-4 mt-8 px-4 rounded-full xl:w-64 xl:h-20 xl:text-xl"
          onClick={() => navigator("/SubscrPage")}
        >
          Хочу, оформляем!
        </button>
      </div>
    </div>
  );
};

export default Hero;
