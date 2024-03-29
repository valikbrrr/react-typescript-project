import Yandex from "../../../assets/images/Yandex";
import BackArrow from "../../../assets/icons/BackArrowWhite.svg";
import Inputs from "./inputsForReg";
import { useNavigate } from "react-router-dom";

const RegForm = () => {
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
                      className="flex hover:bg-yellow-500 rounded-3xl"
                      alt="arrow"
                      onClick={() => navigate("/entrance")}
                    />
                  </div>
                  <div className="flex justify-center px-2">
                    <Yandex />
                  </div>
                  <div className="w-4 h-2"></div>
                </div>
              </div>
              <div className="Message h-[12vh] py-1 flex justify-center text-white font-bold px-10 text-center text-2xl">
                Войдите или зарегестрируйтесь
              </div>
              <div className="Num_or_log flex justify-center h-[30vh]">
                <Inputs />
              </div>
              <div className="text-center mt-2 opacity-30 hover:opacity-85">
                <a
                  href="https://yandex.ru/legal/yandex_plus_conditions/"
                  className="text-white text-[0.8rem] opacity-30 hover:opacity-90"
                >
                  Условия подписки Яндекс Плюс.
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegForm;
