import React, { Fragment } from 'react';

// import node module libraries
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

// import provider and store from redux state management.
import { Provider } from 'react-redux';
import { store } from '../store/store';

// import Internationalization (i18n) from nextjs
import { NextIntlClientProvider } from 'next-intl';

// import Layout and theme style scss file
import Layout from '../components/Layout/Layout';
import '../styles/scss/theme.scss';

// Import menssages
import messagesEn from '../messages/en.json';
import messagesEs from '../messages/es.json';

function App({ Component, pageProps }) {
  const router = useRouter();
  const pageURL = process.env.baseURL + router.pathname;
  const title = 'Hermenautas – Diario de noticias mundial';
  const description =
    'Medio de comunicación independiente con información veraz y actualizada, que ofrece las últimas noticas que afectan a las libertades y los derechos de los ciudadanos en todos los ámbitos: economía, tecnología, salud, industria...';
  const keywords =
    'Noticias, Diario, Mundial, Medio de comunicación, Salud, Tecnología, Ciencia, Economía, Industria, Educación, Política, Religión, Investigaciones';

  let messages;
  switch (router.locale) {
    case 'en':
      messages = messagesEn;
      break;
    case 'es':
      messages = messagesEs;
      break;
    default:
      messages = messagesEn;
  }

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Europe/Brussels"
      messages={messages}
    >
      <Fragment>
        <Head>
          <meta name="keywords" content={keywords} />
          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        </Head>
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
                url: '/images/og/og-hermenautas.jpg',
                width: 1200,
                height: 630,
                alt: 'Portada Hermenautas',
              },
            ],
          }}
        />
        <Provider store={store}>
          <React.StrictMode>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </React.StrictMode>
        </Provider>
      </Fragment>
    </NextIntlClientProvider>
  );
}

export default App;
