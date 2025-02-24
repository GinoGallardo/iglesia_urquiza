import logoIglesiaWhite from "../../assets/logo-iglesia-sin-techo-transparente(blanco).png";

function LogoIglesia() {
  return (
    <>
      <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-xl">Iglesia de Urquiza</span>
            <img
              alt=""
              src={logoIglesiaWhite}
              className="h-10 w-auto m-auto"
            />
          </a>
        </div>
    </>
  )
}

export default LogoIglesia