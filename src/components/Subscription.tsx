import ic from "../assets/icons/icon.svg";

const Subscription = () => {
  return (
    <div className="flex h-auto w-[100%] pt-16 bg-black px-10">
      <div className="left w-[50%] bg-green-700">
        <div className="text-white text-4xl font-bold mt-20 ml-[115px]">
          На смартфоне и планшете
        </div>
        <div className="text-white text-2xl mt-4 mb-10 ml-[115px] mx-auto">
          Скачивайте фильмы, серии и целые сезоны прямо в<br /> приложении
          Кинопоиска и берите с собой, куда бы вы ни отправились.
        </div>
        <div className="flex flex-wrap justify-center space-x-2 ml-{115px}">
          <img src={ic} alt="ic" className="w-40" />
          <img src={ic} alt="ic" className="w-40" />
          <img src={ic} alt="ic" className="w-40" />
        </div>
        <div className="ml-[115px] mb-3">
          Apple, логотип Apple являются товарными знаками Apple Inc.,
          зарегистрированными в США и иных странах и регионах. App Store
          является знаком обслуживания Apple Inc.
        </div>
        <div className="ml-[115px] mb-2">
          Google Play и логотип Google Play являются товарными знаками
          корпорации Google LLC.
        </div>
      </div>
      <div className="right w-[50%] bg-blue-900">ffffffff</div>
    </div>
  );
};

export default Subscription;
