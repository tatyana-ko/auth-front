import { PUBLIC_PAGES } from "@/config/public-pages.config";
import { authService } from "@/services/auth.service";
import { IAuthData } from "@/types/auth.types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export function useAuthForm(type: "login" | "register") {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<IAuthData>();

  const { mutate, isPending } = useMutation({
    mutationKey: [type],
    mutationFn: (data: IAuthData) =>
      authService.main(type, data, recaptchaRef.current?.getValue()),
    onSuccess: () => {
      switch (type) {
        case "login":
          reset();
          toast.success("You have successfully logged in!");
          router.push(PUBLIC_PAGES.HOME);
          break;

        case "register":
          reset();
          toast.success("You have registered successfully!");
          break;

        default:
          break;
      }
    },
    onError: (e) => {
      if (axios.isAxiosError(e)) {
        toast.error(e.response?.data?.message);
      }
    },
  });

  const onSubmit: SubmitHandler<IAuthData> = (data) => {
    const isRecaptcha = recaptchaRef.current?.getValue();

    if (!isRecaptcha) {
      toast.error("You need to pass the captcha!");
      return;
    }

    mutate(data);
  };

  return {
    onSubmit,
    isPending,
    register,
    handleSubmit,
    recaptchaRef,
  };
}
