import withDarkMode from 'next-dark-mode'
import '../styles/globals.sass'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withDarkMode(MyApp);
