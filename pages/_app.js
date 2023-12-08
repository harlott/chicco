import { Poppins } from 'next/font/google';

import '../styles/foundation.css';
import '../styles/style.css';
import '../styles/patch.css';
import '../styles/fontello.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <>
    <style jsx global>{`
        h1, h2, h3, h4, h5, h6 {
          font-family: ${poppins.style.fontFamily};
        }
        .big-size {
          font-family: ${poppins.style.fontFamily};
        }
        .section-title p.small-title {
          font-weight: bold;
          font-family: ${poppins.style.fontFamily};
          font-size: 14px;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
};
