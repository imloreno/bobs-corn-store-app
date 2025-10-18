import PixelPerfectTool from "@components/pixelPerfect/PixelPerfectTool";
import Menu from "@components/Menu";
import Header from "@components/Header";
import Stats from "@components/Stats";
import Products from "./features/Products";

const Home = () => {
  return (
    <div className="">
      <PixelPerfectTool />
      <Menu />
      <Header />
      <Stats />
      <Products />
    </div>
  );
};

export default Home;
