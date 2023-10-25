import pult from "../assets/icons/pult.svg";

const Cards = () => {
  return (
    <div className="bg-black max-h-[760px] w-[100%] mx-auto px-10">
      <div className="text-4xl text-white text-center font-bold py-1">
        Смотрите кино дома и в дороге
      </div>
      <div className="text-2xl text-white text-center mt-4 mb-10">
        А также в парке, на веранде кафе, в метро, в гостях у любимой
        <br /> бабули — онлайн или без интернета.
      </div>
      <div className="text-white text-4xl mb-4 font-bold">На телевизоре</div>
      <div className="h-[200px]">
        <img src={pult} alt="pult" />
      </div>
    </div>
    //     <div className="h-[250px] bg-red-300 text-black flex flex-col items-center">
    // <img src={svg} alt="asdsfghj" />
    //     </div>
  );
};

export default Cards;
