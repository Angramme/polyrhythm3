import { CookieConsent } from "components/cookie";
import '../styles/globals.sass'

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <CookieConsent/>
  </>
}

export default MyApp;
