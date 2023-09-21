import { useTranslation } from 'next-i18next'
import style from './index.module.css'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { ContributeHeaderCard } from './card'
import { ContributeStepCard } from '@/constants/hacktober'
import docIcon from '@/img/hacktoberfest/doc.svg'
import playIcon from '@/img/hacktoberfest/play.svg'
import { CardButton } from '../cardButton'

export const ContributeHeaderMobile = ({ setPlayMaskShow, title }) => {
  const { t } = useTranslation('hacktober')
  const router = useRouter()
  const contents = [
    {
      text: 'contribute-method.steps.doc',
      href: 'https://github.com/illacloud/illa-builder/blob/main/hacktoberfest2023/README.md',
      longButton: true,
      leftIcon: docIcon,
    },
    {
      text: 'contribute-method.steps.video',
      pureButton: true,
      onClick: setPlayMaskShow,
      leftIcon: playIcon,
    },
  ]

  return (
    <div className={style.contributeInfoContainer}>
      <div className={style.contributeHeaderContainer}>
        <h1
          className={clsx(
            style.contributeTitle,
            router.locale === 'zh-CN' ? style.zhTitle : style.otherTitle,
          )}
        >
          {t(title)}
        </h1>
        <div className={style.cardsContainer}>
          {ContributeStepCard.map((card, index) => (
            <ContributeHeaderCard
              key={index}
              content={card}
              index={index + 1}
              isShowLine={index !== ContributeStepCard.length - 1}
            />
          ))}
        </div>
      </div>

      <div className={style.mobileCardTitleBtn}>
        {contents.map((content) => {
          return <CardButton key={content.title} content={content} />
        })}
      </div>
    </div>
  )
}