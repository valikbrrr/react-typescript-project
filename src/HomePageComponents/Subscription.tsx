import { useNavigate } from "react-router-dom";
import ic from "../assets/icons/icon.svg";
import pult from "../assets/icons/pult.svg";

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
        <img src={pult} alt="" className="right w-[50%]" />
      </div>
      <div className="h-24 w-[100%] flex justify-center">
        <button
          type="button"
          className="bg-gradient-to-r from-pink-400 to-purple-800 hover:bg-gradient-to-l text-white font-bold py-4 mt-8 px-4 rounded-3xl justify-center"
          onClick={() => navigator("/SubscrPage")}
        >
          Хочу, оформляем!
        </button>
      </div>
    </div>
  );
};

export default Subscription;
