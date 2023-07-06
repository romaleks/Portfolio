import Link from 'next/link'
import { FC } from 'react'

import styles from './Navigation.module.scss'
import { INavItem } from './navigation.interface'

const NavItem: FC<INavItem> = ({ title, link }) => {
  return (
    <li>
      <Link href={link} className={styles.link}>
        {title}
      </Link>
    </li>
  )
}

export default NavItem
