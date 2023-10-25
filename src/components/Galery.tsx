// import films from "../assets/films.json";

// const Galery = () => {
//   return <div className="bg-red-400">aefes</div>;
// };

// export default Galery;

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
          className="text-center bg-red-800 m-2 w-64 h-72"
        ></img>
      ))}
    </div>
  );
};

export default Galery;

// const Galery = () => {
//   let [count, setCount] = useState(0);

//   const handleCount = () => {
//     setCount(++count);
//     console.log("hfg");
//   };

//   return (
//     <div className="bg-white min-h-20">
//       <h1>{count}</h1>
//       <button type="button" onClick={handleCount}>
//         НАЖАТЬ
//       </button>
//     </div>
//   );
// };

// export default Galery;

// 1: @import url('https://dummyapi.online/api/movies');
// https://dummyapi.online/api/movies
// {"id":1,"movie":"The Shawshank Redemption","rating":9.2,"image":"images/shawshank.jpg","imdb_url":"https://www.imdb.com/title/tt0111161/"}

// const [action, setAction] = useState(0);

// useState(() => {

// })

//   useEffect(() => {
//     getMovies();
//   }, [setAction]);

// export default Galery;

// import { useState, useEffect } from "react";

//   </div>;

// прочитать про хуки
// lucied-react (иконки)
