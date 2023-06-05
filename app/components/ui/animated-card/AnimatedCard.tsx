import { FC } from 'react'
import Grid from './Grid'
import styles from './AnimatedCard.module.scss'
import Card from './Card'

const AnimatedCard: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rotationWrapper}>
        <Grid />
        <div className={styles.cardWrapper}>
          <Card />
        </div>
      </div>
    </div>
  )
}

export default AnimatedCard
