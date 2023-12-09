import pult from "../assets/icons/pult.svg";

const Cards = () => {
  return (
    <div className="bg-black max-h-[760px] w-{1250px} mx-auto pt-14">
      <div className="text-center py-1 text-white font-bold xl:text-6xl text-4xl max-md:text-3xl">
        Смотрите кино дома и в дороге
      </div>
      <div className="text-white text-center py-10 xl:text-4xl text-2xl max-md:text-xl opacity-80">
        <div className="max-md:hidden whitespace-nowrap">
          А также в парке, на веранде кафе, в метро, в гостях у любимой
          <br /> бабули — онлайн или без интернета.
        </div>
        <div className="md:hidden">
          А также в парке, на веранде кафе, в метро,
          <br />в гостях у любимой бабули — онлайн
          <br />
          или без интернета.
        </div>
      </div>
      <div className="text-white md:text-5xl text-3xl mb-4 font-bold">
        На телевизоре
      </div>
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

//max-[1129px]:text-4xl  max-[942px]:text-3xl  max-[774px]:text-2xl

// min-[1381px]:text-4xl max-[1129px]:text-xl max-[942px]:text-lg max-[774px]:text-base
