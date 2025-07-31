import { ISocial, Social } from "@/data/socials.data";

interface Props {
  socials: ISocial[];
  redirect: (socialsId: Social) => void;
}

export function SocialsButtons({ socials, redirect }: Props) {
  return (
    <ul className="flex items-center gap-3">
      {socials.map((s) => (
        <li key={s.id}>
          <button
            title={`sign in with ${s.id}`}
            onClick={() => redirect(s.id)}
            className="w-fit py-1 px-4 border cursor-pointer shadow rounded-lg"
          >
            <s.icon size={20} />
          </button>
        </li>
      ))}
    </ul>
  );
}
