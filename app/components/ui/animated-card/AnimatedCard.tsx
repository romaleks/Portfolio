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
}

const AnimatedCard: FC<IAnimatedCard> = ({ title, image }) => {
  const ref = useRef<HTMLDivElement>(null)

  const { rotateX, rotateY } = useAnimatedCard(ref)

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.rotationWrapper}
        style={{ rotateX, rotateY }}
      >
        <div className={styles.cardWrapper} ref={ref}>
          <Card title={title} image={image} />
        </div>
        <div className={styles.shadow}>
          <Image src={image} alt="shadow" width={500} height={100} />
        </div>
      </motion.div>
    </div>
  )
}

export default AnimatedCard
