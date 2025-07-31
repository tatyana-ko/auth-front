import { IconType } from "react-icons";
import { FaGithub, FaGoogle, FaYandex } from "react-icons/fa";

export interface ISocial {
  id: string;
  icon: IconType;
}

export const socials: ISocial[] = [
  { id: "google", icon: FaGoogle },
  { id: "yandex", icon: FaYandex },
  { id: "github", icon: FaGithub },
];
