import { useNavigate } from "react-router-dom";
import BackArrow from "../../assets/icons/BackArrowWhite.svg";
import Yandex from "../../assets/images/Yandex";

const Entrance = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="h-screen" id="bgEntranceImg">
        <div
          className="bg-[#131317] max-h-[56vh] max-w-[45vh] h-[100%] w-[100%] rounded-3xl fixed max-lg:absolute"
          id="content"
        >
          <div>
            <form>
              <div className="h-[8vh]">
                <div className="flex justify-between px-2 pt-4">
                  <div className="">
                    <img
                      src={BackArrow}
                      onClick={() => navigate("/")}
                      className="flex hover:bg-slate-500 rounded-2xl"
                      alt="arrow"
                    />
                  </div>
                  <div className="flex justify-center px-2">
                    <Yandex />
                  </div>
                  <div className="w-4 h-2"></div>
                </div>
              </div>
              <div className="Message h-[12vh] py-2 flex justify-center text-white font-bold px-10 text-center text-2xl">
                Войдите или зарегестрируйтесь
              </div>
              <div className="h-[8vh] flex justify-center">
                <input
                  className="w-4/5 border-slate-300 border-2 my-2 rounded-xl px-2 bg-[#131317] text-white focus:border-white"
                  placeholder="Логин"
                />
              </div>
              <div className="h-[8vh] flex justify-center">
                <input
                  className="w-4/5 border-slate-300 border-2 my-2 rounded-xl px-2 bg-[#131317] text-white"
                  placeholder="Пароль"
                />
              </div>
              <div className="Entre_or_reg  h-[15vh]">
                <div className="h-[6vh] flex justify-center mt-1">
                  <div className="w-4/5 bg-white text-center rounded-xl cursor-pointer py-2">
                    Войти
                  </div>
                </div>
                <div className="h-[8vh] flex justify-center mt-1">
                  <div
                    className="w-4/5 border-slate-300 border-2 text-center text-white my-2 rounded-xl py-1 hover:bg-slate-700 cursor-pointer"
                    onClick={() => navigate("/regForm")}
                  >
                    Создать ID
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Entrance;

// eslint-disable-next-line no-lone-blocks
