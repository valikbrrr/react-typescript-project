import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Galery from "./components/Galery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Subscription from "./components/Subscription";

function App() {
  return (
    <div className="container bg-black h-[100%]">
      <Header />
      <Hero />
      <Galery />
      <Cards />
      <Subscription />
      <Footer />
    </div>
  );
}
export default App;
//ctrl + shift + p => window reload
//rafce

// 1. Получить данные (Выучить HTTP протокол, взаимодествие между юзером и браузером, REST API, axios, json) использовать useEffect!!!!!!!!!!!!1
// 2. Обработать данные
//   - подготовить типы
//   - преобразовать данные в HTML (либо в другой нужный вид) использовать useState!!!!!!
// 3. Отобразить данные в HTML
