'use client'
import { FC, useRef } from 'react'
import styles from './AnimatedCard.module.scss'
import Card from './Card'
import { useAnimatedCard } from './useAnimatedCard'
import { motion } from 'framer-motion'
import Image from 'next/image'

export interface IAnimatedCard {
  title: string
  image: string
  isLarge?: boolean
}

const AnimatedCard: FC<IAnimatedCard> = ({ title, image, isLarge }) => {
  const ref = useRef<HTMLDivElement>(null)

  const { rotateX, rotateY } = useAnimatedCard(ref)

  const cardMotion = {
    hover: {
      scale: 1.03,
    },
  }

  const imageMotion = {
    initial: { borderRadius: '1rem' },
    hover: {
      scale: 1.1,
      borderRadius: '2rem',
    },
  }

  const transition = { cubicBezier: [0.03, 0.98, 0.52, 0.99], duration: 0.4 }

  return (
    <motion.div
      className={styles.container}
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className={styles.rotationWrapper}
        style={{ rotateX, rotateY }}
        variants={cardMotion}
        transition={transition}
      >
        <div className={styles.cardWrapper} ref={ref}>
          <Card
            title={title}
            image={image}
            isLarge={isLarge}
            variants={imageMotion}
            transition={transition}
          />
        </div>
        <div className={styles.shadow}>
          <Image src={image} alt="shadow" width={500} height={100} />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default AnimatedCard
