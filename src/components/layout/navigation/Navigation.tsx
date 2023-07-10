'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import Button from '../../ui/button/Button'
import RevealElement from '../../ui/reveal-element/RevealElement'

import NavItem from './NavItem'
import styles from './Navigation.module.scss'
import { navItems } from './navigation.data'
import { useBoudedScroll } from './useBoundedScroll'

const Navigation: FC = () => {
  let { status } = useBoudedScroll()

  const variants = {
    visible: {
      backgroundColor: '#000',
    },
    hidden: {
      height: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(10px)',
    },
  }

  return (
    <motion.nav
      className={styles.navigation}
      variants={variants}
      animate={status}
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
