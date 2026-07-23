import type { SocialLink } from "../../types";
import { IoLogoYoutube, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";

const redes: SocialLink[] = [
  {
    name: "youtube",
    href: "https://www.youtube.com/@IGLESIADEURQUIZA",
    Icon: IoLogoYoutube,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/iglesiadeurquiza/",
    Icon: IoLogoInstagram,
  },
  {
    name: "facebook",
    href: "https://www.facebook.com/iglesiadeurquiza#",
    Icon: IoLogoFacebook,
  },
];

interface RedesProps {
  className?: string;
}

function Redes({ className }: RedesProps) {
  const iconClassName = className ?? "size-6 text-white";

  return (
    <section className="flex gap-4" aria-label="Redes sociales">
      {redes.map(({ name, href, Icon }) => (
        <a
          className="flex hover:scale-120"
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visitar ${name} de Iglesia de Urquiza`}
        >
          <Icon className={iconClassName} />
        </a>
      ))}
    </section>
  );
}

export default Redes;
