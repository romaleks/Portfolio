'use client'

import { motion, useTransform } from 'framer-motion'
import { FC } from 'react'

import Button from '@/components/ui/button/Button'
import RevealElement from '@/components/ui/reveal-element/RevealElement'

import NavItem from './NavItem'
import styles from './Navigation.module.scss'
import { navItems } from './navigation.data'
import { useBoundedScroll } from './useBoundedScroll'

const Navigation: FC = () => {
  let { scrollYBoundedProgress } = useBoundedScroll(200)

  // Nav bar changing
  const padding = useTransform(
    scrollYBoundedProgress,
    [0, 1],
    ['1rem', '0.3rem']
  )
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

  // Items changing
  const scale = useTransform(scrollYBoundedProgress, [0, 1], [1, 0.8])
  const opacity = useTransform(scrollYBoundedProgress, [0, 1], [1, 0])
  const y = useTransform(scrollYBoundedProgress, [0, 1], [0, -50])
  const x = useTransform(scrollYBoundedProgress, [0, 1], [0, -8])

  return (
    <motion.nav
      className={styles.navigation}
      style={{ padding, backgroundColor, backdropFilter }}
    >
      <ul className={styles.items}>
        <motion.div className={styles.logo} style={{ scale }}></motion.div>

        {navItems.map(item => (
          <RevealElement key={item.title}>
            <motion.div style={{ opacity, x, y }}>
              <NavItem title={item.title} link={item.link} />
            </motion.div>
          </RevealElement>
        ))}

        <motion.div className={styles.button} style={{ scale }}>
          <Button title="Let's chat!" link="#contacts" />
        </motion.div>
      </ul>
    </motion.nav>
  )
}

export default Navigation
