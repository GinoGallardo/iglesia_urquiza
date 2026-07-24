import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { env } from "../../lib/env";

const DEFAULT_DESCRIPTION =
  "Iglesia Cristiana de Villa Urquiza. Sumate a nuestras reuniones en Roosevelt 5537, CABA. Domingo 10:30 hs y Jueves 20 hs.";

const OG_IMAGE = `${env.siteUrl}/assets/portada-web-hero.jpg`;

export default function Seo() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("en") ? "en" : "es";

  const title =
    lang === "en"
      ? "Iglesia de Urquiza | Christian Church in Villa Urquiza"
      : "Iglesia de Urquiza | Iglesia Cristiana en Villa Urquiza";

  const description =
    lang === "en"
      ? "Christian Church of Villa Urquiza. Join our gatherings at Roosevelt 5537, CABA."
      : DEFAULT_DESCRIPTION;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={env.siteUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={env.siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content={lang === "en" ? "en_US" : "es_AR"} />
      <meta property="og:site_name" content="Iglesia de Urquiza" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  );
}
