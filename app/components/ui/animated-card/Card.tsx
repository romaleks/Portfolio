'use client'

import { FC } from 'react'
import styles from './AnimatedCard.module.scss'
import { motion } from 'framer-motion'

const Card: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>3D card effect</div>
    </div>
  )
}

export default Card
