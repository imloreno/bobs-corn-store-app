import PixelPerfectTool from "@components/pixelPerfect/PixelPerfectTool";
import Menu from "@components/Menu";
import Header from "@components/Header";
import Stats from "@components/Stats";
import Products from "@ui/features/Products";

const Home = () => {
  return (
    <div className="">
      <PixelPerfectTool imageUrl="/temp/Home.png" />
      <Menu />
      <Header />
      <Stats />
      <Products />
    </div>
  );
};

export default Home;
