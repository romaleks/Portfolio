import { FC } from 'react'
import styles from './AnimatedCard.module.scss'
import Image from 'next/image'
import { IAnimatedCard } from './AnimatedCard'

const Card: FC<IAnimatedCard> = ({ image, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  )
}

export default Card
