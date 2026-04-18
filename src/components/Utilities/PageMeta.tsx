import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  description?: string;
}

const SITE = "Chinmay Pillai";

export default function PageMeta({ title, description }: Props) {
  const fullTitle = title === SITE ? title : `${title} — ${SITE}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
    </Helmet>
  );
}
