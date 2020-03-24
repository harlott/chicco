import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href={`${withPrefix('/')}img/favicon/apple-icon-57x57.png`}
        />

        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href={`${withPrefix('/')}img/favicon/apple-icon-60x60.png`}
        />

        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={`${withPrefix('/')}img/favicon/apple-icon-72x72.png`}
        />

        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${withPrefix('/')}img/favicon/apple-icon-76x76.png`}
        />

        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href={`${withPrefix('/')}img/favicon/apple-icon-114x114.png`}
        />

        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={`${withPrefix('/')}img/favicon/apple-icon-120x120.png`}
        />

        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href={`${withPrefix('/')}img/favicon/apple-icon-144x144.png`}
        />

        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`${withPrefix('/')}img/favicon/apple-icon-152x152.png`}
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/favicon/apple-icon-180x180.png`}
        />

        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`${withPrefix('/')}img/favicon/android-icon-192x192.png`}
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${withPrefix('/')}img/favicon/favicon-32x32.png`}
        />

        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`${withPrefix('/')}img/favicon/favicon-96x96.png`}
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${withPrefix('/')}img/favicon/favicon-16x16.png`}
        />

        <link
          rel="manifest"
          href={`${withPrefix('/')}img/favicon/manifest.json`}
        />

        <meta
          name="msapplication-TileColor"
          content="#ffffff"
        />

        <meta
          name="msapplication-TileImage"
          content={`${withPrefix('/')}img/favicon/ms-icon-144x144.png`}
        />
      
        <meta
          name="theme-color"
          content="#ffffff"
        />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
