import React from "react";

const Header = () => {
  return (
    <header className="relative bg-primary min-h-[18rem] rounded-bl-3xl tracking-tighter">
      <div className="mx-9">
        <p className="text-2xl font-bold text-text">The</p>
        <h1 className="text-4xl font-bold text-text">
          Bob's <span className="text-secondary">corn</span>
        </h1>
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
      </div>
      <img
        src="/corns.png"
        className=" w-[65vw] pointer-events-none absolute -bottom-14 right-0 rotate-40"
      />
    </header>
  );
};

export default Header;
