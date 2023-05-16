import withDarkMode from 'next-dark-mode'
import '../styles/globals.sass'
import Head from "next/head"
import PWAheaders from '../components/pwa_headers';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Polyrhythm Metronome</title>
      <meta name="description" content="A simple open source Polyrhythmic Generator / Metronome. Ever wanted to study a 13:7 or 3:4:5 or 42:69 polyrhythm? Then this is the app for you!" />
      <PWAheaders/>
    </Head>
    <Component {...pageProps} />
  </>
}

export default withDarkMode(MyApp);
