import Footer from "../HomePageComponents/Footer";
import Header from "../HomePageComponents/Header";
import Chat from "../HomePageComponents/ChatQuestion/Chat";
import { useAppSelector } from "../hooksRedux";
import { RootState } from "../store";

const Entrance = () => {
  const isChatOpen = useAppSelector(
    (state: RootState) => state.sliceChat.valueChat
  );

  return (
    <div className="bg-black h-full w-full absolute box-border">
      <div className="grid  px-16 max-[675px]:px-8 justify-items-center">
        <Header />
        <div className="h-"></div>
        <Footer />
      </div>
      {isChatOpen && <Chat />}
    </div>
  );
};

export default Entrance;
