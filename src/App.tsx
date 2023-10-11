import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Galery from "./components/Galery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Subscription from "./components/Subscription";

function App() {
  return (
    <div className="container bg-black h-full">
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
