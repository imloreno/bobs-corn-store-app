import PixelPerfectTool from "@components/pixelPerfect/PixelPerfectTool";
import Menu from "@components/Menu";
import Header from "@components/Header";
import Stats from "@components/Stats";

const Home = () => {
  return (
    <div className="">
      <PixelPerfectTool />
      <Menu />
      <Header />
      <Stats />
    </div>
  );
};

export default Home;
