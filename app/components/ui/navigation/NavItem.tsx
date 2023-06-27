import { FC } from 'react'
import { INavItem } from './navigation.interface'
import Link from 'next/link'

import styles from './Navigation.module.scss'

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
