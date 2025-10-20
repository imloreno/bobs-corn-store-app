import React from "react";
import LogoutButton from "@ui/features/LogoutButon";
import Link from "next/link";
import { Text } from "./Text";
import Icon from "./Icon";
import { Button } from "./shadcn/button";

const Menu = () => {
  return (
    <nav className="bg-primary">
      <div className="flex items-center gap-2 max-w-[1440px] mx-auto">
        <Link href="/" className="px-6 py-3">
          <Button>
            <Text className="font-light text-xm text-text cursor-pointer">
              <span className="underline">home</span>/
            </Text>
          </Button>
        </Link>
        <div className="px-6 py-3 ml-auto">
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
