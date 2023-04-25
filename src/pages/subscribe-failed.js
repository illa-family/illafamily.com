import { Nav } from '@/components/home/oldNav'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { SubscribeCard } from '@/components/subscribe/Card'

const SubscribedFail = () => {
  const { t } = useTranslation('subscribe')

  return (
    <>
      <Head>
        <title>{t('desc')}</title>
      </Head>
      <div className=" w-full items-center flex flex-col  bg-[#ffffff] lg:bg-[#fafafa]">
        <div className="lg:h-screen  mb-[40px] lg:mb-0 flex flex-col  items-center  lg:items-center  w-full ">
          <Nav />
          <SubscribeCard failed />
        </div>
      </div>
    </>
  )
}
export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['subscribe', 'home'])),
  },
})

export default SubscribedFail
