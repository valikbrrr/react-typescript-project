import Cards from "./Cards";
import Footer from "./Footer";
import Galery from "./Galery";
import Header from "./Header";
import Hero from "./Hero";
import Subscription from "./Subscription";

const HomePage = () => {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <Galery />
      <Cards />
      <Subscription />
      <Footer />
    </div>
  );
};

export default HomePage;
