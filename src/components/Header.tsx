import React from "react";

const Header = () => {
  return (
    <div className="header flex px-16 max-h-96 max-w-[1440px] mx-auto">
      <div className="label_kinopoisk text-3xl py-6 text-white font-bold">
        кинопоиск
      </div>
      <div className="right_section py-8 ml-[900px] w-[100%] flex">
        <div className="setup_on_tv flex">
          <img className="" src="../icons/television.png" alt="ic_tv" />
          <div className="writing ml-1 mr-4 text-lg font-roboto text-white">
            Установить на ТВ
          </div>
        </div>
        <div className="entrancy text-lg text-white">Войти</div>
      </div>
    </div>
  );
};

export default Header;
//rafce
