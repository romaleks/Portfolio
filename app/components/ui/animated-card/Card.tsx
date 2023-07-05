import { FC } from 'react'
import styles from './AnimatedCard.module.scss'
import Image from 'next/image'
import { IAnimatedCard } from './AnimatedCard'
import cn from 'clsx'
import { motion } from 'framer-motion'

const Card: FC<IAnimatedCard> = ({
  image,
  title,
  isLarge,
  variants,
  transition,
}) => {
  return (
    <div className={cn(styles.card, { [styles.large]: isLarge })}>
      <motion.div
        className={styles.image}
        variants={variants}
        transition={transition}
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </motion.div>
      <div className={styles.title}>{title}</div>
    </div>
  )
}

export default Card
