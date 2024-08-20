// import node module libraries
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';

// Custom functionalities
import { decodeHtml } from '../../utils/decodeHTML';

const HermenautasSEO = (props) => {
  const router = useRouter();
  const pageURL = process.env.NEXT_PUBLIC_HOST_URL + router.asPath;
  const { title, description, imgUrl, imgAlt } = props;
  const parseDescription = parse(decodeHtml(description));

  return (
    <NextSeo
      title={title}
      description={parseDescription[0].props?.children}
      canonical={pageURL}
      openGraph={{
        url: pageURL,
        title: title,
        description: parseDescription[0].props?.children,
        site_name: process.env.NEXT_PUBLIC_SITE_NAME,
        images: [
          {
            url: imgUrl,
            width: 1200,
            height: 630,
            alt: imgAlt,
          },
        ],
      }}
      twitter={{
        handle: '@hermenautasTM',
        cardType: 'summary_large_image',
      }}
    />
  );
};
export default HermenautasSEO;
