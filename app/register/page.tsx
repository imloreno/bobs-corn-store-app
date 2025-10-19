"use client";
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
import { useForm } from "react-hook-form";
import REGISTER_FIELDS, {
  REGISTER_DEFAULT_VALUES,
} from "@/app/register/constants/registerForm";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: REGISTER_DEFAULT_VALUES });

  const onSubmit = (data: any) => {
    // TODO: wire up submission to backend/service
    console.log("register form submit:", data);
  };

  return (
    <div className={`${style.background}`}>
      <PixelPerfectTool imageUrl="/temp/Register.png" />
      <div className="mt-10  mx-9">
        <Title className="text-5xl font-bold text-primary">Hello!</Title>
        <Subtitle className="mt-8 !text-2xl leading-none">
          Welcome to the <span className="text-text">Bob's corn</span> <br />
          store!
        </Subtitle>
        <img
          src="/corns.png"
          alt="Bob's corn store - register page"
          className="h-70 rotate-20 ml-18"
        />
        <Subtitle className="mb-5 text-xl !text-primary">Register</Subtitle>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          {REGISTER_FIELDS.map((field) => (
            <InputGroup key={field.name}>
              <InputGroupInput
                {...register(field.name, field.validation as any)}
                placeholder={field.placeholder}
                type={field.type}
              />
              <InputGroupAddon>
                <Icon icon={field.icon || "USER"} />
              </InputGroupAddon>
              {errors?.[field.name] && (
                <p className="text-destructive text-sm px-4">
                  {(errors as any)[field.name]?.message}
                </p>
              )}
            </InputGroup>
          ))}

          <Button type="submit" size="lg" className="w-fit mt-2">
            <Icon icon="ENTER" /> Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
