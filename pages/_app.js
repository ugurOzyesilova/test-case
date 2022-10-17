import '../styles/globals.scss'
import { StateProvider } from "../contextapi/context";
function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  )
}

export default MyApp
