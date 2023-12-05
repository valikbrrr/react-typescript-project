import tv from "../assets/icons/tv.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[100%] flex justify-between h-24 pt-12 mb-10">
      <div
        className="text-white py-2 text-2xl justify-center font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        КИНОПОИСК
      </div>
      <div className="py-3 flex cursor-pointer">
        <div className="flex opacity-70  hover:opacity-100">
          <img className="font-bold max-[1280px]:pr-2" src={tv} alt="ic_tv" />
          <span
            className="ml-1 max-[1280px]:hidden mr-4 text-lg font-roboto text-white font-bold"
            onClick={() => navigate("/OnTvPage")}
          >
            Установить на ТВ
          </span>
        </div>
        <span
          className="text-lg text-white opacity-70 hover:opacity-100 font-bold font-roboto cursor-pointer"
          onClick={() => navigate("/Entrance")}
        >
          Войти
        </span>
      </div>
    </div>
  );
};

export default Header;
//rafce
