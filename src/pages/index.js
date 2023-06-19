import Head from 'next/head'
import { Nav } from '@/components/home/NewNav'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { NewContent } from '@/components/home/Content3'
import { Footer } from '@/components/home/NewFooter'
import { Title } from '@/components/home/title'
import { MobileTitle, Modal } from '@/components/home/mobileTitle'
import BecomePartner from '@/components/home/Form/BecomePartner'
import { BookDemo } from '@/components/home/Form/BookDemo'
import { useRaf } from 'react-use'
import Script from 'next/script'
import { getStars } from '@/utils/getStars'
import { getGithubOauth } from '@/utils/getGithubOauth'
import { useRouter } from 'next/router'
import { HomeSchemaData } from '@/components/schemaData/homeSchemaData'

const Home = ({ starCounts, uri }) => {
  const { t } = useTranslation('home')
  const [playMaskShow, setPlayMaskShow] = useState(false)
  const [isPartnerShow, setIsPartnerShow] = useState(false)
  const [isBookShow, setIsBookShow] = useState(false)
  const step = useRaf(1000, 0)
  const router = useRouter()

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
        <link
          rel="canonical"
          href={`https://www.illacloud.com${router.locale === 'en-US' ? '' : `/${router.locale}`}`}
        />
      </Head>
      <HomeSchemaData />
      <div className="bg-gray-01 overflow-visible w-full z-[2] bg-mobileHeader bg-contain bg-no-repeat">
        <Nav
          whiteTheme={false}
          onChangeShow={() => setIsBookShow(true)}
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
          setPlayMaskShow={setPlayMaskShow}
          githubStarts={Math.floor(starCounts * step)}
        />
        <MobileTitle
          setPlayMaskShow={setPlayMaskShow}
          githubStarts={Math.floor(starCounts * step)}
        />
        <NewContent onChangeShow={() => setIsPartnerShow(true)} uri={uri} />
        <Modal isOpen={playMaskShow} onClose={() => setPlayMaskShow(false)} />
        <BecomePartner
          visible={isPartnerShow}
          onChangeShow={() => setIsPartnerShow(false)}
        />
        <BookDemo
          visible={isBookShow}
          onChangeShow={() => setIsBookShow(false)}
        />
      </div>
      <Footer scrollStart={0.939} scrollEnd={1} />
    </>
  )
}

export const getServerSideProps = async ({ locale }) => {
  const starCounts = await getStars()
  const uri = await getGithubOauth()
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'common'])),
      starCounts,
      uri
    },
  }
}

export default Home
