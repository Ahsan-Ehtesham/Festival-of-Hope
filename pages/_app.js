import "../styles/globals.css";
import "../styles/app.scss";
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
// import { Poppins } from '@next/font/google';
// import { Roboto } from '@next/font/google';

// const poppins = Poppins({
//   weight: ['400', '700']
// })

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
