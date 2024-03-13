import { useAppSelector } from "../../hooksRedux";
// import { useAppDispatch } from "../../hooksRedux";
import { RootState } from "../../store";
import LogForm from "./EntrLog/LogForm";
import RegForm from "./EntrReg/RegForm";

const Entrance = () => {
  // const [currentInput, setCurrentInput] = useState(true);
  const isEntr = useAppSelector((state: RootState) => state.sliceIsEntr.isEntr);

  // const dispatch = useAppDispatch();

  return (
    <div>
      <section className="h-screen" id="bgEntranceImg">
        <div
          className="bg-[#131317] max-h-[56vh] max-w-[45vh] h-[100%] w-[100%] rounded-3xl fixed max-lg:absolute"
          id="content"
        >
          {isEntr ? <LogForm /> : <RegForm />}
        </div>
      </section>
    </div>
  );
};

export default Entrance;

// eslint-disable-next-line no-lone-blocks
