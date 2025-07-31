"use client";

import { SocialsButtons } from "@/components/SocialsButtons";
import { SwitchingAuth } from "@/components/SwitchingAuth";
import { BACKEND_SOCIAL_AUTH_URL } from "@/constants/constants";
import { Social, socials } from "@/data/socials.data";
import { useAuthForm } from "@/hooks/useAuthForm";
import ReCAPTCHA from "react-google-recaptcha";

interface Props {
  isLoginForm: boolean;
  title: string;
}

export function AuthForm({ title, isLoginForm }: Props) {
  const { handleSubmit, isPending, onSubmit, register, recaptchaRef } =
    useAuthForm(isLoginForm ? "login" : "register");

  const handleRedirect = (socialsId: Social) => {
    window.location.href = `${BACKEND_SOCIAL_AUTH_URL}/${socialsId}`;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-3 py-2 px-3"
    >
      <h1 className="text-xl">{title}</h1>

      <label className="flex flex-col gap-2 w-full">
        <span>Email:</span>
        <input
          type="text"
          placeholder="example@mail.com"
          className="border-b border-b-slate-800"
          {...register("email")}
        />
      </label>

      <label className="flex flex-col gap-2 w-full">
        <span>Password:</span>
        <input
          type="password"
          placeholder="enter your password here"
          className="border-b border-b-slate-800"
          {...register("password")}
        />
      </label>

      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
        ref={recaptchaRef}
      />

      <SocialsButtons socials={socials} redirect={handleRedirect} />

      <button
        type="submit"
        disabled={isPending}
        className="w-fit py-1 px-2 bg-[#81baa0] cursor-pointer shadow rounded-lg"
      >
        {isLoginForm ? "Log In" : "Register"}
      </button>

      <SwitchingAuth isLoginForm={isLoginForm} />
    </form>
  );
}
