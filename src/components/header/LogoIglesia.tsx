import logoIglesiaWhite from "../../assets/logo-iglesia-sin-techo-transparente(blanco).png";

function LogoIglesia() {
  return (
    <div className="flex lg:flex-1">
      <a href="#inicio" className="-m-1.5 p-1.5">
        <span className="text-xl">Iglesia de Urquiza</span>
        <img
          alt="Logo Iglesia de Urquiza"
          src={logoIglesiaWhite}
          className="m-auto h-10 w-auto"
          width={40}
          height={40}
        />
      </a>
    </div>
  );
}

export default LogoIglesia;
