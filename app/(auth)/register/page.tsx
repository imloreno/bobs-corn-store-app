"use client";
import React, { useState } from "react";
import style from "./register.module.css";
import { Subtitle, Title } from "@components/Text";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@ui/components/shadcn/input-group";
import Icon from "@components/Icon";
import { Button } from "@ui/components/shadcn/button";
import { useForm } from "react-hook-form";
import { apiPost } from "@/lib/api";
import REGISTER_FIELDS, {
  REGISTER_DEFAULT_VALUES,
} from "@/app/(auth)/register/constants/registerForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: REGISTER_DEFAULT_VALUES });

  const onSubmit = async (data: any) => {
    try {
      await apiPost("/auth/register", data);
      router.push("/login");
    } catch (err: any) {
      console.error("register error", err);
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
          <Subtitle className="mb-5 text-xl !text-primary">Register</Subtitle>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
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
            <Link
              className="text-right text-text underline font-medium"
              href="/login"
            >
              Login
            </Link>

            <Button type="submit" size="lg" className="w-fit">
              <Icon icon="ENTER" /> Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
