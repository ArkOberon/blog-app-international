// import node module libraries
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

const HermenautasSEO = (props) => {
  const router = useRouter()
  const pageURL = process.env.NEXT_PUBLIC_HOST_URL + router.pathname
  const { title, description, imgUrl, imgAlt } = props
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={pageURL}
      openGraph={{
        url: pageURL,
        title: title,
        description: description,
        site_name: process.env.NEXT_PUBLIC_SITE_NAME,
        images: [
          {
            url: imgUrl ? imgUrl : '/images/og/og-hermenautas.jpg',
            width: 1200,
            height: 630,
            alt: imgAlt,
          },
        ],
      }}
    />
  )
}
export default HermenautasSEO
