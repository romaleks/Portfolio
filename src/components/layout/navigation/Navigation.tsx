import { FC } from 'react'

import Button from '../../ui/button/Button'
import RevealElement from '../../ui/reveal-element/RevealElement'

import NavItem from './NavItem'
import styles from './Navigation.module.scss'
import { navItems } from './navigation.data'

const Navigation: FC = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.items}>
        <div className={styles.logo}></div>

        {navItems.map(item => (
          <RevealElement>
            <NavItem title={item.title} link={item.link} />
          </RevealElement>
        ))}

        <Button title="Let's chat!" link="#contacts" />
      </ul>
    </nav>
  )
}

export default Navigation
