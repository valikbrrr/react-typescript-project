import Yandex from "../../../assets/images/Yandex";
import BackArrow from "../../../assets/icons/BackArrowWhite.svg";
import MobEntr from "../MobEntr";
import { toggleEntrOrReg } from "../../../store/SliceEntr";
import { useAppDispatch } from "../../../hooksRedux";

const RegForm = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <form>
        <div className="h-[8vh]">
          <div className="flex justify-between px-2 pt-4">
            <div className="">
              <img
                src={BackArrow}
                className="flex hover:bg-yellow-500 rounded-3xl"
                alt="arrow"
                onClick={() => dispatch(toggleEntrOrReg())}
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
        <div className="Num_or_log h-[8vh] flex justify-center">
          <MobEntr />
        </div>
      </form>
    </div>
  );
};

export default RegForm;
