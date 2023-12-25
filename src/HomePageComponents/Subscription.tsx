import { useNavigate } from "react-router-dom";
import ic from "../assets/icons/icon.svg";

const Subscription = () => {
  const navigator = useNavigate();

  return (
    <div className="pt-16">
      <div className="flex w-[100%]">
        <div className="w-[50%] max-[1600px]:w-[100%] max-w-[1440px]">
          <div className="text-white text-4xl font-bold pt-20 max-[1600px]:text-center max-[1600px]:text-7xl max-xl:text-5xl">
            На смартфоне и планшете
          </div>
          <div className="text-white text-2xl pt-4 pb-10 mx-auto max-[1600px]:text-center max-[1600px]:text-3xl max-xl:text-2xl opacity-80">
            Скачивайте фильмы, серии и целые сезоны прямо в
            <br /> приложении Кинопоиска и берите с собой, куда бы
            <br /> вы ни отправились.
          </div>
          max-xl:justify-items-end
          <div className="w-[730px] grid grid-cols-3 grid-rows-1 justify-items-start pb-6 max-[1600px]:justify-items-center max-[1600px]:w-[928px] max-xl:w-[700px]">
            <img src={ic} alt="ic" className="w-40 h-12" />
            <img src={ic} alt="ic" className="w-40 h-12" />
            <img src={ic} alt="ic" className="w-40 h-12" />
          </div>
          <div className="w-full max-[1600px]:justify-items-center">
            <div className=" pb-3 text-white text-[0.6rem] opacity-30 max-[1600px]:text-center max-[1600px]:w-auto">
              Apple, логотип Apple являются товарными знаками Apple Inc.,
              {<br />}
              зарегистрированными в США и иных странах и регионах. App Store{" "}
              {<br />} является знаком обслуживания Apple Inc.
            </div>
            <div className="pb-8 text-white text-[0.6rem] opacity-30 max-[1600px]:text-center max-[1600px]:w-auto">
              Google Play и логотип Google Play являются{<br />} товарными
              знаками корпорации Google LLC.
            </div>
          </div>
        </div>
        <div className="w-[50%] max-[1600px]:hidden">
          <img
            src="https://avatars.mds.yandex.net/get-ott/239697/2a0000018b67f8d7669d9942f5c2b9a3eaec/orig"
            alt="devices"
            className="bg-none pl-16 justify-center"
          />
        </div>
      </div>
      <div className="h-[88px] w-[100%] flex justify-center">
        <button
          type="button"
          className="bg-gradient-to-l from-indigo-600 via-pink-500 via-80% to-red-400 hover:scale-110 text-white font-bold py-4 mt-8 px-4 rounded-full justify-center transition duration-300 xl:w-64 xl:h-20 xl:text-xl xl:m-2"
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
