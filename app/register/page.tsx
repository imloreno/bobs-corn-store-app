import React from "react";
import style from "./register.module.css";
import PixelPerfectTool from "@components/pixelPerfect/PixelPerfectTool";
import { Subtitle, Title } from "@components/Text";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@components/ui/input-group";
import Icon from "@components/Icon";
import { Button } from "@components/ui/button";

const Register = () => {
  return (
    <div className={`min-h-[100vh] ${style.background}`}>
      <PixelPerfectTool imageUrl="/temp/Register.png" />
      <div className="mt-10  mx-9">
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
        <Subtitle className="mb-8 !text-2xl leading-none">Register</Subtitle>
        <form action="" className="flex flex-col gap-3">
          <InputGroup>
            <InputGroupInput placeholder="Full Name" />
            <InputGroupAddon>
              <Icon icon="USER" />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Username" />
            <InputGroupAddon>
              <Icon icon="USERNAME" />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Enter password" type="password" />
            <InputGroupAddon>
              <Icon icon="PASSWORD" />
            </InputGroupAddon>
          </InputGroup>
          <Button size="lg" className="w-fit">
            <Icon icon="ENTER" /> Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
