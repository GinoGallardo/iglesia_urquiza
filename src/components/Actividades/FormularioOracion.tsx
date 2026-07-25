import { useState, type FormEvent } from "react";
import { whatsappUrl } from "../../lib/env";
import { Reveal } from "../ui/Reveal";

export default function FormularioOracion() {
  const [tipo, setTipo] = useState("peticion");
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!consent || !nombre.trim() || !mensaje.trim()) return;

    const tipoLabel =
      tipo === "agradecimiento"
        ? "Agradecimiento / testimonio"
        : "Petición de oración";

    const text = [
      `Hola, quiero enviar una ${tipoLabel.toLowerCase()}.`,
      `Nombre: ${nombre.trim()}`,
      `Mensaje: ${mensaje.trim()}`,
    ].join("\n");

    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section-space bg-surface-elevated" id="pedir-oracion">
      <div className="section-shell max-w-3xl">
        <Reveal>
          <p className="text-center text-sm tracking-[0.3em] text-brand uppercase dark:text-brand-light">
            Oramos por vos
          </p>
          <h2 className="mt-2 text-center font-sans text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Cuéntanos tu historia o hacé una petición
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            Como iglesia creemos en el poder de la oración. Compartí tu petición
            o agradecimiento y nos unimos a orar con vos.
          </p>
        </Reveal>

        <Reveal delayMs={100}>
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5 rounded-[1.75rem] border border-black/5 bg-surface p-6 shadow-sm md:p-8 dark:border-white/10"
          >
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Tipo
              </span>
              <select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="w-full rounded-xl border border-black/10 bg-surface-elevated px-4 py-3 text-ink outline-none focus:border-brand dark:border-white/15 dark:bg-[#140505]"
              >
                <option value="peticion">Petición de oración</option>
                <option value="agradecimiento">
                  Agradecimiento o testimonio
                </option>
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Nombre
              </span>
              <input
                type="text"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full rounded-xl border border-black/10 bg-surface-elevated px-4 py-3 text-ink outline-none focus:border-brand dark:border-white/15 dark:bg-[#140505]"
                placeholder="Tu nombre"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Tu mensaje
              </span>
              <textarea
                required
                rows={5}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="w-full resize-y rounded-xl border border-black/10 bg-surface-elevated px-4 py-3 text-ink outline-none focus:border-brand dark:border-white/15 dark:bg-[#140505]"
                placeholder="Escribí tu petición o agradecimiento…"
              />
            </label>

            <label className="flex items-start gap-3 text-sm text-muted">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1"
                required
              />
              <span>
                Doy consentimiento para que Iglesia de Urquiza reciba estos
                datos y se contacte conmigo por WhatsApp respecto a esta
                petición.
              </span>
            </label>

            <button
              type="submit"
              className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-muted disabled:opacity-50"
              disabled={!consent}
            >
              Enviar tu mensaje
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
