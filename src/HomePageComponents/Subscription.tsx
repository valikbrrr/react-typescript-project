import { useNavigate } from "react-router-dom";
import ic from "../assets/icons/icon.svg";
// import pult from "../assets/icons/pult.svg";

const Subscription = () => {
  const navigator = useNavigate();

  return (
    <div className=" bg-black pt-16 px-10">
      <div className="flex h-auto w-[100%]">
        <div className="left w-[50%]">
          <div className="text-white text-4xl font-bold mt-20 ml-[115px]">
            На смартфоне и планшете
          </div>
          <div className="text-white text-2xl mt-4 mb-10 ml-[115px] mx-auto">
            Скачивайте фильмы, серии и целые сезоны прямо в<br /> приложении
            Кинопоиска и берите с собой, куда бы вы ни отправились.
          </div>
          <div className="flex flex-wrap space-x-12 ml-[110px] mb-6">
            <img src={ic} alt="ic" className="w-40 h-12" />
            <img src={ic} alt="ic" className="w-40" />
            <img src={ic} alt="ic" className="w-40" />
          </div>
          <div className="ml-[115px] mb-3 text-white text-[0.6rem] w-72 opacity-30">
            Apple, логотип Apple являются товарными знаками Apple Inc.,{<br />}
            зарегистрированными в США и иных странах и регионах.{<br />} App
            Store является знаком обслуживания Apple Inc.
          </div>
          <div className="ml-[115px] mb-3 text-white text-[0.6rem] w-72 opacity-30">
            Google Play и логотип Google Play являются{<br />} товарными знаками
            корпорации Google LLC.
          </div>
        </div>
        <img
          src="https://avatars.mds.yandex.net/get-ott/239697/2a0000018b67f8d7669d9942f5c2b9a3eaec/orig"
          srcSet="https://avatars.mds.yandex.net/get-ott/239697/2a0000018b67f8d7669d9942f5c2b9a3eaec/orig 1x, https://avatars.mds.yandex.net/get-ott/1652588/2a0000018b67f96e538142c54de124d82646/orig 2x"
          alt="devices"
          className="bg-none ml-16"
        />
      </div>
      <div className="h-[88px] w-[100%] flex justify-center">
        <button
          type="button"
          className="bg-gradient-to-l from-indigo-600 via-pink-500 via-80% to-red-400 hover:scale-110 text-white font-bold py-4 mt-8 px-4 rounded-full justify-center transition-all"
          onClick={() => navigator("/SubscrPage")}
        >
          Хочу, оформляем!
        </button>
      </div>
    </div>
  );
};
// from-blue-600 from-10% via-pink-500 via-80%
export default Subscription;
