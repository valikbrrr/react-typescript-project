import tv from "../assets/icons/tv.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex px-16 max-h-96 max-w-[1440px] mx-auto">
      <span
        className="text-white label_kinopoisk text-2xl py-6  font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        КИНОПОИСК
      </span>
      <div className="right_section py-8 ml-[900px] w-[100%] flex cursor-pointer">
        <div className="setup_on_tv flex opacity-70 hover:opacity-100">
          <img className="font-bold" src={tv} alt="ic_tv" />
          <span
            className="ml-1 mr-4 text-lg font-roboto text-white font-bold"
            onClick={() => navigate("/OnTvPage")}
          >
            Установить на ТВ
          </span>
        </div>
        <span
          className="text-lg text-white opacity-70 hover:opacity-100 font-bold cursor-pointer"
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
