import pult from "../assets/icons/pult.svg";

const Cards = () => {
  return (
    <div className="bg-black max-h-[760px] w-{1250px} mx-auto px-8 pt-24">
      <div className="text-4xl text-white text-center font-bold py-1">
        Смотрите кино дома и в дороге
      </div>
      <div className="text-2xl text-white text-center mt-4 mb-10">
        А также в парке, на веранде кафе, в метро, в гостях у любимой
        <br /> бабули — онлайн или без интернета.
      </div>
      <div className="text-white text-4xl mb-4 font-bold">На телевизоре</div>
      <div className="h-[200px] grid grid-cols-8 grid-rows-2 gap-4 justify-center">
        <img
          src={pult}
          alt="pult1"
          className="bg-white w-[100%] h-[100%] row-span-2 col-span-2"
        />
        <img
          src={pult}
          alt="pult2"
          className="bg-white w-[100%] h-[100%] col-span-2"
        />
        <img
          src={pult}
          alt="pult3"
          className="bg-white w-[100%] h-[100%] col-span-2"
        />
        <img
          src={pult}
          alt="pult4"
          className="bg-white w-[100%] h-[100%] col-span-2"
        />
        <img
          src={pult}
          alt="pult5"
          className="bg-white w-[100%] h-[100%] col-span-2"
        />
        <img src={pult} alt="pult6" className="bg-white w-[100%] h-[100%]" />
        <img src={pult} alt="pult7" className="bg-white w-[100%] h-[100%]" />
        <img
          src={pult}
          alt="pult8"
          className="bg-white w-[100%] h-[100%] col-span-2"
        />
      </div>
    </div>
  );
};

export default Cards;
