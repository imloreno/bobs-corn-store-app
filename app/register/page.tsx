import React from "react";
import style from "./register.module.css";
import PixelPerfectTool from "@components/pixelPerfect/PixelPerfectTool";
import { Subtitle, Title } from "@components/Text";

const Register = () => {
  return (
    <div className={`min-h-[100vh] ${style.background}`}>
      <PixelPerfectTool imageUrl="/temp/Register.png" />
      <div className="mt-18 ml-9">
        <Title className="text-5xl font-bold">Hello!</Title>
        <Subtitle className="mt-8 !text-2xl leading-none">
          Welcome to the <span className="text-text">Bob's corn</span> <br />
          store!
        </Subtitle>
        <img
          src="/corns.png"
          alt="Bob's corn store - register page"
          className="h-70 rotate-20 ml-18"
        />
      </div>
    </div>
  );
};

export default Register;
