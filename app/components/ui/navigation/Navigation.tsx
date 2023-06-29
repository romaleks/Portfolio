import { FC } from 'react'
import { navItems } from './navigation.data'
import NavItem from './NavItem'
import styles from './Navigation.module.scss'
import Button from '../button/Button'

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
