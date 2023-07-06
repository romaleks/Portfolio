import { FC } from 'react'
import styles from './AnimatedCard.module.scss'
import Image from 'next/image'
import { IAnimatedCard } from './AnimatedCard'
import cn from 'clsx'

const Card: FC<IAnimatedCard> = ({ image, title, isLarge }) => {
  return (
    <div className={cn(styles.card, { [styles.large]: isLarge })}>
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
