'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC, useRef } from 'react'

import styles from './AnimatedCard.module.scss'
import Card from './Card'
import { useAnimatedCard } from './useAnimatedCard'

export interface IAnimatedCard {
  title: string
  image: string
  isLarge?: boolean
}

const AnimatedCard: FC<IAnimatedCard> = ({ title, image, isLarge }) => {
  const ref = useRef<HTMLDivElement>(null)

  const { rotateX, rotateY } = useAnimatedCard(ref)

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.rotationWrapper}
        style={{ rotateX, rotateY }}
      >
        <div className={styles.cardWrapper} ref={ref}>
          <Card title={title} image={image} isLarge={isLarge} />
        </div>
        <div className={styles.shadow}>
          <Image src={image} alt="shadow" width={500} height={100} />
        </div>
      </motion.div>
    </div>
  )
}

export default AnimatedCard
