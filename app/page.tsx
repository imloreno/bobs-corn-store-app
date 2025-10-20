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
          className:
            "w-[65vw] sm:w-[65vw] md:w-[50vw] lg:w-[30rem] xl:w-[35rem] -bottom-15 sm:-bottom-35 md:-bottom-30 lg:-bottom-50 right-0 sm:rotate-12 md:rotate-20 lg:rotate-40",
        }}
        subtitle={
          <>
            <div className="mt-8">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-text">
                <span className="text-highlight">Fair</span> & simple
                <br />
                <span className="block text-text text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.9rem] -mt-1">
                  more than a <span className="text-secondary">corn</span>
                </span>
              </p>
            </div>
            <div className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-text font-bold">
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
