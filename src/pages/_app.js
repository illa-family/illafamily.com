import '../css/fonts.css'
import '../css/main.css'
import '@/components/selfHost/coverInnerHtml.css'
import 'focus-visible'
import { useState, useEffect, Fragment } from 'react'
import { Title } from '@/components/Title'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'
import Head from 'next/head'
import socialCardLarge from '@/img/social-card-large.png'
import { ResizeObserver } from '@juggle/resize-observer'
import 'intersection-observer'
import { appWithTranslation, useTranslation } from 'next-i18next'

if (typeof window !== 'undefined' && !('ResizeObserver' in window)) {
  window.ResizeObserver = ResizeObserver
}

const progress = new ProgressBar({
  size: 2,
  color: '#38bdf8',
  className: 'bar-of-progress',
  delay: 100,
})

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== 'undefined') {
  progress.start()
  progress.finish()
}

Router.events.on('routeChangeStart', () => progress.start())
Router.events.on('routeChangeComplete', () => progress.finish())
Router.events.on('routeChangeError', () => progress.finish())

function App({ Component, pageProps, router }) {
  let [navIsOpen, setNavIsOpen] = useState(false)
  const { t } = useTranslation('home')

  useEffect(() => {
    if (!navIsOpen) return

    function handleRouteChange() {
      setNavIsOpen(false)
    }

    Router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [navIsOpen, router.pathname])

  const Layout = Component.layoutProps?.Layout || Fragment
  const layoutProps = Component.layoutProps?.Layout
    ? { layoutProps: Component.layoutProps, navIsOpen, setNavIsOpen }
    : {}
  const meta = Component.layoutProps?.meta || {}
  const description =
    meta.metaDescription || meta.description || t('meta.description')

  if (router.pathname.startsWith('/examples/')) {
    return <Component {...pageProps} />
  }

  let section =
    meta.section ||
    Object.entries(Component.layoutProps?.Layout?.nav ?? {}).find(([, items]) =>
      items.find(({ href }) => {
        return href === router.pathname
      }),
    )?.[0]

  return (
    <>
      <Title suffix="ILLA">{meta.metaTitle || meta.title}</Title>
      <meta
        name="google-site-verification"
        content="OUXmcu0vZKXsDme_4ycUDM3OdGhf_wH6_gxaDixI9Ng"
      />
      <Head>
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta key="twitter:site" name="twitter:site" content="@illaCloudHQ" />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={description}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://illa.cloud${socialCardLarge}`}
        />
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content="@illaCloudHQ"
        />
        <meta
          key="og:url"
          property="og:url"
          content={`https://illa.cloud${router.pathname}`}
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={`https://illa.cloud${socialCardLarge}`}
        />
        <meta
          name="google-site-verification"
          content="Jsfwfmzu_AE4NZCHQuCT2F9dMHj6MdOPBIlaNf1H8fU"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS 2.0"
          href="/feeds/feed.xml"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="Atom 1.0"
          href="/feeds/atom.xml"
        />
        <link
          rel="alternate"
          type="application/json"
          title="JSON Feed"
          href="/feeds/feed.json"
        />
      </Head>
      <Layout {...layoutProps}>
        <Component section={section} {...pageProps} />
      </Layout>
    </>
  )
}

export default appWithTranslation(App)
