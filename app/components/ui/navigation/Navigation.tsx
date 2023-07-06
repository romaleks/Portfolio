import { FC } from 'react'

import Button from '../button/Button'

import NavItem from './NavItem'
import styles from './Navigation.module.scss'
import { navItems } from './navigation.data'

const Navigation: FC = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.items}>
        <div className={styles.logo}></div>

        {navItems.map(item => (
          <NavItem title={item.title} link={item.link} />
        ))}

        <Button title="Let's chat!" link="#contacts" />
      </ul>
    </nav>
  )
}

export default Navigation
