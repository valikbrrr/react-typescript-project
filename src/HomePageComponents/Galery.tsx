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
    <div className="flex flex-wrap justify-center bg-black pb-20">
      {photos.slice(0, 10).map((photo: any) => (
        <img
          src={photo.url}
          alt="jhgfg"
          className="text-center m-2 w-64 h-72"
        ></img>
      ))}
    </div>
  );
};

export default Galery;

// прочитать про хуки
// lucied-react (иконки)
