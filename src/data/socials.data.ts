import { IconType } from "react-icons";
import { FaGithub, FaGoogle, FaYandex } from "react-icons/fa";

export type Social = "yandex" | "google" | "github";

export interface ISocial {
  id: Social;
  icon: IconType;
}

export const socials: ISocial[] = [
  { id: "google", icon: FaGoogle },
  { id: "yandex", icon: FaYandex },
  { id: "github", icon: FaGithub },
];
