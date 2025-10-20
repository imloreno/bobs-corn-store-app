import Menu from "@components/Menu";
import Header from "@components/Header";
import Stats from "@components/Stats";
import Products from "@ui/features/Products";

const Home = ({ error }: { error: Error }) => {
  return (
    <div className="overflow-x-hidden">
      <Menu />
      <Header
        image={{
          url: "/corns.png",
          alt: "Bob's corn",
          className: "w-[65vw] -bottom-14 right-0 rotate-40",
        }}
        subtitle={
          <>
            <div className="mt-8">
              <p className="text-2xl font-bold text-text">
                <span className="text-highlight">Fair</span> & simple
                <br />
                <span className="block text-text text-[1.1rem] -mt-1">
                  more than a <span className="text-secondary">corn</span>
                </span>
              </p>
            </div>
            <div className="mt-6 text-xl text-text font-bold">
              <p>Enjoy</p>
              <p className="-mt-2">the</p>
              <p className="-mt-2 text-highlight">experience</p>
            </div>
          </>
        }
      />
      <Stats />
      <Products error={error} />
    </div>
  );
};

export default Home;
