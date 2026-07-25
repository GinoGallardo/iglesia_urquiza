import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { env } from "../../lib/env";

const DEFAULT_DESCRIPTION =
  "Iglesia Cristiana de Villa Urquiza. Sumate a nuestras reuniones en Roosevelt 5537, CABA. Domingo 10:30 hs y Jueves 20 hs.";

const OG_IMAGE = `${env.siteUrl}/assets/portada-web-hero.jpg`;

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
}

export default function Seo({ title, description, path = "" }: SeoProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("en") ? "en" : "es";

  const resolvedTitle =
    title ??
    (lang === "en"
      ? "Iglesia de Urquiza | Christian Church in Villa Urquiza"
      : "Iglesia de Urquiza | Iglesia Cristiana en Villa Urquiza");

  const resolvedDescription =
    description ??
    (lang === "en"
      ? "Christian Church of Villa Urquiza. Join our gatherings at Roosevelt 5537, CABA."
      : DEFAULT_DESCRIPTION);

  const canonical = `${env.siteUrl}${path}`;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <Helmet>
      <html lang={lang} />
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content={lang === "en" ? "en_US" : "es_AR"} />
      <meta property="og:site_name" content="Iglesia de Urquiza" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  );
}
