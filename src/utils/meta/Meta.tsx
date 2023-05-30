'use client'
import Head from 'next/head'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'

import logoImage from '@/assets/images/logo.svg'

import { onlyText } from '../string/clearText'

import { ISeo } from './meta.interface'

const Meta: FC<PropsWithChildren & ISeo> = ({
  title,
  description,
  image,
  children,
}) => {
  const pathname = usePathname()
  const currentUrl = `${process.env.APP_URL}${pathname}`

  return (
    <>
      <Head>
        <title itemProp="headline">{title}</title>
        {description ? (
          <>
            <meta
              itemProp="description"
              name="description"
              content={onlyText(description, 152)}
            />
            <link rel="canonical" href={currentUrl} />
            <meta property="og:locale" content="en" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={title} />
            <meta
              property="og:description"
              content={onlyText(description, 197)}
            />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {children}
    </>
  )
}

export default Meta
