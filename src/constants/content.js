import { CLIIcon, CloudIcon, KubernetesIcon, WaysIcon } from '@/img/home/svg'
import Huggingface from '@/img/home/Huggingface.svg'
import Supabase from '@/img/home/Supabase.svg'
import Pingcap from '@/img/home/Pingcap.svg'
import Appwrite from '@/img/home/Appwrite.svg'
import Lightly from '@/img/home/Lightly.svg'
import APITable from '@/img/home/APITable.svg'
import buildDevelopers from '@/img/home/build_developers.webp'
import collaboration from '@/img/home/collaboration.webp'
import dataSource from '@/img/home/data_source.webp'
import sqlGenerate from '@/img/home/sql_generate.webp'
import uiLibrary from '@/img/home/ui_library.webp'
import bgGenerate from '@/img/home/bg_generate.svg'
import bgAny from '@/img/home/bg_any.svg'
import bgCollaboration from '@/img/home/bg_collaboration.svg'
import bgFlexible from '@/img/home/bg_flexible.svg'
import bgFully from '@/img/home/bg_fully.svg'
import bgPartner from '@/img/home/bg_partner.svg'
import bgDevelopers from '@/img/home/bg_developers.svg'

export const contentList = [
  {
    contentSvg: sqlGenerate,
    tittleList: [
      'content.sql-generate.title-1',
      'content.sql-generate.title-2',
    ],
    colorationTitle: ['Generate', '智能生成'],
    color: bgGenerate,
    linkUrl: '/docs/sql-generate',
    linkContent: 'content.sql-generate.goto',
    extraLinkContent: '✍️ →',
    desc: 'content.sql-generate.introduction',
    imgDesc: 'SQL Generate. More AIGC features are coming soon.',
  },
  {
    contentSvg: buildDevelopers,
    tittleList: [
      'content.for-developer.title-1',
      'content.for-developer.title-2',
    ],
    colorationTitle: ['Developers', '开发者'],
    color: bgDevelopers,
    linkUrl: '/docs/javascript',
    linkContent: 'content.for-developer.goto',
    extraLinkContent: '😋 →',
    desc: 'content.for-developer.introduction',
  },
  {
    contentSvg: dataSource,
    tittleList: [
      'content.date-integrate.title-1',
      'content.date-integrate.title-2',
      'content.date-integrate.title-3',
      'content.date-integrate.title-4',
    ],
    colorationTitle: ['Any', '整合'],
    color: bgAny,
    linkUrl: '/docs/integration-list',
    linkContent: 'content.date-integrate.goto',
    extraLinkContent: '😀 →',
    desc: 'content.date-integrate.introduction',
    tags: [
      {
        tagDesc: 'DATABASES',
        tagBgColor: '#D8F233',
      },
      {
        tagDesc: 'APIS',
        tagBgColor: '#3BFC65',
      },
      {
        tagDesc: 'JS TRANSFORMER',
        tagBgColor: '#08FEC3',
      },
    ],
    imgDesc:
      'ILLA allows users to integrate with the following data sources via GUI mode: MySQL, Microsoft SQL Server, PostgreSQL, MongoDB, Redis, Elastic Search, Amazon DynamoDB, Snowflake, SMTP, REST API, S3, GraphQL, Clickhouse, MariaDB, Firebase, Appwrite, Supabase, TiDB, Hugging face, Oracle DB, CouchDB.',
  },
  {
    contentSvg: collaboration,
    tittleList: [
      'content.collaborative-develop.title-1',
      'content.collaborative-develop.title-2',
      'content.collaborative-develop.title-3',
      'content.collaborative-develop.title-4',
    ],
    colorationTitle: ['Collaboration', '协同'],
    color: bgCollaboration,
    linkUrl: '/docs/collaboration',
    linkContent: 'content.collaborative-develop.goto',
    extraLinkContent: '🤠 →',
    desc: 'content.collaborative-develop.introduction',
  },
  {
    contentSvg: uiLibrary,
    tittleList: [
      'content.ui-library.title-1',
      'content.ui-library.title-2',
      'content.ui-library.title-3',
      'content.ui-library.title-4',
    ],
    colorationTitle: ['fully', '完善'],
    color: bgFully,
    linkUrl: '/docs/illa-components',
    linkContent: 'content.ui-library.goto',
    extraLinkContent: '👍 →',
    desc: 'content.ui-library.introduction',
  },
]
export const deploymentContent = {
  tittleList: ['deployment.title-1', 'deployment.title-2'],
  colorationTitle: ['Flexible', '灵活'],
  color: bgFlexible,
  desc: 'deployment.introduction',
  items: [
    {
      icon: <CloudIcon />,
      showArrow: true,
      title: 'deployment.illa-cloud.title',
      des: 'deployment.illa-cloud.des',
      linkUrl: 'https://cloud.illacloud.com/',
      extraLinkContent: ' 👍',
    },
    {
      icon: <CLIIcon />,
      title: 'deployment.illa-CLI.title',
      des: 'deployment.illa-CLI.des',
      linkUrl: 'docs/illa-cli',
    },
    {
      icon: <KubernetesIcon />,
      title: 'deployment.kubernetes.title',
      des: 'deployment.kubernetes.des',
      linkUrl: 'https://github.com/illacloud/deploy-illa-manually/',
    },
    {
      icon: <WaysIcon />,
      title: 'deployment.docker.title',
      des: 'deployment.docker.des',
      linkUrl: 'https://github.com/illacloud/deploy-illa-manually/',
    },
  ],
}

export const partnerContent = {
  tittleList: ['partner'],
  colorationTitle: ['Partner', '合作伙伴'],
  becomePartner: 'Become a partner',
  color: bgPartner,
  partners: [
    {
      logo: Huggingface,
      name: 'Huggingface',
      desc: 'partnerList.partner-1',
      tag: 'AI',
      href: 'https://huggingface.co/',
      tagCategory: 'homepage_partner_hf_click',
    },
    {
      logo: Supabase,
      name: 'Supabase',
      desc: 'partnerList.partner-2',
      tag: 'Database',
      href: 'https://supabase.com/',
      tagCategory: 'homepage_partner_supabase_click',
    },
    {
      logo: Pingcap,
      name: 'Pingcap',
      desc: 'partnerList.partner-3',
      tag: 'Database',
      href: 'https://www.pingcap.com/',
      tagCategory: 'homepage_partner_pingcap_click',
    },
    {
      logo: Appwrite,
      name: 'Appwrite',
      desc: 'partnerList.partner-4',
      tag: 'Database',
      href: 'https://appwrite.io/',
      tagCategory: 'homepage_partner_appwrite_click',
    },
    {
      logo: Lightly,
      name: 'Lightly',
      desc: 'partnerList.partner-5',
      tag: 'API',
      href: 'https://www.lightly-dev.com/',
      tagCategory: 'homepage_partner_lightly_click',
    },
    {
      logo: APITable,
      name: 'APITable',
      desc: 'partnerList.partner-6',
      tag: 'API',
      href: 'https://apitable.com/',
      tagCategory: 'homepage_partner_apitable_click',
    },
  ],
}
export const partnerFormContent = [
  {
    label: 'partnerFrom.form.title.label',
    name: 'title',
  },
  {
    label: 'partnerFrom.form.companyName.label',
    name: 'companyName',
    required: true,
  },
  {
    label: 'partnerFrom.form.companyWebsite.label',
    name: 'companyWebsite',
    required: true,
    pattern:
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/,
    placeholder: "www.illacloud.com",
  },
  {
    label: 'partnerFrom.form.email.label',
    name: 'email',
    required: true,
    pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    placeholder: "business@illasoft.com",
  },
]
export const bookFormContent = [
  ...partnerFormContent,
  {
    label: 'bookFrom.form.about.label',
    name: 'about',
    required: true,
  },
  {
    label: 'bookFrom.form.wantTo.label',
    name: 'wantTo',
    required: true,
  },
]
