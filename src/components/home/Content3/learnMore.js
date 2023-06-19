import style from './index.module.css'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import { sendTagEvent } from '@/utils/gtag'
import { Vector } from '@/img/public/vector'

export const LearnMore = ({ href, title, category, leftPadding = false }) => {
  const { t } = useTranslation('home')
  return (
    <Link href={href}>
      <div className={clsx(style.swipeMore, leftPadding ? 'xl:pl-[30px]' : '')} onClick={() => {
        sendTagEvent({
          action: 'click',
          category,
          label: t(title),
        })
      }}>
        <span className='underline'>{t(title)}</span>
        <Vector />
      </div>
    </Link>
  )
}