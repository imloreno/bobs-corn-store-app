import React from "react";

interface HeaderProps {
  subtitle?: React.ReactNode;
  image?: {
    url: string;
    alt: string;
    className: string;
  };
}

const Header = ({ subtitle, image }: HeaderProps) => {
  return (
    <header className="relative bg-primary pb-10 rounded-bl-3xl tracking-tighter">
      <div className="mx-9">
        <p className="text-2xl font-bold text-text">The</p>
        <h1 className="text-4xl font-bold text-text">
          Bob's <span className="text-secondary">corn</span>
        </h1>
        {subtitle ?? <></>}
      </div>
      <img
        src={image?.url ?? "/corns.png"}
        alt={image?.alt ?? "Bob's corn"}
        className={`pointer-events-none absolute ${image?.className ?? ""}`}
      />
    </header>
  );
};

export default Header;
