import Link from "next/link";
import React from "react";
import Icon from "./Icon";

const Menu = () => {
  return (
    <nav className="bg-primary">
      {/* <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul> */}
      <div className="flex items-center gap-2">
        <div className="p-6 pb-3 ml-auto">
          <Icon icon="MENU" className="text-4xl fill-secondary" />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
