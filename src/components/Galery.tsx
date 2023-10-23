import { useState } from "react";

const Galery = () => {
  let [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(++count);
    console.log("hfg");
  };

  return (
    <div className="bg-white min-h-20">
      <h1>{count}</h1>
      <button type="button" onClick={handleCount}>
        НАЖАТЬ
      </button>
    </div>
  );
};

export default Galery;

// 1: @import url('https://dummyapi.online/api/movies');
// https://dummyapi.online/api/movies
// {"id":1,"movie":"The Shawshank Redemption","rating":9.2,"image":"images/shawshank.jpg","imdb_url":"https://www.imdb.com/title/tt0111161/"}

// const [action, setAction] = useState(0);

// useState(() => {

// })

// const Galery = () => {
//   const getMovies = async () => {
//     const movies = await axios.get("https://dummyapi.online/api/movies");
//     console.log(movies);
//   };

//   useEffect(() => {
//     getMovies();
//   }, [setAction]);

// export default Galery;

// import { useState, useEffect } from "react";

//   </div>;

// прочитать про хуки
// lucied-react (иконки)
