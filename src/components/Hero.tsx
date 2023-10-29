const Hero = () => {
  return (
    <div className="adv_title text-center my-12 max-w-[1440px] mx-auto">
      <div className="first_title  text-6xl px-16 text-white font-bold">
        2 месяца фильмов и сериалов
        <br /> за 0.99 BYN
      </div>
      <div className="second_title mx-auto text-2xl mt-6 text-white">
        Ответ на вопрос «Что посмотреть?» на ближайшие 60 вечеров.
        <br /> В вашем распоряжении — тысячи фильмов и сериалов: <br />
        от новых и нашумевших до легендарных. <br />
        Без рекламы и в высоком качестве.
      </div>
      <button
        type="button"
        className="hover bg-gradient-to-r from-pink-400 to-purple-800 text-white font-bold py-4 mt-8 px-4 rounded-3xl"
      >
        Хочу, оформляем!
      </button>
    </div>
  );
};

export default Hero;
