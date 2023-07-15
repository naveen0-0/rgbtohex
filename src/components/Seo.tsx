import Head from "next/head";
import { siteData } from "@/utils/constants";
import { jsonLDGen } from "@/utils/helper";
import { useRouter } from "next/router";

interface Props {
  generator: string;
  title: string;
  description: string;
  image?: { src: string; alt: string };
  robots?: boolean;
}

const Seo = ({
  title,
  description,
  generator,
  image,
  robots = true,
}: Props) => {
  const router = useRouter();
  const url = `${siteData.url}${router.asPath}`;
  const jsonLD = jsonLDGen({
    url,
  });
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="viewport" content="width=device-width" />
      <meta name="generator" content={generator} />
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={url} />

      {/* <!-- Open Graph --> */}
      <meta property="og:site_name" content="Various Calculators" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image?.src || siteData.image.src} />
      <meta
        property="og:image:url"
        content={image?.src || siteData.image.src}
      />
      <meta
        property="og:image:secure_url"
        content={image?.src || siteData.image.src}
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />
      <meta
        property="og:image:alt"
        content={image?.alt || siteData.image.alt}
      />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image?.src || siteData.image.src} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:domain" content={url} />

      {robots && <meta name="robots" content="noindex, nofollow" />}

      {/* <!-- JSON LD --> */}
      {jsonLD}
    </Head>
  );
};

export default Seo;
