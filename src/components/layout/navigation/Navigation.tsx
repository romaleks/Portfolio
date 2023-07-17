'use client'

import { motion, useTransform } from 'framer-motion'
import { FC, useEffect } from 'react'

import Button from '@/components/ui/button/Button'
import RevealElement from '@/components/ui/reveal-element/RevealElement'

import NavItem from './NavItem'
import styles from './Navigation.module.scss'
import { navItems } from './navigation.data'
import { useBoundedScroll } from './useBoundedScroll'

const Navigation: FC = () => {
  let { scrollYBoundedProgress } = useBoundedScroll(200)

  const height = useTransform(scrollYBoundedProgress, [0, 1], [80, 50])
  const backgroundColor = useTransform(
    scrollYBoundedProgress,
    [0, 1],
    ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.5)']
  )
  const backdropFilter = useTransform(
    scrollYBoundedProgress,
    [0, 1],
    ['blur(0px)', 'blur(10px)']
  )

  return (
    <motion.nav
      className={styles.navigation}
      style={{ height, backgroundColor, backdropFilter }}
    >
      <ul className={styles.items}>
        <div className={styles.logo}></div>

        {navItems.map(item => (
          <RevealElement>
            <NavItem title={item.title} link={item.link} />
          </RevealElement>
        ))}

        <Button title="Let's chat!" link="#contacts" />
      </ul>
    </motion.nav>
  )
}

export default Navigation
