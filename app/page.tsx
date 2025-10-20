import Menu from "@components/Menu";
import Header from "@components/Header";
import Stats from "@components/Stats";
import Products from "@ui/features/Products";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Menu />
      <Header />
      <Stats />
      <Products />
    </div>
  );
};

export default Home;
