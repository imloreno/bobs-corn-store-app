"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { apiPost } from "@/lib/api";
import LOGIN_FIELDS, { LOGIN_DEFAULT_VALUES } from "./constants/loginForm";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@ui/components/shadcn/input-group";
import Icon from "@components/Icon";
import style from "./login.module.css";
import { Subtitle, Title } from "@components/Text";
import { Button } from "@ui/components/shadcn/button";
import Link from "next/link";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: LOGIN_DEFAULT_VALUES,
  });
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      await apiPost("/auth/login", data);
      router.push("/");
    } catch (err: any) {
      console.error("login error", err);
      alert(err?.message || "Login failed");
    }
  };

  return (
    <div className={`${style.background}`}>
      <div className="mt-10 md:mt-[10vw] mx-9">
        <div className=" max-w-[360px] m-auto">
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
          <Subtitle className="mb-5 text-xl !text-primary">Login</Subtitle>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            {LOGIN_FIELDS.map((field) => (
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
            <Link
              className="text-right text-text underline font-medium"
              href="/register"
            >
              Register
            </Link>
            <Button type="submit" size="lg" className="w-fit">
              <Icon icon="ENTER" /> Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
