"use client";

import { PUBLIC_PAGES } from "@/config/public-pages.config";
import { useAuthForm } from "@/hooks/useAuthForm";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

interface Props {
  isLoginForm: boolean;
  title: string;
}

export function AuthForm({ title, isLoginForm }: Props) {
  const { handleSubmit, isPending, onSubmit, register, recaptchaRef } =
    useAuthForm(isLoginForm ? "login" : "register");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 py-2 px-3 outline-1"
    >
      <h1 className="text-xl">{title}</h1>

      <label className="flex flex-col gap-2">
        <span>Email:</span>
        <input
          type="text"
          placeholder="example@mail.com"
          className="border-b border-b-slate-800"
          {...register("email")}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span>Password:</span>
        <input
          type="password"
          placeholder="*** ***"
          className="border-b border-b-slate-800"
          {...register("password")}
        />
      </label>

      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
        ref={recaptchaRef}
      />

      <button type="submit" disabled={isPending} className="cursor-pointer">
        {isLoginForm ? "Log In" : "Register"}
      </button>

      <p>
        {isLoginForm
          ? "Don't have an account yet? "
          : "Already have an account? "}
        {isLoginForm ? (
          <Link href={PUBLIC_PAGES.REGISTER} className="text-blue-900">
            sign up
          </Link>
        ) : (
          <Link href={PUBLIC_PAGES.LOGIN} className="text-blue-900">
            sign in
          </Link>
        )}
      </p>
    </form>
  );
}
