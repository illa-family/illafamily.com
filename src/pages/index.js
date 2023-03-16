import Head from 'next/head'
import { Nav } from '@/components/home/Nav'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Content } from '@/components/home/content'
import { Footer } from '@/components/home/home-footer'
import { Title } from '@/components/home/title'
import { MobileTitle, Modal } from '@/components/home/mobileTitle'
import { SubscribeModal } from '@/components/home/Subscribe'
import Script from 'next/script'

const Home = (props) => {
  const { t } = useTranslation('home')

  const [playMaskShow, setPlayMaskShow] = useState(false)
  const [modalVisible, setModalVisible] = useState()
  const { starCounts } = props;
  return (
    <>
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="ILLA Cloud | Accelerate your internal tools development."
        />
        <meta
          key="og:title"
          property="og:title"
          content="ILLA Cloud | Accelerate your internal tools development."
        />
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta
          name="keywords"
          content="illa,illacloud,illa cloud,艾拉云科,Retool,Budibase,Tooljet,UIBakery, Low-code,open-source, developers, developer tool, internal, rust,illa, illabuilder, illa-builder, retool alternative, Appsmith, Appsmith alternative, open-source alternative, budibase alternative,ローコード,低代码,开发者工具,낮은 코드,오픈 소스,オープンソース"
        />
        <script
          async
          src="https://tag.clearbitscripts.com/v1/pk_2f29e3957a45fd04b8f4c8fe8a98a7d1/tags.js"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </Head>
      <div className="bg-gray-01 w-full overflow-y-auto xs:rounded-b-[40px] z-[2] bg-mobileHeader bg-contain bg-no-repeat">
        <Nav
          githubStarts={starCounts}
          onSubscribe={() => setModalVisible(true)}
          whiteTheme={false}
        />

        {/*Global site tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4VKRNGN7GE"
        />
        <Script strategy="afterInteractive" id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4VKRNGN7GE');
        `}
        </Script>
        <Script>
          {`(function (d, t) {
            var BASE_URL = "https://app.chatwoot.com";
            var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
            g.src = BASE_URL + "/packs/js/sdk.js";
            g.defer = true;
            g.async = true;
            s.parentNode.insertBefore(g, s);
            g.onload = function () {
              window.chatwootSDK.run({
                websiteToken: 'ECxzx85niyQqKpnUytwMjpUM',
                baseUrl: BASE_URL
              })
            }
          })(document, "script");`}
        </Script>
        <Title
          githubStarts={starCounts}
          setPlayMaskShow={setPlayMaskShow}
          onSubscribe={() => setModalVisible(true)}
        />
        <MobileTitle
          setPlayMaskShow={setPlayMaskShow}
          githubStarts={starCounts}
          onSubscribe={() => setModalVisible(true)}
        />
        <Content />
        <Modal isOpen={playMaskShow} onClose={() => setPlayMaskShow(false)} />
        <SubscribeModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </div>
      <div onClick={() => {
        fetch("/sendMessageToServer")
      }}>
        11adsadas
      </div>
      <Footer />
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  const res = await fetch('https://api.github.com/repos/illacloud/illa-builder')
  const resJSON = await res.json()
  const starCounts = resJSON?.stargazers_count || 0
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'navs'])),
      starCounts,
    },
    revalidate: 10,
  }
}

export default Home
