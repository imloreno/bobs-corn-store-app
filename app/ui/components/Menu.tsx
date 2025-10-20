import React from "react";
import LogoutButton from "@ui/features/LogoutButon";

const Menu = () => {
  return (
    <nav className="bg-primary">
      <div className="flex items-center gap-2">
        <div className="px-6 py-3 ml-auto">
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
