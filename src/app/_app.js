// pages/_app.js or _app.tsx
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
