import "../styles/globals.css";
import "../styles/app.scss";
import 'bootstrap/dist/css/bootstrap.css'
// import { Poppins } from '@next/font/google';
// import { Roboto } from '@next/font/google';

// const poppins = Poppins({
//   weight: ['400', '700']
// })

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
