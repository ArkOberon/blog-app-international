import React, { Fragment } from "react";

// import node module libraries
import Head from 'next/head';
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

// import provider and store from redux state management.
import { Provider } from 'react-redux'
import { store } from '../store/store'

// import Internationalization (i18n) from nextjs
import {NextIntlClientProvider} from 'next-intl';

// import Layout and theme style scss file
import Layout from "../components/Layout/Layout"
import '../styles/scss/theme.scss';

function App({ Component, pageProps }) {
  const router = useRouter();
  const pageURL = process.env.baseURL + router.pathname;
  const title = "Geeks UI - Nextjs fully responsive template ";
  const description = "Geeks is a fully responsive and yet modern premium Nextjs template & snippets. Geek is feature-rich Nextjs components and beautifully designed pages that help you create the best possible website and web application projects. Nextjs Snippet "
  const keywords = "Geeks UI, Nextjs, Next.js, Course, Sass, landing, Marketing, admin themes, Nextjs admin, Nextjs dashboard, ui kit, web app, multipurpose"

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Europe/Brussels"
      messages={pageProps.messages}
    >
      <Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
            site_name: process.env.siteName,
            images: [
              {
                url: '/images/og/geeks-ui-next-js-default-og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Geeks UI NextJS',
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

export default App