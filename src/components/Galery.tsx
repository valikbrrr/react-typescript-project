// 1: @import url('https://dummyapi.online/api/movies');

import axios from "axios";
import { useState, useEffect } from "react";
import svg from "../assets/icons/icon.svg";
// https://dummyapi.online/api/movies

// {"id":1,"movie":"The Shawshank Redemption","rating":9.2,"image":"images/shawshank.jpg","imdb_url":"https://www.imdb.com/title/tt0111161/"}

const Galery = () => {
  const getMovies = async () => {
    const movies = await axios.get("https://dummyapi.online/api/movies");
    console.log(movies);
  };

  // useEffect(() => {
  //   getMovies();
  // }, []);

  return (
    <div className="h-[250px] bg-red-300 text-black flex flex-col items-center">
      <img src={svg} alt="asdsfghj" />
    </div>
  );
};

export default Galery;

/*

1. Получить данные (Выучить HTTP протокол, взаимодествие между юзером и браузером, REST API, axios) использовать useEffect!!!!!!!!!!!!1
2. Обработать данные
  - подготовить типы
  - преобразовать данные в HTML (либо в другой нужный вид) использовать useState!!!!!!
3. Отобразить данные в HTML 

*/

// прочитать про хуки
// lucied-react (иконки)
