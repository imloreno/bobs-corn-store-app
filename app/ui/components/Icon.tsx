import React from "react";
import { FaUserAlt, FaUserShield } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { GiPadlock } from "react-icons/gi";
import { HiHome, HiMenu } from "react-icons/hi";

export type IconName =
  | "MENU"
  | "USER"
  | "PASSWORD"
  | "USERNAME"
  | "ENTER"
  | "HOME";

const icons = {
  HOME: HiHome,
  MENU: HiMenu,
  USER: FaUserAlt,
  PASSWORD: GiPadlock,
  USERNAME: FaUserShield,
  ENTER: FiLogIn,
};

const Icon = ({
  icon,
  className,
  style,
}: {
  icon: IconName;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const Component = icons[icon] ?? icons.HOME;
  return <Component key={icon} className={className} style={style} />;
};

export default Icon;
