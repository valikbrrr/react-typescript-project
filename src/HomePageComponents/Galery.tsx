import { useEffect, useState } from "react";

const Galery = () => {
  let [photos, setPhotos] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    let data = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    const result = await data.json();
    setPhotos(result);
    console.log(result);
  };

  return (
    <div className="grid grid-cols-5 grid-rows-2 justify-center pb-10">
      {photos.slice(0, 10).map((photo: any) => (
        <img
          src={photo.url}
          alt="jhgfg"
          className="text-center p-2  max-[848px]:p-1"
        ></img>
      ))}
    </div>
  );
};

export default Galery;

// прочитать про хуки
// lucied-react (иконки)
